import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building, Utensils, School, Stethoscope, Hotel, Briefcase, Warehouse, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  {
    slug: 'office-buildings',
    name: 'Office Buildings',
    icon: Briefcase,
    description: 'Solar control and glare reduction for productive, energy-efficient workspaces across Arizona.',
  },
  {
    slug: 'retail-stores',
    name: 'Retail Stores',
    icon: Building,
    description: 'UV protection for merchandise and anti-graffiti film for high-traffic storefronts.',
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    icon: Utensils,
    description: 'Comfort-focused tinting that keeps dining rooms cool without sacrificing natural light.',
  },
  {
    slug: 'medical-facilities',
    name: 'Medical Facilities',
    icon: Stethoscope,
    description: 'HIPAA-supporting privacy films and safety glazing for healthcare environments.',
  },
  {
    slug: 'educational-institutions',
    name: 'Schools & Universities',
    icon: School,
    description: 'Safety films meeting school security code requirements; anti-glare for smartboards.',
  },
  {
    slug: 'government-buildings',
    name: 'Government Buildings',
    icon: Briefcase,
    description: 'Blast-mitigation films, energy efficiency, and privacy for sensitive government facilities.',
  },
  {
    slug: 'hotels-hospitality',
    name: 'Hotels & Hospitality',
    icon: Hotel,
    description: 'Guest comfort film for sun-facing rooms; decorative films for spas and common areas.',
  },
  {
    slug: 'warehouses',
    name: 'Warehouses',
    icon: Warehouse,
    description: 'Heat rejection and safety films for large industrial spaces, with rapid ROI.',
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries does Arizona House of Film serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve offices, retail stores, restaurants, medical facilities, schools, government buildings, hotels, and warehouses across Arizona. Our commercial team has experience with projects ranging from single-suite offices to multi-building campuses and government facilities.",
      },
    },
    {
      "@type": "Question",
      name: "How long do commercial window film installations take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most commercial installations take 1–3 days depending on square footage and glass complexity. We schedule around your operations — including nights and weekends — to minimize disruption. Large multi-floor projects are phased over a planned timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Does commercial window film qualify for Arizona utility rebates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SRP and APS offer commercial rebate programs for qualifying energy-saving window film installations. We provide all required documentation and can help you navigate the rebate application process. Ask our team during your free site assessment.",
      },
    },
  ],
};

const Industries = () => {
  const pageTitle = "Industries We Serve | Commercial Window Tinting Arizona | Arizona House of Film";
  const metaDescription = "Arizona House of Film serves offices, retail, medical, schools, government, restaurants, hotels, and warehouses across Phoenix and Arizona. Licensed ROC #314088.";
  const canonicalUrl = "https://arizonahouseoffilm.com/industries";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main>
        {/* HERO */}
        <section className="bg-slate-900 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-blue-600 text-white font-black text-xs mb-6 uppercase tracking-widest">
              Commercial Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-tight tracking-tighter mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Since 2012, Arizona House of Film has delivered commercial window film solutions across every major industry sector in Arizona. Licensed ROC #314088 — we understand the unique requirements of each environment we work in.
            </p>
          </div>
        </section>

        {/* INDUSTRY GRID */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map(({ slug, name, icon: Icon, description }) => (
                <Link
                  key={slug}
                  to={`/industries/${slug}`}
                  className="group flex flex-col p-8 border border-gray-200 bg-gray-50 hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-3">{name}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
                  <div className="mt-6 flex items-center text-blue-600 font-bold text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-10">Commercial Window Film — Common Questions</h2>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-8">
                  <h3 className="font-black text-gray-900 uppercase text-sm mb-3">{item.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-blue-700 py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
              Ready to Protect Your Facility?
            </h2>
            <p className="text-blue-100 text-lg mb-8 font-medium">
              Licensed ROC #314088 · Free on-site estimates · Statewide Arizona coverage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-black px-10 h-14 rounded-none">
                <Link to="/commercial-window-tinting">Commercial Services</Link>
              </Button>
              <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 font-black px-10 h-14 rounded-none">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Industries;
