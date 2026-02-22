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
      "name": "How do I get a quote for window tinting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get a free quote by filling out the contact form on our website, calling us at 480-788-1591, or emailing us at info@arizonahouseoffilm.com. We offer free consultations and estimates."
      }
    }, {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly serve the entire state of Arizona, including Phoenix, Scottsdale, Tempe, Mesa, Chandler, and surrounding areas."
      }
    }, {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Arizona House of Film is fully licensed (ROC #315259), bonded, and insured for your complete peace of mind."
      }
    }]
  };

  return (
    <>
      <Helmet>
        <title>Contact for a Free Window Tinting Quote | Arizona House of Film</title>
        <meta name="description" content="Get in touch with Arizona House of Film for a free estimate on residential or commercial window tinting in Arizona. Call 480-788-1591 to schedule your security or solar audit." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="bg-slate-950">
        {/* ContactHeader usually contains the Hero text - ensure it uses Slate-950/Red-600 */}
        <div className="pt-20">
            <ContactHeader 
                title="Establish Perimeter Protection" 
                subtitle={`Contact our experts today. Arizona Licensed Contractor ROC #${rocNumber}`} 
            />
        </div>

        <section className="relative z-10 -mt-12 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* ContactInfo: Ensure this component uses white cards with black text for clarity */}
                    <div className="lg:col-span-1">
                        <ContactInfo />
                    </div>
                    
                    {/* ContactFormSection: The primary conversion engine */}
                    <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-2xl">
                        <ContactFormSection />
                    </div>
                </div>
            </div>
        </section>

        {/* ContactMap: Provides local proof for Phoenix presence */}
        <section className="bg-slate-900 border-t border-white/10">
            <ContactMap />
        </section>

        {/* Legal Footer Mini-Bar */}
        <div className="bg-black py-4 text-center">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                Arizona House of Film • ROC #{rocNumber} • Licensed • Bonded • Insured
            </p>
        </div>
      </main>
    </>
  );
};

export default Contact;