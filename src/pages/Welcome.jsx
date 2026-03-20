import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const Welcome = () => {
  const pageTitle = 'About Arizona House of Film | Licensed Window Film Contractor | ROC #314088';
  const metaDescription = 'Arizona House of Film — licensed window film contractor since 2017. 700+ projects, $2M+ in completed work. Commercial, residential, government. ROC #314088. Phoenix, AZ.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/welcome';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const stats = [
    { value: '700+',        label: 'Projects Completed' },
    { value: '$2M+',        label: 'Completed Work' },
    { value: 'ROC #314088', label: 'Licensed & Bonded' },
    { value: 'Since 2017',  label: 'Serving Arizona' },
  ];

  const values = [
    {
      title: 'Film-First Specification',
      body: 'We spec the right film for your glass type, orientation, and thermal load. Not the film with the best margin. The right film. Every time.',
    },
    {
      title: 'Transparent Pricing',
      body: 'Every quote is itemized — film type, scope, access difficulty. You know exactly what you\'re buying before we schedule.',
    },
    {
      title: 'Licensed for Every Job',
      body: 'ROC #314088. Bonded and insured. Government, institutional, and school projects require documentation. We\'ve done it before. We have what\'s needed.',
    },
    {
      title: 'No-Disruption Scheduling',
      body: 'Commercial installs happen after hours or weekends. Residential installs fit your schedule. We have not missed a confirmed project start date.',
    },
  ];

  const filmCategories = [
    'Solar Control & Ceramic Film',
    'Dual Reflective & Spectrally Selective Film',
    'Security & Safety Film (4 mil to 21 mil)',
    'Decorative, Frosted & Privacy Film',
    'Anti-Graffiti & Surface Protection Film',
    'Cloaking Film (Casper by Designtex, Quantum Cloaking Film\u00AE)',
    'Countertop & Surface Protection Film',
    'Low-E & Energy-Saving Film',
  ];

  const clients = [
    'Coca-Cola',                    'U.S. Navy Recruitment Centers',
    'Frank Lloyd Wright Foundation', 'Grand Canyon University',
    'Wespac Construction',          'Willmeng Construction',
    'FCI Constructors',             'Skechers USA',
    'Boeing',                       'Arizona State University',
    'Valley Metro',                 'City of Phoenix',
    'Glendale Fire Station 152',    'On Q Financial',
    'Camden Development',           'Renaissance Hotels',
    'Banner Health',                'LA Fitness',
    'Starbucks',                    'AutoZone',
    'NAPA Auto Parts',              'Isagenix International',
    'City of Mesa',                 'City of Buckeye',
    'DMC Builders',                 'Coventry Design and Build',
    '2nd Swing Scottsdale',         'AutoNation',
    'Dignity Health',
  ];

  const areaCities = [
    'Phoenix', 'Scottsdale', 'Tempe',    'Mesa',
    'Chandler', 'Gilbert',   'Glendale', 'Peoria',
    'Tucson',  'Flagstaff',  'Prescott', 'Yuma',
    'Avondale', 'Buckeye',  'Surprise',  'Goodyear',
  ];

  const credentials = [
    ['License',            'Arizona ROC #314088'],
    ['Bonded & Insured',   'All project types — commercial, residential, government'],
    ['Founded',            'Phoenix, AZ — 2017'],
    ['Projects Completed', '700+'],
    ['Documented Work',    '$2M+ gross revenue'],
    ['Film Brands',        '3M, LLumar, Madico, Solar Gard, Huper Optik, Solyx'],
    ['Headquarters',       '7007 W Flower St, Phoenix, AZ 85033'],
    ['Service Area',       'Statewide Arizona — Phoenix metro primary'],
  ];

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
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is Arizona House of Film licensed in Arizona?',
              acceptedAnswer: { '@type': 'Answer', text: 'Yes. Arizona House of Film holds Arizona Registrar of Contractors license ROC #314088. Fully bonded and insured for commercial, residential, government, and institutional projects.' },
            },
            {
              '@type': 'Question',
              name: 'What is the background of Arizona House of Film?',
              acceptedAnswer: { '@type': 'Answer', text: 'Arizona House of Film was founded in Phoenix in 2017 by a U.S. Navy veteran with nearly twenty years of professional window film installation experience. The company has completed 700+ projects and over $2 million in documented work across commercial, residential, government, and institutional clients throughout Arizona.' },
            },
            {
              '@type': 'Question',
              name: 'What window film brands does Arizona House of Film install?',
              acceptedAnswer: { '@type': 'Answer', text: 'We install film from 3M, LLumar (Eastman), Madico, Solar Gard, Huper Optik, Solyx, Vista, EnerLogic, and Quantum Cloaking Film\u00AE. Film is specified per project based on glass type, orientation, thermal load, and performance requirements.' },
            },
            {
              '@type': 'Question',
              name: 'Where does Arizona House of Film operate?',
              acceptedAnswer: { '@type': 'Answer', text: 'Based in Phoenix, AZ. Full Arizona metro coverage \u2014 Scottsdale, Mesa, Chandler, Gilbert, Tempe, Glendale, Peoria, Queen Creek, and statewide. Licensed ROC #314088.' },
            },
          ],
        })}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'About Arizona House of Film', url: 'https://arizonahouseoffilm.com/welcome' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen text-white">

        {/* HERO */}
        <section className="relative py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed · Bonded · ROC #314088 · U.S. Navy Veteran Owned · Since 2017
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.9] tracking-tighter">
                Arizona House of Film<br />
                <span className="text-green-500">Licensed Window Film Contractor — Phoenix, Arizona</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-medium">
                Nearly a decade of field experience. Over 700 completed projects. $2M+ in documented work across commercial, residential, government, and institutional clients throughout Arizona.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="bg-slate-900 border border-slate-800 p-6 text-center"
                >
                  <p className="text-3xl font-black text-green-500 mb-1">{stat.value}</p>
                  <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                What We Do
              </h2>
              <div className="space-y-5 text-slate-700 font-medium leading-relaxed text-lg">
                <p>
                  Arizona House of Film installs performance window film. Not tint. Not a cosmetic upgrade. Film that is specified for the glass, the orientation, and the climate — then installed correctly the first time.
                </p>
                <p>
                  We operate across every film category: solar control, security and safety, decorative and privacy, anti-graffiti, cloaking, and surface protection. Every project is custom-quoted. Every specification is documented. Every install is backed by ROC #314088.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE EXPERIENCE BEHIND THE WORK */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                The Experience Behind the Work
              </h2>
              <div className="space-y-5 text-slate-400 font-medium leading-relaxed text-lg">
                <p>
                  The owner of Arizona House of Film has been installing window film professionally for nearly twenty years — starting before the company existed, carrying that experience through every project since 2017. U.S. Navy veteran. Field-trained. Technically precise.
                </p>
                <p>
                  That background shows in how we operate. We don't guess at specifications. We don't substitute products without authorization. We don't cut corners on preparation. The work is done right because the person who built this company knows what wrong looks like — and won't accept it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10">
              Credentials
            </h2>
            <div className="max-w-2xl">
              <table className="w-full text-sm">
                <tbody>
                  {credentials.map(([label, value], i) => (
                    <tr key={i} className="border-b border-slate-200">
                      <td className="py-3 pr-4 font-black text-slate-500 uppercase text-xs tracking-widest w-48">
                        {label}
                      </td>
                      <td className="py-3 font-semibold text-slate-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* HOW WE OPERATE */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                How We Operate
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-8 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{v.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed font-medium">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FILMS WE INSTALL */}
        <section className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
              Films We Install
            </h2>
            <div className="max-w-3xl mb-12">
              <p className="text-slate-400 font-medium leading-relaxed text-lg">
                We have installed every major film category on the market — across all leading manufacturers. That includes everything from entry-level solar control to blast-rated government security film to Casper and Quantum cloaking film for glass-walled offices.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-12">
              {filmCategories.map((cat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-800 border border-slate-700 px-6 py-4"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="font-bold text-white text-sm uppercase tracking-tight">{cat}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
              Manufacturers: 3M · LLumar (Eastman) · Madico · Solar Gard · Huper Optik · Solyx · Vista · EnerLogic · Quantum Cloaking Film®
            </p>
          </div>
        </section>

        {/* VERIFIED CLIENT PORTFOLIO */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Verified Client Portfolio
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 font-medium max-w-2xl mx-auto">
                Projects completed since 2017 across these organizations and hundreds more.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {clients.map((client, i) => (
                <span
                  key={i}
                  className="bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm uppercase tracking-widest px-4 py-2"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE COVERAGE */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-10">
              Service Coverage
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {areaCities.map((city) => (
                <Link
                  key={city}
                  to={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-xs font-black text-slate-400 uppercase hover:border-green-500 hover:text-green-400 transition-all"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 mb-6 border-t border-slate-200 pt-6">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Our Services</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/commercial-window-tinting" className="text-green-700 underline text-sm">Commercial Window Film</Link>
            <Link to="/residential-window-tinting" className="text-green-700 underline text-sm">Residential Window Film</Link>
            <Link to="/safety" className="text-green-700 underline text-sm">Security Film</Link>
            <Link to="/decorative-window-films" className="text-green-700 underline text-sm">Decorative Films</Link>
            <Link to="/energy-saving-window-films" className="text-green-700 underline text-sm">Energy Saving Films</Link>
            <Link to="/anti-graffiti-film-phoenix" className="text-green-700 underline text-sm">Anti-Graffiti Film</Link>
            <Link to="/films" className="text-green-700 underline text-sm">Film Catalog</Link>
            <Link to="/store" className="text-green-700 underline text-sm">Order Film</Link>
            <Link to="/get-a-quote" className="text-green-700 underline text-sm">Get a Quote</Link>
            <Link to="/window-film-cost-estimator" className="text-green-700 underline text-sm">Cost Estimator</Link>
          </div>
        </section>

        <EstimatorCTA />

        {/* START YOUR PROJECT */}
        <section className="py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Start Your Project
            </h2>
            <p className="text-white/90 text-lg font-medium mb-10 max-w-2xl mx-auto">
              Free on-site assessment. We identify the right film for your glass, your exposure, and your budget — then provide a documented quote. Licensed ROC #314088. Response within one business day.
            </p>
            <Button
              asChild size="lg"
              className="bg-white text-green-900 hover:bg-gray-100 px-10 h-16 text-xl font-black rounded-none"
            >
              <Link to="/contact">Request Free Estimate</Link>
            </Button>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default Welcome;
