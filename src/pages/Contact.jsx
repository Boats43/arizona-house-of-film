import React from "react";
import { Helmet } from "react-helmet";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get a quote for window tinting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a free quote by filling out the contact form, calling 480-788-1591, or emailing arizonahouseoffilm@gmail.com. We offer free consultations and estimates."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We proudly serve Phoenix, Scottsdale, Tempe, Mesa, Chandler, and the entire state of Arizona."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Arizona House of Film is fully licensed, bonded, and insured."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact for a Free Window Tinting Quote | Arizona House of Film</title>

        <meta
          name="description"
          content="Get a free estimate for residential or commercial window tinting in Phoenix and throughout Arizona. Call 480-788-1591 or request your consultation online."
        />

        <link rel="canonical" href="https://arizonahouseoffilm.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact for a Free Window Tinting Quote | Arizona House of Film" />
        <meta property="og:description" content="Request a free consultation for residential or commercial window tinting in Arizona." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-contact.jpg" />

        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="w-full bg-[#020617] overflow-x-hidden">

        {/* HEADER */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-[#020617]">
          <ContactHeader />
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-7xl mx-auto px-4 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="bg-slate-900/60 backdrop-blur rounded-2xl border border-white/10 shadow-xl p-6">
                <ContactInfo />
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-900">
                <div className="p-10 md:p-14">

                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                      Request Your{" "}
                      <span className="text-blue-600 italic">Free Audit</span>
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-2xl">
                      Fill out the form below and our team will provide a detailed quote tailored to your residential or commercial window film project.
                    </p>
                  </div>

                  <ContactFormSection />

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* MAP */}
        <section className="bg-slate-900 border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-4">

            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Area
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We proudly serve Phoenix and the entire state of Arizona with professional window film installation services.
              </p>
            </div>

            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10">
              <ContactMap />
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;