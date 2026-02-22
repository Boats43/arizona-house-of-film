import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Info, Upload, Send } from "lucide-react";

const ContactFormSection = () => {
  const location = useLocation();
  const [interestedFilm, setInterestedFilm] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const film = params.get("film");
    const sku = params.get("sku");

    if (film && sku) {
      setInterestedFilm(`${film} (SKU: ${sku})`);
    } else if (film) {
      setInterestedFilm(film);
    }
  }, [location.search]);

  // UI Classes for consistency
  const labelClasses = "text-[10px] font-black uppercase tracking-widest text-slate-700 mb-1";
  const inputClasses = "w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-gray-300 text-slate-900 font-medium";

  return (
    <div className="bg-[#f0f9fa] p-6 md:p-8 rounded-xl border border-teal-100 shadow-sm">
      
      {/* Assistance Banner */}
      <div className="bg-white border border-teal-200 rounded-lg p-4 mb-8 flex items-start gap-3 shadow-sm">
        <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <Info className="text-white w-3 h-3" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-slate-900 leading-tight">Need immediate assistance?</p>
          <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
            Call us at <span className="text-teal-600 font-bold">480-788-1591</span> or email 
            <span className="text-teal-600 font-bold ml-1 italic underline">arizonahouseoffilm@gmail.com</span>
          </p>
        </div>
      </div>

      <form
        action="https://formsubmit.co/arizonahouseoffilm@gmail.com"
        method="POST"
        encType="multipart/form-data"
        className="space-y-5"
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_subject" value="🎬 New Website Quote Request - Arizona House of Film" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://arizonahouseoffilm.com/thank-you" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_autoresponse" value="Thank you for contacting Arizona House of Film! We've received your request and will respond within 24 hours." />

        {interestedFilm && (
          <div>
            <Label htmlFor="interested_film" className={labelClasses}>Film of Interest</Label>
            <Input
              id="interested_film"
              name="Interested Film"
              value={interestedFilm}
              readOnly
              className="mt-1 bg-gray-100 cursor-not-allowed border-gray-300 font-bold text-teal-700"
            />
          </div>
        )}

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className={labelClasses}>First Name *</Label>
            <Input id="firstName" name="First Name" required placeholder="John" className={inputClasses} />
          </div>
          <div>
            <Label htmlFor="lastName" className={labelClasses}>Last Name *</Label>
            <Input id="lastName" name="Last Name" required placeholder="Smith" className={inputClasses} />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email" className={labelClasses}>Email Address *</Label>
            <Input id="email" name="Email" type="email" required placeholder="john@example.com" className={inputClasses} />
          </div>
          <div>
            <Label htmlFor="phone" className={labelClasses}>Phone Number *</Label>
            <Input id="phone" name="Phone" type="tel" required placeholder="(480) 555-0123" className={inputClasses} />
          </div>
        </div>

        {/* Location Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className={labelClasses}>City *</Label>
            <Input id="city" name="City" required placeholder="Phoenix" className={inputClasses} />
          </div>
          <div>
            <Label htmlFor="zipCode" className={labelClasses}>Zip Code *</Label>
            <Input id="zipCode" name="Zip Code" required placeholder="85001" className={inputClasses} />
          </div>
        </div>

        {/* Project Type Radio Group */}
        <div className="py-2">
          <Label className={labelClasses}>Project Type *</Label>
          <div className="grid grid-cols-2 gap-y-3 mt-3">
            {["Commercial", "Residential", "Decorative", "Safety & Security"].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="Project Type" 
                  value={type} 
                  required 
                  className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500 cursor-pointer"
                />
                <span className="text-[11px] font-bold text-slate-700 group-hover:text-teal-600 transition-colors uppercase tracking-tight">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className={labelClasses}>Message / Project Details *</Label>
          <Textarea
            id="message"
            name="Message"
            rows={4}
            required
            placeholder="Tell us about your project, timeline, and requirements..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* File Upload UI */}
        <div className="bg-white border-2 border-dashed border-teal-100 p-5 rounded-lg text-center">
          <Label htmlFor="attachment" className={labelClasses}>Upload Photos (Optional)</Label>
          <div className="mt-3 relative">
            <input
              id="attachment"
              name="attachment"
              type="file"
              multiple
              accept="image/png, image/jpeg, image/jpg, image/gif, .pdf"
              className="hidden"
              onChange={(e) => {
                 // Simple UI feedback for file selection
                 const count = e.target.files.length;
                 const label = document.getElementById('file-label');
                 if(label) label.innerText = count > 0 ? `${count} file(s) selected` : 'Browse Files...';
              }}
            />
            <label 
              htmlFor="attachment"
              className="flex items-center justify-between bg-slate-50 p-2 rounded border border-gray-200 cursor-pointer hover:bg-slate-100 transition-colors"
            >
               <span id="file-label" className="text-[10px] text-gray-400 font-bold uppercase ml-2 text-left">
                  Browse Files...
               </span>
               <div className="bg-teal-500 rounded-sm text-white italic text-[10px] px-4 py-1.5 font-black shadow-sm flex items-center gap-2 uppercase">
                 <Upload className="w-3 h-3" />
                 Upload
               </div>
            </label>
          </div>
          <p className="text-[9px] text-gray-400 mt-2 font-medium">
            PNG, JPG, GIF, PDF — max 10MB total
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#1e6091] hover:bg-[#1a5480] text-white font-black uppercase tracking-[0.2em] py-4 rounded-sm shadow-xl transition-all flex items-center justify-center gap-3 group mt-4 border-none h-auto"
        >
          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          Request My Free Quote
        </Button>

        <p className="text-[9px] text-center text-gray-500 leading-tight">
          By submitting this form, you agree to receive communications from Arizona House of Film. We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactFormSection;