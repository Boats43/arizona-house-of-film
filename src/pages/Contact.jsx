import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMap from '@/components/contact/ContactMap';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const rocNumber = "315259";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How do I get a quote for window tinting in Phoenix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get a free quote by filling out our contact form, calling 480-788-1591, or emailing info@arizonahouseoffilm.com. We provide free on-site solar and security audits."
      }
    }, {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arizona House of Film serves the entire Phoenix Valley, including Scottsdale, Tempe, Mesa, Chandler, Gilbert, and Peoria."
      }
    }, {
      "@type": "Question",
      "name": "Are you a licensed contractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are a fully licensed Arizona Registrar of Contractors (ROC) holder, #315259. We are also fully bonded and insured."
      }
    }]
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Window Tinting Quote Phoenix | Arizona House of Film</title>
        <meta name="description" content="Get a free estimate for residential or commercial window tinting. Serving Phoenix & Scottsdale since 2012. Call 480-788-1591 today for a solar or security audit." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/contact" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="bg-slate-950 min-h-screen">
        {/* Header Section */}
        <div className="pt-24 pb-12">
            <ContactHeader 
                title="Establish Perimeter Protection" 
                subtitle={`Licensed Arizona Contractor ROC #${rocNumber}`} 
            />
        </div>

        {/* Form and Info Section */}
        <section className="relative z-10 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 items-start">
                    
                    {/* Sidebar Info */}
                    <div className="lg:col-span-1 bg-white p-8 shadow-xl border-b lg:border-none border-gray-100">
                        <ContactInfo />
                    </div>
                    
                    {/* Main Form Section */}
                    <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-2xl">
                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">
                            Request Your <span className="text-blue-600 italic">Free Audit</span>
                        </h2>
                        <p className="text-gray-600 mb-8 font-medium italic">
                            Fill out the form below and our security specialists will respond within 24 hours.
                        </p>
                        <ContactFormSection />
                    </div>
                    
                </div>
            </div>
        </section>

        {/* Map Section */}
        <section className="bg-slate-900 border-t border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
            <ContactMap />
        </section>

        {/* Mini Footer */}
        <footer className="bg-black py-6 text-center border-t border-white/5">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">
                Arizona House of Film • ROC #{rocNumber} • Phoenix Specialists
            </p>
        </footer>
      </main>
    </>
  );
};

export default Contact;