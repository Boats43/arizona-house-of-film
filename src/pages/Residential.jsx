import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sun, Shield, Thermometer, Eye, DollarSign, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';

const Residential = () => {
  const pageTitle = "Residential Window Tinting Phoenix AZ | Ceramic Solar Films | Arizona House of Film";
  const metaDescription = "Professional residential window tinting in Phoenix, Scottsdale & Mesa. Ceramic films block 84% heat, 99.9% UV. SRP & APS rebate eligible. Licensed ROC #314088. Free estimates: 480-788-1591.";
  const canonicalUrl = "https://arizonahouseoffilm.com/residential-window-tinting";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const allFaqItems = [
    {
      q: "How much does residential window tinting cost in Arizona?",
      a: "Most Arizona homeowners pay $8–$18 per square foot installed, depending on film type and window size. We provide free, no-obligation estimates.",
    },
    {
      q: "Will window film void my home warranty?",
      a: "Quality films installed by certified professionals do not void standard home warranties. We use only manufacturer-certified products with their own warranties.",
    },
    {
      q: "How long does home window tinting take?",
      a: "A typical single-family home is completed in one day. Larger properties or custom film selections may take 2 days.",
    },
    {
      q: "Can you tint sliding glass doors and skylights?",
      a: "Yes. We install film on all glass surfaces including sliders, skylights, transoms, and decorative sidelights.",
    },
    {
      q: "Which windows should I prioritize for tinting?",
      a: "South and west-facing windows receive the most direct Arizona sun and should be prioritized first. These windows drive the majority of your home's solar heat gain. East-facing windows are secondary. North-facing windows rarely need solar film but may benefit from privacy or decorative film.",
    },
    {
      q: "Will window film affect my home's resale value?",
      a: "Window film is considered a home improvement that adds value in Arizona. Buyers in Phoenix actively look for energy-efficient features. Ceramic film installations typically increase perceived home value and reduce time on market.",
    },
    {
      q: "Do you offer a warranty on residential installs?",
      a: "Yes. All residential installations include the manufacturer's warranty (15–25 years depending on film) plus our installation guarantee. If any film peels, bubbles, or fails due to installation, we fix it at no charge.",
    },
    {
      q: "Can window film be installed on older single-pane windows?",
      a: "Yes — single-pane windows actually benefit more from film than double-pane because they have less inherent insulation. We install on all glass types including single-pane, double-pane, tempered, laminated, and low-e glass.",
    },
    {
      q: "My windows already have a Low-E coating. Do I still need window film?",
      a: "Yes. While Low-E glass improves insulation, it often does not block enough solar heat or UV in Arizona's extreme climate. We use Low-E compatible ceramic films that work with your existing glass technology to create a dual-layer heat barrier — significantly outperforming Low-E glass alone. All our films are verified safe for Low-E applications before installation.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Window Tinting",
    serviceType: "Home Window Film Installation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      url: "https://arizonahouseoffilm.com",
      telephone: "+1-480-788-1591",
    },
    areaServed: { "@type": "State", name: "Arizona" },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Arizona House of Film",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "15",
    },
  };

  const benefits = [
    { icon: Sun, title: 'UV Protection', slug: 'uv-protection', description: 'Block up to 99.9% of harmful UV rays that cause furniture fading and skin damage while maintaining natural light.' },
    { icon: DollarSign, title: 'Energy Savings', slug: 'energy-savings', description: 'Reduce your AC cooling costs by up to 30% with our high-performance ceramic residential window films.' },
    { icon: Eye, title: 'Enhanced Privacy', slug: 'enhanced-privacy', description: 'Enjoy daytime privacy while maintaining your view of the outdoors with our advanced one-way visibility films.' },
    { icon: Thermometer, title: 'Temperature Control', slug: 'temperature-control', description: 'Eliminate hot spots and maintain consistent temperatures throughout your home for total year-round comfort.' },
    { icon: Shield, title: 'Glare Reduction', slug: 'glare-reduction', description: 'Reduce annoying glare on TV screens and monitors while preserving your beautiful Arizona views.' },
    { icon: Home, title: 'Increased Comfort', slug: 'increased-comfort', description: 'Create a cooler living environment by reducing total solar heat gain by up to 78%.' },
  ];

  const filmTypes = [
    { name: 'Ceramic Solar Films', link: '/energy-saving-window-films', description: 'Highest heat rejection without the "mirror" look.', features: ['Extreme Heat Rejection', 'Non-Reflective', 'GPS/Signal Friendly', 'Lifetime Warranty'] },
    { name: 'Privacy & Decorative', link: '/decorative-window-films', description: 'Style meets function for bathrooms and entryways.', features: ['Frosted Options', 'Textured Designs', 'Daytime Privacy', 'Custom Patterns'] },
    { name: 'Safety & Security', link: '/safety', description: 'Hold glass together during impact or break-in attempts.', features: ['Thick 8mil+ Film', 'Impact Resistant', 'Crystal Clear', 'UV Blocking'] },
  ];

  const problemCards = [
    {
      title: 'Your rooms feel like an oven by 2pm',
      copy: "South and west-facing windows receive 8+ hours of direct Arizona sun. Unprotected glass turns rooms into solar collectors. Ceramic film blocks 84% of that heat at the glass — before it enters your home.",
      cta: 'See Solar Films',
      link: '/energy-saving-window-films',
    },
    {
      title: 'Your SRP or APS bill spikes $200–$400 every summer',
      copy: "Window film reduces AC cooling load 20–30%, saving Arizona homeowners $250–$725 annually. SRP and APS both offer rebates for qualifying ceramic film installations.",
      cta: 'Check Rebate Eligibility',
      link: '/contact',
    },
    {
      title: 'Your floors, furniture, and artwork are fading',
      copy: "Arizona UV index hits 11 — the highest rating (extreme). UV rays cause 40% of all interior fading. Our films block 99.9% of UV year-round, protecting everything inside your home.",
      cta: 'See UV Protection',
      link: '/energy-saving-window-films',
    },
    {
      title: 'You have no privacy without closing the blinds',
      copy: "Frosted and one-way films give you full daytime privacy while maintaining your view outward and keeping full natural light. No blinds, no darkness.",
      cta: 'See Privacy Films',
      link: '/decorative-window-films',
    },
    {
      title: 'Your home has been broken into or targeted',
      copy: "8–12 mil safety film holds shattered glass in place, turning a 10-second smash-and-grab into a 3–5 minute forced entry — long enough for most criminals to abandon the attempt.",
      cta: 'See Security Films',
      link: '/safety',
    },
    {
      title: 'Glare makes your TV and screens unwatchable',
      copy: "Ceramic film cuts glare on screens by up to 80% without darkening your rooms. You keep the view and the natural light — without the glare.",
      cta: 'See Glare Solutions',
      link: '/energy-saving-window-films',
    },
    {
      title: 'Your bathroom and shower windows have zero privacy',
      copy: "Standard blinds in bathrooms trap moisture and grow mildew. We install moisture-safe architectural frost and decorative films for shower windows, bathroom doors, and entryway sidelights. 100% privacy while allowing soft natural light to fill the room — no more closing blinds during the day.",
      cta: 'See Privacy Films',
      link: '/decorative-window-films',
    },
  ];

  const filmSelectorRows = [
    { type: 'Ceramic 5%', heat: '84%', uv: '99.9%', light: 'Low', bestFor: 'South/west-facing rooms, max heat rejection', price: '$12/sq ft' },
    { type: 'Ceramic 35%', heat: '74%', uv: '99.9%', light: 'Moderate', bestFor: 'Living rooms, balanced light and heat', price: '$10/sq ft' },
    { type: 'Ceramic 50%', heat: '60%', uv: '99.9%', light: 'High', bestFor: 'North-facing, light preservation priority', price: '$8/sq ft' },
    { type: 'Dual Reflective', heat: '79%', uv: '99.9%', light: 'Moderate', bestFor: 'Privacy + heat, street-facing windows', price: '$11/sq ft' },
    { type: 'Frosted Privacy', heat: 'Moderate', uv: '99%', light: 'Diffused', bestFor: 'Bathrooms, entryways, sidelights', price: '$9/sq ft' },
    { type: 'Safety 8 mil', heat: 'Moderate', uv: '99%', light: 'Clear', bestFor: 'Ground floor, entry doors, garage', price: '$14/sq ft' },
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
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(aggregateRatingSchema)}</script>
      </Helmet>

      <main>
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-400 font-bold text-sm mb-6 border border-green-500/30 uppercase tracking-widest">
                Residential Specialists
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                Residential Window Tinting Phoenix | Home Solar Control Films
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Slash your cooling costs and protect your family from Arizona's intense UV rays. We deliver high-performance ceramic window film solutions for the modern home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 h-14 text-lg">
                  <Link to="/contact">Get A Free Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-14 rounded-md border-2 border-white/30 text-white font-bold hover:bg-white hover:text-slate-900 transition-all">
                  <Phone className="w-5 h-5" /> 480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OPENING AUTHORITY */}
        <section className="py-12 bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
              Protect your Arizona home from one of the harshest climates in North America. Arizona House of Film installs residential window film across Phoenix, Scottsdale, Mesa, Chandler, Tempe, Gilbert, and 100+ Arizona cities. Our ceramic films block 84% of solar heat and 99.9% of UV rays — without compromising your view or darkening your rooms. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* LUXURY HOME CALLOUT */}
        <section className="py-12 bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="border-l-4 border-blue-400 bg-gray-900 p-8">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                The Standard for Arizona&rsquo;s Custom Homes
              </h2>
              <p className="text-gray-300 text-base leading-relaxed font-medium mb-6">
                Whether it is a modern estate in Paradise Valley, a custom build in North Scottsdale, or a golf-course home in Cave Creek, we understand the unique architectural needs of high-end Arizona real estate.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-black text-sm uppercase tracking-wide">Preserve Your View: </span>
                    <span className="text-gray-300 text-sm leading-relaxed">High-clarity ceramic films protect interiors without altering the aesthetic of custom glass or impacting views.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-black text-sm uppercase tracking-wide">Trusted by Builders: </span>
                    <span className="text-gray-300 text-sm leading-relaxed">The preferred installer for DMC Builders and Coventry Design and Build on new construction and renovation projects across the Valley.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROBLEM-FIRST SECTION */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Is Your Home Suffering From Any of These?
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                Arizona's climate creates specific problems standard glass cannot handle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problemCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 hover:border-green-500/40 p-8 transition-all group"
                >
                  <h3 className="text-base font-black text-white uppercase mb-3 leading-snug">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-5">{card.copy}</p>
                  <Link
                    to={card.link}
                    className="text-green-500 font-black text-xs uppercase tracking-widest hover:text-green-400 transition-colors"
                  >
                    {card.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase">Why Tint Your House?</h2>
                <p className="text-lg text-gray-600">
                  Arizona sun is relentless. Read our <Link to="/blog/ultimate-guide-to-window-tinting-benefits-in-arizona" className="text-green-600 font-bold hover:underline">Ultimate Guide</Link> or see the immediate benefits below.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="p-8 rounded-3xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <benefit.icon className="w-7 h-7 text-green-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                  <Link to={`/residential-window-tinting/${benefit.slug}`} className="inline-flex items-center text-green-600 font-bold hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FILM TYPES */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">The Residential Stack</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We only use industry-leading <Link to="/brands" className="text-green-400 hover:underline">brands</Link> like 3M and Madico, engineered for extreme heat.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filmTypes.map((film, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 p-10 rounded-3xl hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{film.name}</h3>
                <p className="text-gray-400 mb-8 h-12">{film.description}</p>
                <ul className="space-y-4 mb-10">
                  {film.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full border-white/20 hover:bg-white hover:text-slate-900">
                  <Link to={film.link}>View Specifications</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* FILM SELECTOR */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                Which Film Is Right for Your Home?
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Arizona homes need different films depending on window orientation and primary concern.
              </p>
            </div>
            <div className="overflow-x-auto rounded-none shadow-sm">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Film Type</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Heat Blocked</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">UV Blocked</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Visible Light</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Best For</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filmSelectorRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-green-50 transition-colors`}
                    >
                      <td className="px-5 py-4 font-black text-slate-900 whitespace-nowrap">{row.type}</td>
                      <td className="px-5 py-4 font-bold text-green-600 whitespace-nowrap">{row.heat}</td>
                      <td className="px-5 py-4 font-bold text-green-600 whitespace-nowrap">{row.uv}</td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap">{row.light}</td>
                      <td className="px-5 py-4 text-slate-600">{row.bestFor}</td>
                      <td className="px-5 py-4 font-black text-slate-900 whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 mt-6 leading-relaxed font-medium">
              Not sure which to choose? We assess your window orientation, glass type, and goals — free.{' '}
              <a href="tel:480-788-1591" className="text-green-600 font-bold hover:underline">Call 480-788-1591</a>{' '}
              or{' '}
              <Link to="/contact" className="text-green-600 font-bold hover:underline">submit a project online</Link>.
            </p>
          </div>
        </section>

        {/* ROI SECTION */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                What's the ROI on Window Film for an Arizona Home?
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium">
                Real numbers for a typical 2,000 sq ft Phoenix home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { stat: '$250–$725', label: 'Saved annually on SRP/APS cooling costs' },
                { stat: '2–4 Years', label: 'Payback period — fastest ROI in the country due to Arizona heat' },
                { stat: '15–25 Years', label: 'Film lifespan with manufacturer warranty' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-8 text-center">
                  <p className="text-4xl md:text-5xl font-black text-green-500 mb-3 leading-tight">{item.stat}</p>
                  <p className="text-slate-400 font-bold uppercase text-xs tracking-widest leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 max-w-4xl mx-auto">
              <p className="text-slate-300 text-base leading-relaxed font-medium">
                Arizona's extreme climate means window film pays back faster here than anywhere else in the country. A northern climate homeowner might wait 8–12 years for ROI. In Phoenix, most installs pay for themselves in 2–4 years — then save money every year after that. SRP and APS rebates shorten the payback period further.
              </p>
            </div>
          </div>
        </section>

        {/* SKYLIGHT SECTION */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                The Skylight Heat Spike
              </h2>
              <div className="w-24 h-2 bg-blue-400 mx-auto mb-6" />
              <p className="text-slate-300 text-xl font-bold">
                Do you have one room that is 10&deg;F hotter than the rest of the house?
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 p-8 max-w-3xl mx-auto mb-8">
              <p className="text-slate-300 text-base leading-relaxed font-medium mb-6">
                In Phoenix, unfilmed skylights act like magnifying glasses &mdash; concentrating direct sun onto floors, furniture, and people below. That single skylight can raise room temperature 10&ndash;15&deg;F and create a permanent UV fade zone on whatever sits beneath it.
              </p>
              <p className="text-slate-300 text-base leading-relaxed font-medium mb-6">
                Arizona House of Film installs specialized skylight frosting and heat-blocking ceramic films that eliminate the midday heat spike. Recent installations include residential skylights across North Scottsdale and commercial skylight projects for LDS Church facilities and On Q Financial offices.
              </p>
              <p className="text-white font-black text-sm uppercase tracking-wide">
                Result: Lower AC demand, eliminated sun-spot fading, and consistent room temperature year-round.
              </p>
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 text-base font-black rounded-none">
                <Link to="/contact">Get Skylight Quote &rarr;</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* HOA COMPLIANCE SECTION */}
        <section className="py-12 bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="border-l-4 border-blue-400 bg-gray-900 p-8">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                HOA Compliant Window Film
              </h2>
              <p className="text-gray-300 text-base leading-relaxed font-medium mb-4">
                Arizona HOAs have strict requirements for window film reflectivity and appearance. The wrong film choice can result in HOA violations and costly removal.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-medium mb-4">
                Arizona House of Film works directly with Arizona property management firms including Associated Asset Management (AAM) and Camden Development. We know the appearance standards for communities in Gilbert, Chandler, Scottsdale, and the East Valley &mdash; and we only recommend films that meet your HOA guidelines before installation begins.
              </p>
              <p className="text-blue-400 font-black text-sm uppercase tracking-wide">
                Ask us about HOA compliance during your free estimate.
              </p>
            </div>
          </div>
        </section>

        {/* SRP/APS REBATE CALLOUT */}
        <section className="py-12 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">SRP &amp; APS Rebate Eligible</h3>
              <p className="text-white/90 font-medium leading-relaxed max-w-2xl">
                Arizona utility companies SRP and APS offer rebates for energy-saving window film installations on qualifying residential properties. Ask us about current rebate eligibility during your free estimate.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-slate-900 hover:text-white font-black shrink-0 rounded-none px-8 h-14">
              <Link to="/contact">Check My Eligibility</Link>
            </Button>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 mb-12 uppercase leading-tight">
                Our Signature <br/><span className="text-green-600">Installation</span>
              </h2>
              <div className="space-y-12">
                {[
                  { n: '01', t: 'Precision Measure', d: 'We use laser-precision tools to ensure every window film is cut to the exact millimeter of your home glass.' },
                  { n: '02', t: 'Glass Preparation', d: 'A multi-stage mechanical decontamination of your glass ensures a lifetime bond without bubbles or peeling.' },
                  { n: '03', t: 'Expert Cure', d: 'Our technicians utilize specialized heat-forming techniques to ensure immediate clarity and performance.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-8">
                    <span className="text-5xl font-black text-slate-200">{step.n}</span>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{step.t}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-24 bg-slate-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 uppercase tracking-tight">Serving Homes Across Arizona</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map(city => (
                <Link key={city.slug} to={`/service-areas/${city.slug}`} className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-slate-600 hover:border-green-500 hover:text-green-600 hover:shadow-md transition-all">
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-12">Residential Tinting FAQ</h2>
            <div className="space-y-8">
              {allFaqItems.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-8">
                  <h3 className="font-black text-slate-900 uppercase text-sm mb-3">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mt-10">
              Looking for commercial installation? We also serve offices and retail properties across the Valley.{" "}
              <Link to="/commercial-window-tinting" className="text-green-600 underline font-bold">Explore commercial tinting</Link>,{" "}
              <Link to="/solutions" className="text-green-600 underline font-bold">view all film solutions</Link>, or{" "}
              <Link to="/service-areas" className="text-green-600 underline font-bold">check our service areas</Link>{" "}
              to confirm coverage in your city.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-green-600 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase italic">Ready to cool your home?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-12 h-16 text-xl">
                <Link to="/contact">Book Free Estimate</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center justify-center text-3xl font-black text-white hover:scale-105 transition-transform">
                <Phone className="mr-3 w-8 h-8" /> 480-788-1591
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Residential;
