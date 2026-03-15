import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Building, Home as HomeIcon, Palette, Zap,
  ArrowRight, CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Welcome = () => {
  const pageTitle = 'About Arizona House of Film | Licensed Since 2017';
  const metaDescription = 'Arizona House of Film — licensed, bonded window film contractor since 2017. ROC #314088. 700+ projects. $1.16M in completed work. Serving Phoenix, Scottsdale, and the full Arizona metro.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/welcome';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const stats = [
    { value: '700+',        label: 'Projects Completed' },
    { value: '$1.16M',      label: 'In Completed Work' },
    { value: 'ROC #314088', label: 'Licensed & Bonded' },
    { value: 'Since 2017',  label: 'Serving Arizona' },
  ];

  const values = [
    {
      title: 'Transparent Pricing',
      body: 'Every quote is itemized by film type, glass access, and scope. No hidden charges. No bait-and-switch. You know exactly what you are buying before we start.',
    },
    {
      title: 'Licensed for Every Job',
      body: 'ROC #314088. Bonded and insured for commercial and residential. Government, school, and institutional projects require documentation — we provide it.',
    },
    {
      title: 'Film-First Specification',
      body: 'We recommend the right film for your glass type, orientation, and climate exposure — not the film with the best margin. Most competitors skip this step.',
    },
    {
      title: 'No-Disruption Scheduling',
      body: 'Most commercial installs happen after hours or on weekends. Residential installs fit your schedule. We have never missed a confirmed project start date.',
    },
  ];

  const services = [
    { name: 'Commercial Window Tinting',  link: '/commercial-window-tinting',  icon: Building  },
    { name: 'Residential Window Tinting', link: '/residential-window-tinting', icon: HomeIcon  },
    { name: 'Decorative Window Films',    link: '/decorative-window-films',    icon: Palette   },
    { name: 'Safety & Security Film',     link: '/safety',                     icon: Shield    },
    { name: 'Energy-Saving Films',        link: '/energy-saving-window-films', icon: Zap       },
    { name: 'All Solutions',              link: '/solutions',                  icon: CheckCircle },
  ];

  const clients = [
    'Grand Canyon University',    'U.S. Navy Recruitment Center',
    'Skechers USA',               'AutoZone',
    'Banner Health',              'Boeing',
    'Arizona State University',   'Valley Metro',
    'Coca-Cola',                  'Renaissance Hotels',
    'Wespac Construction',        'LA Fitness',
    'Starbucks',                  'Isagenix International',
    'NAPA Auto Parts',            'Frank Lloyd Wright Foundation',
    'Willmeng Construction',      'City of Phoenix',
  ];

  const areaCities = [
    'Phoenix', 'Scottsdale', 'Tempe',    'Mesa',
    'Chandler', 'Gilbert',   'Glendale', 'Peoria',
    'Tucson',  'Flagstaff',  'Prescott', 'Yuma',
    'Avondale', 'Buckeye',  'Surprise',  'Goodyear',
  ];

  const credentials = [
    ['License',           'Arizona ROC #314088'],
    ['Bonded & Insured',  'Yes — all project types'],
    ['Founded',           '2017'],
    ['Projects',          '700+ completed'],
    ['Documented Revenue','$1.16M in verified work'],
    ['Film Brands',       '3M, XPEL, Madico, Solar Gard, Eastman'],
    ['Headquarters',      'Phoenix, AZ 85033'],
    ['Service Area',      'Statewide Arizona'],
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
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'About Arizona House of Film', path: '/welcome' },
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
                Licensed · Bonded · ROC #314088 · Since 2017
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.9] tracking-tighter">
                About Arizona<br /><span className="text-green-500">House of Film</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                Phoenix's licensed window film contractor. 700+ completed projects. $1.16M in documented work
                across commercial, residential, government, and institutional clients throughout Arizona since 2017.
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

        {/* STORY + CREDENTIALS */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">
                  Who We Are
                </h2>
                <div className="space-y-5 text-slate-700 font-medium leading-relaxed text-lg">
                  <p>
                    Arizona House of Film was founded in Phoenix in 2017 by a licensed contractor who saw that
                    most window film companies in Arizona prioritized sales volume over film specification. We built
                    the business on a different premise: identify the right film for the glass, the orientation, and
                    the climate — then install it correctly the first time.
                  </p>
                  <p>
                    Seven years later, we have completed over 700 projects across Maricopa, Pima, Yavapai, and
                    Pinal counties, documented more than $1.16 million in completed work, and built relationships
                    with some of Arizona's most demanding clients — from general contractors like Wespac and
                    Willmeng to institutional clients like Grand Canyon University and the U.S. Navy.
                  </p>
                  <p>
                    We hold Arizona Registrar of Contractors license ROC #314088, are fully bonded and insured,
                    and are authorized installers for 3M, XPEL, Madico, Solar Gard, and Eastman window film products.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-6 text-slate-950">
                  Credentials at a Glance
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    {credentials.map(([label, value], i) => (
                      <tr key={i} className="border-b border-slate-200">
                        <td className="py-3 pr-4 font-black text-slate-500 uppercase text-xs tracking-widest w-44">
                          {label}
                        </td>
                        <td className="py-3 font-semibold text-slate-900">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

        {/* WHAT WE INSTALL */}
        <section className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                What We Install
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc, i) => (
                <Link
                  key={i}
                  to={svc.link}
                  className="flex items-center justify-between bg-slate-800 border border-slate-700 hover:border-green-500 p-6 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <svc.icon className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="font-black text-white uppercase text-sm tracking-tight group-hover:text-green-400 transition-colors">
                      {svc.name}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-green-500 transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Selected Client Portfolio
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 font-medium max-w-2xl mx-auto">
                700+ projects completed since 2017. The following organizations represent a cross-section of our
                verified commercial work across Arizona.
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

        {/* SERVICE AREAS */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.3em] mb-10">
              Arizona Service Coverage
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

        {/* CTA */}
        <section className="py-20 bg-green-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Start Your Project
            </h2>
            <p className="text-white/90 text-lg font-medium mb-10 max-w-2xl mx-auto">
              Free on-site assessment. No obligation. Licensed ROC #314088. We respond within one business day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild size="lg"
                className="bg-white text-green-900 hover:bg-gray-100 px-10 h-16 text-xl font-black rounded-none"
              >
                <Link to="/contact">Request Free Estimate</Link>
              </Button>
              <a
                href="tel:480-788-1591"
                className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-green-800 transition-all text-lg"
              >
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default Welcome;
