import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, Upload, Loader2, AlertCircle } from 'lucide-react';
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
      const response = await fetch("https://formsubmit.co/ajax/arizonahouseoffilm@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      const data = await response.json();

      if (response.ok && data.success) {
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
        throw new Error(data.message || 'Form submission failed');
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
          <input name="First Name" required className="industrial-input" placeholder="JOHN" disabled={isSubmitting} />
        </div>
        <div>
          <label className="industrial-label">Last Name *</label>
          <input name="Last Name" required className="industrial-input" placeholder="SMITH" disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="industrial-label">Email Address *</label>
          <input name="Email" type="email" required className="industrial-input" placeholder="J.SMITH@COMPANY.COM" disabled={isSubmitting} />
        </div>
        <div>
          <label className="industrial-label">Phone Number *</label>
          <input name="Phone" type="tel" required className="industrial-input" placeholder="480-000-0000" disabled={isSubmitting} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="industrial-label">Project City *</label>
          <input name="City" required className="industrial-input" placeholder="PHOENIX" disabled={isSubmitting} />
        </div>
        <div>
          <label className="industrial-label">Zip Code *</label>
          <input name="Zip Code" required className="industrial-input" placeholder="85001" disabled={isSubmitting} />
        </div>
      </div>

      <div>
        <label className="industrial-label">Project Type *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
          {['Commercial', 'Residential', 'Decorative', 'Safety'].map((type) => (
            <label key={type} className="flex items-center justify-center border-2 border-slate-100 py-3 cursor-pointer hover:border-green-500 transition-colors has-[:checked]:border-green-600 has-[:checked]:bg-green-50">
              <input type="radio" name="Project Type" value={type} className="hidden" required defaultChecked={type === 'Commercial'} />
              <span className="text-[10px] font-black uppercase text-slate-600 tracking-tighter">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="industrial-label">Project Details *</label>
        <textarea
          name="Message"
          rows={4}
          required
          className="industrial-input min-h-[120px] resize-none"
          placeholder="DESCRIBE SCOPE, WINDOW COUNT, OR SPECIFIC GOALS..."
          disabled={isSubmitting}
        />
      </div>

      {/* Industrial File Upload */}
      <div className="relative group p-8 border-2 border-dashed border-slate-200 bg-slate-50 hover:border-green-600 transition-all cursor-pointer">
        <input
          type="file"
          name="attachment"
          multiple
          accept="image/*,.pdf"
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
          disabled={isSubmitting}
        />
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="w-8 h-8 text-slate-400 mb-2 group-hover:text-green-600 transition-colors" />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Upload Project Photos</p>
          <p className="text-[8px] text-slate-400 mt-1 uppercase">PNG, JPG, PDF (MAX 10MB)</p>
        </div>
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