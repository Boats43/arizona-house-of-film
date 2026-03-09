import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, CheckCircle, Shield, Award, Users } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  const pageTitle = "Contact Arizona House of Film | Free Quote | Phoenix, AZ | 480-788-1591";
  const metaDescription = "Contact Arizona House of Film for a free window tinting quote in Phoenix AZ. Licensed ROC #314088. Call 480-788-1591 for a 24-hour response.";
  const canonicalUrl = "https://arizonahouseoffilm.com/contact";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Arizona House of Film",
    url: canonicalUrl,
    description: metaDescription,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://arizonahouseoffilm.com",
      name: "Arizona House of Film",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:00",
          closes: "14:00",
        },
      ],
    },
  };


  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
      </Helmet>

      <main>

        {/* HERO — dark, short */}
        <section className="bg-slate-950 pt-24 md:pt-32 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-[0.2em]">
              Licensed • Bonded • ROC #314088
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-8">
              Get Your Free<br />
              <span className="text-green-400">Window Tinting</span><br />
              Quote Today
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:480-788-1591"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-slate-950 font-black uppercase px-8 py-4 text-sm tracking-widest transition-colors"
              >
                <Phone size={16} /> Call 480-788-1591
              </a>
              <a
                href="mailto:arizonahouseoffilm@gmail.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-green-500 text-white font-black uppercase px-8 py-4 text-sm tracking-widest transition-colors"
              >
                <Mail size={16} /> Email Us
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT INFO STRIP */}
        <section className="bg-white border-b border-slate-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 flex items-center justify-center">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                  <a href="tel:480-788-1591" className="text-xl font-black text-slate-900 hover:text-green-600 transition-colors">
                    480-788-1591
                  </a>
                  <p className="text-sm text-slate-500 mt-0.5">Mon–Fri 7am–6pm · Sat 8am–2pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 flex items-center justify-center">
                  <Mail className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
                  <a
                    href="mailto:arizonahouseoffilm@gmail.com"
                    className="text-base font-black text-slate-900 hover:text-green-600 transition-colors break-all"
                  >
                    arizonahouseoffilm@gmail.com
                  </a>
                  <p className="text-sm text-slate-500 mt-0.5">24-hour response guarantee</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 flex items-center justify-center">
                  <MapPin className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Service Area</p>
                  <p className="text-xl font-black text-slate-900">Phoenix Metro</p>
                  <p className="text-sm text-slate-500 mt-0.5">Statewide Arizona coverage</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2-COLUMN MAIN — How It Works + Form */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* LEFT — How It Works + Trust Grid */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-slate-900 mb-10">
                  What to Expect
                </h2>

                <div className="space-y-8 mb-14">
                  {[
                    {
                      step: "01",
                      title: "Submit Your Request",
                      desc: "Fill out the form with your project type, location, and goals. Takes less than 2 minutes.",
                    },
                    {
                      step: "02",
                      title: "Free On-Site Audit",
                      desc: "An estimator contacts you within 24 hours to schedule a site visit and provide a detailed quote.",
                    },
                    {
                      step: "03",
                      title: "Professional Installation",
                      desc: "Our certified crew arrives on time, installs your film with precision, and cleans up completely.",
                    },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-5">
                      <span className="flex-shrink-0 w-12 h-12 bg-green-600 text-white flex items-center justify-center font-black text-sm">
                        {step}
                      </span>
                      <div>
                        <p className="font-black uppercase text-sm tracking-wider text-slate-900 mb-1">{title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2×2 Trust Grid */}
                <h3 className="text-lg font-black uppercase tracking-wider text-slate-900 mb-5">Why Arizona House of Film</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, title: "Licensed & Bonded", sub: "ROC #314088 verified" },
                    { icon: Award, title: "15+ Years Experience", sub: "Commercial & residential" },
                    { icon: CheckCircle, title: "24-Hour Guarantee", sub: "Rapid quote turnaround" },
                    { icon: Users, title: "500+ Projects", sub: "Across Arizona" },
                  ].map(({ icon: Icon, title, sub }) => (
                    <div key={title} className="bg-white border border-slate-200 p-5">
                      <Icon className="text-green-600 mb-3" size={20} />
                      <p className="font-black uppercase text-xs tracking-wider text-slate-900 mb-0.5">{title}</p>
                      <p className="text-slate-500 text-xs">{sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Form */}
              <div className="bg-white border border-slate-200 shadow-sm p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 mb-2">
                  Request a Free Audit
                </h2>
                <p className="text-slate-500 text-sm mb-8 font-medium">
                  Estimators contact you within 24 hours — no commitment required.
                </p>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

        {/* SERVICE AREA MAP */}
        <ContactMap />

        {/* BOTTOM TRUST BAR */}
        <section className="bg-slate-950 py-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white font-black uppercase text-sm tracking-widest">Arizona House of Film</p>
              <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span>ROC #314088</span>
                <span>Licensed</span>
                <span>Bonded</span>
                <span>Insured</span>
                <span>15+ Years</span>
              </div>
              <a
                href="tel:480-788-1591"
                className="text-green-400 font-black text-lg hover:text-green-300 transition-colors"
              >
                480-788-1591
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;
