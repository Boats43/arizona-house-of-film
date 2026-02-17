import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, SprayCan, Building, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const AntiGraffiti = () => {
  const pageTitle = "Anti-Graffiti Window Film Arizona | Arizona House of Film";
  const metaDescription = "Protect your property from vandalism with durable anti-graffiti films. An invisible shield against paint, etching, and scratches for storefronts and public spaces in Phoenix, Scottsdale, and across Arizona.";
  const canonicalUrl = "https://arizonahouseoffilm.com/anti-graffiti";
  const benefits = [{
    icon: Shield,
    title: 'Vandalism Protection',
    description: 'Acts as a sacrificial barrier against spray paint, markers, and etching — saving your glass from permanent damage.'
  }, {
    icon: SprayCan,
    title: 'Easy Replacement',
    description: 'Damaged film can be quickly and easily removed and replaced, costing far less than full glass replacement.'
  }, {
    icon: Building,
    title: 'Invisible Shield',
    description: 'Optically clear and virtually undetectable — maintain the original look of your storefront or property.'
  }];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How does anti-graffiti film work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anti-graffiti film is a clear, durable layer applied to exterior glass or surfaces. When vandalized, it's peeled off—removing the damage and leaving the surface unharmed."
      }
    }, {
      "@type": "Question",
      "name": "Is anti-graffiti film noticeable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Our professional-grade films are optically clear and invisible once installed, protecting your glass without altering appearance."
      }
    }, {
      "@type": "Question",
      "name": "Where is anti-graffiti film most used in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ideal for high-traffic and commercial areas such as retail storefronts, public transit windows, elevators, and mirrors in Phoenix, Tempe, and Mesa."
      }
    }]
  };
  return <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <header className="relative py-24 text-white">
         <div className="absolute inset-0">
            <img alt="Storefront glass protected by anti-graffiti film" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/resized_20230803_085952-TigO4.jpeg" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7
        }} className="text-4xl md:text-6xl font-bold text-white">
            Anti-Graffiti Film
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="mt-4 text-lg md:text-xl text-gray-200">
            Your invisible shield against vandalism — preserving beauty, saving cost, and protecting property.
          </motion.p>
        </div>
      </header>

      <main>
        {/* Benefits */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Protect Your Investment</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Anti-graffiti film is a smart, cost-effective solution that defends your glass and metal surfaces from vandalism and damage.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => <motion.div key={benefit.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: i * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.05
            }} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <benefit.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 prose prose-gray lg:prose-lg">
            <h2 className="text-3xl font-bold text-gray-900">Ideal for Public and Commercial Spaces</h2>
            <p>
              Vandalism can cost Arizona property owners thousands in repairs. Anti-graffiti film creates a replaceable barrier
              that prevents permanent damage and maintains your property's aesthetic. It's a proactive and cost-effective measure
              for public spaces and commercial properties alike.
            </p>
            <p>Common installation locations include:</p>
            <ul>
              <li>Retail storefronts and high-traffic display windows</li>
              <li>Public transit shelters and vehicle glass</li>
              <li>Elevators, escalators, and restroom mirrors</li>
              <li>Schools, government buildings, and offices</li>
            </ul>
            <p>
              Our installations are seamless and nearly invisible — ensuring your windows stay clear while your property remains secure.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, i) => <motion.div key={i} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: i * 0.1
            }} viewport={{
              once: true
            }} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{faq.name}</h3>
                  <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Property Today</h2>
            <p className="text-lg text-blue-100 mb-8">
              Get a free consultation to learn how anti-graffiti film can safeguard your business and save on costly repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200 font-semibold">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                <a href="tel:480-788-1591">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>;
};
export default AntiGraffiti;