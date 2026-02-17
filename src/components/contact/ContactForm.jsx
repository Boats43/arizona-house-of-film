import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, Upload, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Clear form
        form.reset();
        
        // Show success toast
        toast({
          title: "Message Sent Successfully! ✓",
          description: "Thank you for contacting us. We'll respond within 24 hours.",
          className: "bg-green-50 border-green-200",
        });

        // Navigate to thank you page after a brief delay
        setTimeout(() => {
          navigate('/thank-you');
        }, 1500);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      toast({
        variant: "destructive",
        title: "Unable to Send Message",
        description: (
          <div className="space-y-2">
            <p>Please contact us directly:</p>
            <p className="font-semibold">📧 arizonahouseoffilm@gmail.com</p>
            <p className="font-semibold">📞 480-788-1591</p>
          </div>
        ),
        duration: 8000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Email Service Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900">
          <p className="font-semibold mb-1">Need immediate assistance?</p>
          <p>Call us at <span className="font-bold">480-788-1591</span> or email <span className="font-bold">arizonahouseoffilm@gmail.com</span></p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_next" value="https://arizonahouseoffilm.com/thank-you" />
        <input type="hidden" name="_subject" value="🎬 New Website Quote Request - Arizona House of Film" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Thank you for contacting Arizona House of Film! We've received your request and will respond within 24 hours." />
        
        {interestedFilm && (
          <div>
            <Label htmlFor="interested_film">Film of Interest</Label>
            <Input
              id="interested_film"
              name="Interested Film"
              value={interestedFilm}
              readOnly
              className="mt-1 bg-gray-100 cursor-not-allowed text-gray-900"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input 
              id="firstName" 
              name="First Name" 
              required 
              className="mt-1 text-gray-900" 
              disabled={isSubmitting}
              placeholder="John"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input 
              id="lastName" 
              name="Last Name" 
              required 
              className="mt-1 text-gray-900" 
              disabled={isSubmitting}
              placeholder="Smith"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              name="Email" 
              type="email" 
              required 
              className="mt-1 text-gray-900" 
              disabled={isSubmitting}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input 
              id="phone" 
              name="Phone" 
              type="tel" 
              required
              className="mt-1 text-gray-900" 
              disabled={isSubmitting}
              placeholder="(480) 555-1234"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City *</Label>
            <Input 
              id="city" 
              name="City" 
              required
              className="mt-1 text-gray-900" 
              disabled={isSubmitting}
              placeholder="Phoenix"
            />
          </div>
          <div>
            <Label htmlFor="zipCode">Zip Code *</Label>
            <Input 
              id="zipCode" 
              name="Zip Code" 
              required
              className="mt-1 text-gray-900" 
              disabled={isSubmitting}
              placeholder="85001"
            />
          </div>
        </div>

        <div>
          <Label>Project Type *</Label>
          <RadioGroup name="Project Type" required defaultValue="Residential" className="flex flex-wrap gap-4 mt-2">
            {['Commercial', 'Residential', 'Decorative', 'Safety & Security'].map(
              (type) => (
                <div key={type} className="flex items-center space-x-2">
                  <RadioGroupItem value={type} id={type.toLowerCase()} disabled={isSubmitting} />
                  <Label htmlFor={type.toLowerCase()} className="cursor-pointer">{type}</Label>
                </div>
              )
            )}
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="Message"
            rows={5}
            required
            className="mt-1 text-gray-900"
            placeholder="Tell us about your project, timeline, and any specific requirements..."
            disabled={isSubmitting}
          />
        </div>

        <div>
          <Label htmlFor="attachment">Upload Photos (Optional)</Label>
          <div className="relative mt-1">
            <Input
              id="attachment"
              name="attachment"
              type="file"
              multiple
              accept="image/png, image/jpeg, image/jpg, image/gif, .pdf"
              className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 
                         file:rounded-full file:border-0 file:text-sm file:font-semibold 
                         file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                         cursor-pointer"
              disabled={isSubmitting}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Upload className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Upload photos of windows/areas to be tinted (PNG, JPG, GIF, PDF - max 10MB total)
          </p>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-teal-600 
                     hover:from-blue-700 hover:to-teal-700 text-white py-3 text-lg font-bold shadow-lg
                     transition-all duration-200 transform hover:scale-[1.02]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending Your Request...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Request My Free Quote
            </>
          )}
        </Button>

        <p className="text-xs text-center text-gray-500">
          By submitting this form, you agree to receive communications from Arizona House of Film. 
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;