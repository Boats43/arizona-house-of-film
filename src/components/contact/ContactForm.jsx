import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [interestedFilm, setInterestedFilm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const film = searchParams.get('film');
    const sku = searchParams.get('sku');
    if (film && sku) setInterestedFilm(`${film} (SKU: ${sku})`);
    else if (film) setInterestedFilm(film);
    else setInterestedFilm('');
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: (formData.get('First Name') || '') + ' ' + (formData.get('Last Name') || ''),
          phone: formData.get('Phone') || '',
          email: formData.get('Email') || '',
          address: (formData.get('City') || '') + ', ' + (formData.get('Zip Code') || ''),
          message: formData.get('Message') || '',
          propertyType: formData.get('Project Type') || '',
          source: 'contact-form',
        }),
      });

      if (response.ok) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'generate_lead',
          form_source: 'contact-form',
          page_path: window.location.pathname,
        });

        form.reset();
        toast({
          title: "Audit Request Received ✓",
          description: "Our estimators will contact you within 24 hours.",
          className: "bg-green-600 border-none text-white font-bold rounded-none",
        });

        setTimeout(() => {
          navigate('/thank-you');
        }, 1500);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Please call us directly at 480-788-1591",
        className: "rounded-none font-bold",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input type="text" name="website_url" style={{display:'none'}} tabIndex={-1} autoComplete="off" />
      {/* FormSubmit Configuration */}
      <input type="hidden" name="_subject" value="🎬 INDUSTRIAL QUOTE REQUEST - Arizona House of Film" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      {interestedFilm && (
        <div className="animate-in fade-in slide-in-from-top-2">
          <label className="industrial-label text-green-600">Selected Film Specification</label>
          <input
            name="Interested Film"
            value={interestedFilm}
            readOnly
            className="industrial-input bg-slate-50 border-green-200 text-green-700"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="industrial-label">First Name *</label>
          <input name="First Name" required className="industrial-input" placeholder="JOHN" disabled={isSubmitting} aria-label="First Name" />
        </div>
        <div>
          <label className="industrial-label">Last Name *</label>
          <input name="Last Name" required className="industrial-input" placeholder="SMITH" disabled={isSubmitting} aria-label="Last Name" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="industrial-label">Email Address *</label>
          <input name="Email" type="email" required className="industrial-input" placeholder="J.SMITH@COMPANY.COM" disabled={isSubmitting} aria-label="Email Address" />
        </div>
        <div>
          <label className="industrial-label">Phone Number *</label>
          <input name="Phone" type="tel" required className="industrial-input" placeholder="480-000-0000" disabled={isSubmitting} aria-label="Phone Number" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="industrial-label">Project City *</label>
          <input name="City" required className="industrial-input" placeholder="PHOENIX" disabled={isSubmitting} aria-label="City" />
        </div>
        <div>
          <label className="industrial-label">Zip Code *</label>
          <input name="Zip Code" required className="industrial-input" placeholder="85001" disabled={isSubmitting} aria-label="Zip Code" />
        </div>
      </div>

      <fieldset>
        <legend className="industrial-label">Project Type *</legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          {['Commercial', 'Residential', 'Decorative', 'Safety'].map((type) => (
            <label key={type} className="flex items-center justify-center border-2 border-slate-100 py-3 cursor-pointer hover:border-green-500 transition-colors has-[:checked]:border-green-600 has-[:checked]:bg-green-50">
              <input type="radio" name="Project Type" value={type} className="hidden" required defaultChecked={type === 'Commercial'} />
              <span className="text-[10px] font-black uppercase text-slate-600 tracking-tighter">{type}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="industrial-label">Project Details *</label>
        <textarea
          name="Message"
          rows={4}
          required
          className="industrial-input min-h-[120px] resize-none"
          placeholder="DESCRIBE SCOPE, WINDOW COUNT, OR SPECIFIC GOALS..."
          disabled={isSubmitting}
          aria-label="Message"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="industrial-button flex items-center justify-center gap-3 disabled:bg-slate-400"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            PROCESSING REQUEST...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            REQUEST MY FREE AUDIT
          </>
        )}
      </button>

      <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest leading-loose">
        Security Protected • 24-Hour Response Guarantee • No Data Sharing
      </p>
    </form>
  );
};

export default ContactForm;