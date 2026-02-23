import React from "react";
import { Helmet } from "react-helmet";
import { Phone, Mail, Zap } from "lucide-react";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  const rocNumber = "315259";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I get a quote for window tinting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can get a free quote by filling out the contact form, calling 480-788-1591, or emailing arizonahouseoffilm@gmail.com."
        }
      },
      {
        "@type": "Question",
        name: "What areas do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We proudly serve Phoenix, Scottsdale, Tempe, Mesa, Chandler, and the entire state of Arizona."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Phoenix Window Tinting Experts | Arizona House of Film</title>
        <meta
          name="description"
          content="Contact Arizona House of Film for commercial and residential window tinting in Phoenix. Licensed, bonded, insured. Call 480-788-1591 for a free estimate."
        />
        <link rel="canonical" href="https://arizonahouseoffilm.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="bg-slate-950 min-h-screen text-white selection:bg-green-500 selection:text-slate-950">

        {/* HERO */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 border-b border-white/5">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
            <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-[0.2em]">
              Licensed • Bonded • ROC #{rocNumber}
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
              Phoenix Window Tinting <br />
              <span className="text-green-500 italic">Contact Experts</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
              Commercial and residential window film solutions across Arizona.
              Contact our team for specifications, site assessments, and rapid quotes.
            </p>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">

              {/* LEFT SIDEBAR */}
              <div className="lg:col-span-4 p-8 md:p-12 bg-slate-950 border-r border-white/10">
                <div className="space-y-12">

                  <div>
                    <h3 className="text-green-500 font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                      <Phone size={14} /> Direct Line
                    </h3>
                    <a
                      href="tel:480-788-1591"
                      className="text-3xl font-black hover:text-green-400 transition-colors"
                    >
                      480-788-1591
                    </a>
                  </div>

                  <div>
                    <h3 className="text-green-500 font-black uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                      <Mail size={14} /> Project Desk
                    </h3>
                    <a
                      href="mailto:arizonahouseoffilm@gmail.com"
                      className="text-lg font-black break-all hover:text-green-400 transition-colors"
                    >
                      arizonahouseoffilm@gmail.com
                    </a>
                  </div>

                  <div className="pt-12 border-t border-white/5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-500/10 rounded-lg">
                        <Zap className="text-green-500" size={20} />
                      </div>
                      <div>
                        <p className="font-black uppercase text-sm italic">
                          Rapid Quote System
                        </p>
                        <p className="text-slate-400 text-sm mt-1">
                          Commercial audits typically delivered within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="lg:col-span-8 p-8 md:p-16 bg-white text-slate-950">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
                    Request Your <span className="text-green-600">Free Audit</span>
                  </h2>
                  <p className="text-slate-600 font-bold max-w-xl">
                    Submit your project details and an estimator will contact you
                    to schedule a site visit or consultation.
                  </p>
                </div>

                <ContactFormSection />
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE AREA MAP */}
        <section className="py-20 md:py-24 border-t border-white/5 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">

            <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                  Our Service Area
                </h2>
                <div className="h-1.5 w-24 bg-green-500 mt-4" />
              </div>
              <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                Statewide Arizona Coverage
              </p>
            </div>

            <div className="aspect-video w-full border-4 border-slate-900 shadow-2xl">
              <ContactMap />
            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;