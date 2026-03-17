import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';
import EstimatorCTA from '../../components/EstimatorCTA';

export default function WindowFilmForSchoolsArizona() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you install window film for schools in Arizona?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Arizona House of Film installs security film, solar control film, and privacy film for K-12 schools and university facilities throughout Arizona. Licensed ROC #314088. We work with facility managers and general contractors. Call (480) 788-1591 for a free assessment." }
      },
      {
        "@type": "Question",
        "name": "What security film is recommended for Arizona school buildings?",
        "acceptedAnswer": { "@type": "Answer", "text": "8 mil safety film is the standard specification for Arizona school applications — it holds shattered glass in place during impact events and reduces secondary fragmentation injury. For high-security entry vestibules and administrative glass, 12 mil film with C-Bond anchoring provides maximum deterrence." }
      },
      {
        "@type": "Question",
        "name": "Does school window film qualify for SRP or APS rebates in Arizona?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Qualifying solar control film installations on Arizona school buildings meet SRP Business Solutions and APS energy efficiency rebate requirements. We provide NFRC documentation for rebate applications. Educational institutions with large glass footprints can realize significant rebate amounts." }
      },
      {
        "@type": "Question",
        "name": "How disruptive is window film installation for an active school campus?",
        "acceptedAnswer": { "@type": "Answer", "text": "Minimal disruption. Window film installs from the interior without scaffolding or exterior access. We schedule installations during breaks, after hours, or room-by-room during the school day with minimal classroom disruption. Most installations complete within 1–3 days depending on campus size." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Window Film for Schools Arizona | Safety & Solar Film | ROC #314088</title>
        <meta name="description" content="Window film for Arizona schools. Security film, solar control, and privacy film for K-12 and university facilities. Licensed ROC #314088. Free estimates." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-film-for-schools-arizona" />
        <meta property="og:title" content="Window Film for Schools Arizona | Safety & Solar Film | ROC #314088" />
        <meta property="og:description" content="Window film for Arizona schools. Security film, solar control, and privacy film for K-12 and university facilities. Licensed ROC #314088. Free estimates." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/window-film-for-schools-arizona" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Film for Schools Arizona | Safety & Solar Film | ROC #314088" />
        <meta name="twitter:description" content="Window film for Arizona schools. Security film, solar control, and privacy film for K-12 and university facilities. Licensed ROC #314088. Free estimates." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Industries', url: 'https://arizonahouseoffilm.com/industries' },
        { name: 'Window Film for Schools Arizona', url: 'https://arizonahouseoffilm.com/window-film-for-schools-arizona' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Window Film for Schools in Arizona — Safety, Solar Control, and Privacy</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Why Arizona Schools Need Window Film</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona schools face a unique combination of challenges — extreme solar heat, high UV exposure, and security requirements that exceed most commercial buildings. K-12 campuses and university facilities require window film that addresses all three simultaneously: solar control to reduce HVAC loads, security film to protect against forced entry and shattered glass injury, and privacy film for administrative and counseling spaces.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Security Film for Arizona Schools</h2>
          <p className="text-lg text-slate-700 mb-4">Security window film is a critical specification for Arizona school facilities. 8 mil and 12 mil safety film holds shattered glass in place during impact events — reducing secondary fragmentation injury from broken windows. For entry vestibules and administrative glass, security film provides a meaningful deterrent and delay barrier. We have documented installations for educational facilities throughout the Phoenix metro.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Solar Control Film for School Buildings</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona school buildings — particularly portable classrooms and south-facing permanent structures — experience extreme heat loads that directly affect student comfort and learning. Spectrally selective and nano-ceramic films reduce HVAC loads by 20–30%, lowering utility costs and improving classroom temperature consistency. SRP Business Solutions and APS rebate programs apply to qualifying commercial educational installations.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Privacy and Decorative Film for Schools</h2>
          <p className="text-lg text-slate-700 mb-4">Administrative offices, counseling rooms, and conference spaces in school buildings require visual privacy without sacrificing natural light. Frosted and etched window film provides the privacy needed for sensitive conversations while maintaining bright, welcoming interiors. Decorative film options include branded school graphics, gradient privacy bands, and patterned designs for common areas.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">UV Protection for Students and Staff</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona's UV index regularly reaches 11 (extreme). School buildings with large south and west-facing glass expose students and staff to significant UV radiation during the school day. Window film with 99.9% UV block eliminates this exposure without affecting natural light levels — maintaining bright, comfortable learning environments while protecting occupants.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Cost and Budgeting for School Window Film</h2>
          <p className="text-lg text-slate-700 mb-4">School window film projects are quoted by scope, glass area, and film specification. We work with facility managers, school boards, and general contractors on budgeting and phased installation schedules. SRP and APS energy rebates can offset a significant portion of project costs for qualifying installations. Contact us for a free assessment and detailed scope estimate.</p>
        </section>

        <EstimatorCTA />

        <section className="bg-slate-100 p-8 rounded-lg mb-16">
          <p className="text-lg text-slate-700 mb-4">Ready to protect your school campus with professional window film? We provide free on-site assessments for K-12 and university facilities throughout Arizona.</p>
          <p className="text-lg font-bold">Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> or <Link to="/contact" className="text-blue-600 hover:underline">schedule your free estimate</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} className="mb-6 border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold mb-2">{faq.name}</h3>
              <p className="text-slate-700">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
