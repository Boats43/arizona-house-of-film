import React from "react";
import { Helmet } from "react-helmet";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const rocNumber = "315259";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I get a quote for window tinting in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can get a free quote by filling out our contact form, calling 480-788-1591, or emailing info@arizonahouseoffilm.com.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arizona House of Film serves the entire Phoenix Valley, including Scottsdale, Tempe, Mesa, Chandler, Gilbert, and Peoria.",
        },
      },
      {
        "@type": "Question",
        name: "Are you a licensed contractor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are fully licensed under the Arizona Registrar of Contractors, ROC #315259.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Us | Window Tinting Quote Phoenix | Arizona House of Film
        </title>
        <meta
          name="description"
          content="Get a free estimate for residential or commercial window tinting. Serving Phoenix & Scottsdale. Call 480-788-1591 today for a solar or security audit."
        />
        <link rel="canonical" href="https://arizonahouseoffilm.com/contact" />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="bg-[#020617] min-h-screen">
        {/* HERO / HEADER */}
        <div className="pt-24 pb-16 bg-gradient-to-b from-slate-900 via-[#020617] to-[#020617]">
          <ContactHeader
            title="Get in Touch"
            subtitle="Ready to transform your space with professional window film? Contact us today for a free consultation and quote."
          />
        </div>

        {/* =========================
           MAIN CONTENT GRID (FIXED VERSION)
        ============================ */}
        <section className="relative z-10 py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 items-start">

              {/* LEFT COLUMN — CONTACT INFO */}
              <aside className="w-full bg-white/5 p-6 rounded-sm border border-white/10">
                <ContactInfo />
              </aside>

              {/* RIGHT COLUMN — FORM */}
              <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                    REQUEST YOUR <span className="text-blue-600 italic">FREE AUDIT</span>
                  </h2>
                  <p className="text-[11px] text-gray-400 mt-2 font-black uppercase tracking-[0.2em]">
                    All our security specialists will respond within 24 hours.
                  </p>
                </div>

                <div className="flex flex-col xl:flex-row gap-12">
                  {/* Left text area */}
                  <div className="xl:w-1/3">
                    <h3 className="text-4xl font-black text-slate-900 leading-[1.1] mb-6">
                      Request <br /> Your Free <br /> Quote
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
                      Fill out the form below and we'll get back to you with a detailed quote for your window film project.
                    </p>

                    <ul className="space-y-4">
                      {[
                        "Free consultation and measurement",
                        "Detailed quote within 24 hours",
                        "Licensed, bonded, and insured",
                        "Professional installation guarantee",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-[11px] font-black uppercase tracking-tight text-slate-800"
                        >
                          <span className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={4}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* FORM */}
                  <div className="xl:w-2/3">
                    <ContactFormSection />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE AREA + MAP */}
        <section className="bg-slate-900 border-t border-white/10">
          <div className="max-w-7xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 text-center lg:text-left">
              Our <span className="text-blue-500 italic">Service Area</span>
            </h2>
            <div className="h-[500px] w-full border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <ContactMap />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black py-6 text-center border-t border-white/5">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">
            Arizona House of Film • ROC #{rocNumber} • Phoenix Specialists
          </p>
        </footer>
      </main>
    </>
  );
};

export default Contact;