import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Utensils, School, Stethoscope, Hotel, Briefcase, Warehouse, ArrowLeft, Sun, Shield, Sparkles } from 'lucide-react';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';

const industriesData = {
  'office-buildings': {
    title: 'Office Buildings', icon: Briefcase,
    content: 'In the competitive commercial landscape of Arizona, creating a comfortable and productive work environment is paramount. Window film for office buildings offers a multi-faceted solution to common workplace challenges. By significantly reducing solar heat gain, our films help maintain a consistent and pleasant temperature, which can lower your reliance on HVAC systems and lead to substantial energy savings. Furthermore, glare reduction is a major benefit, minimizing eye strain for employees working on computers and enhancing overall comfort. Privacy is another key advantage; frosted and decorative films can be used on conference room glass and private offices to create confidential spaces without sacrificing natural light.',
    testimonial: `"Arizona House of Film transformed our office. The reduced glare is a game-changer for our team, and our summer energy bills have noticeably dropped." - Mark T., Phoenix Office Manager`
  },
  'retail-stores': {
    title: 'Retail Stores', icon: Building,
    content: 'For retail businesses, presentation and protection are everything. Our specialized window films are designed to address the unique needs of storefronts. One of the most critical benefits is the 99.9% UV radiation blockage, which prevents valuable merchandise in window displays from fading and damage, thereby protecting your inventory and preserving its value. Anti-glare films enhance the customer shopping experience by making it easier to see into your store and view products without distracting reflections.',
    testimonial: `"The UV film has saved thousands in potential merchandise damage. Plus, the anti-graffiti layer is a lifesaver in our high-traffic location." - Jessica P., Boutique Owner`
  },
  'restaurants': {
    title: 'Restaurants', icon: Utensils,
    content: 'The ambiance of a restaurant is just as important as the food it serves. Window film can dramatically improve the dining experience for your patrons. By controlling heat and glare, especially for tables near windows, you ensure that every seat in the house is a comfortable one, free from intense sun or blinding light.',
    testimonial: `"Our customers love the comfortable atmosphere now. No more complaints about glare during lunch service. The decorative film on our entrance looks amazing too!" - Carlos G., Restaurant Owner`
  },
  'medical-facilities': {
    title: 'Medical Facilities', icon: Stethoscope,
    content: 'Privacy and safety are non-negotiable in medical and healthcare settings. Our window films provide an effective and HIPAA-compliant solution for enhancing patient confidentiality in waiting rooms, consultation areas, and patient rooms. Frosted, opaque, and one-way privacy films can be applied to glass partitions and exterior windows to obscure views while still allowing natural light to create a healing, open environment.',
    testimonial: `"The privacy films were essential for our new clinic to ensure patient confidentiality. The installation was professional and discreet." - Dr. Emily R., Clinic Director`
  },
  'educational-institutions': {
    title: 'Educational Institutions', icon: School,
    content: 'Creating a safe and conducive learning environment is the top priority for any educational institution. Window films offer a dual benefit of enhanced security and improved classroom conditions. Our robust safety and security films are a critical component of modern school safety protocols, as they hold shattered glass in place to delay intruders and mitigate injury from impacts or severe weather.',
    testimonial: `"The security film gives our staff and parents peace of mind. In the classrooms, teachers have reported less glare on smartboards, which is a huge plus." - David Chen, School Principal`
  },
  'government-buildings': { title: 'Government Buildings', icon: Briefcase, content: 'Increase security with bomb-blast mitigation films, improve energy efficiency to meet government standards, and ensure privacy for sensitive facilities with our specialized products.' },
  'hotels-hospitality': { title: 'Hotels & Hospitality', icon: Hotel, content: 'Enhance guest comfort by reducing heat and glare in rooms and common areas. Decorative films can add a touch of luxury and privacy to bathrooms, spas, and fitness centers.' },
  'warehouses': { title: 'Warehouses', icon: Warehouse, content: 'Control heat to protect temperature-sensitive goods and reduce energy costs in large industrial spaces. Safety films can also improve workplace safety by preventing glass-related accidents.' },
};

const IndustriesPage = () => {
  const { slug } = useParams();
  const industry = industriesData[slug];

  if (!industry) return <NotFound />;

  const { title, icon: Icon, content, testimonial } = industry;
  const pageTitle = `${title} Window Tinting | Arizona House of Film`;
  const metaDescription = `Specialized window tinting services for ${title.toLowerCase()} in Arizona. Improve comfort, security, and energy efficiency. Free estimates — call 480-788-1591.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/industries/${slug}`;
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      telephone: "480-788-1591",
      address: { "@type": "PostalAddress", addressLocality: "Phoenix", addressRegion: "AZ", postalCode: "85033" }
    }
  };

  const relatedServices = [
    { name: 'Solar Films', icon: Sun, link: '/energy-saving-window-films' },
    { name: 'Security Films', icon: Shield, link: '/safety' },
    { name: 'Decorative Films', icon: Sparkles, link: '/decorative-window-films' },
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
      </Helmet>
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-4 text-center">
              <Link to="/commercial-window-tinting" className="text-blue-600 hover:underline flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Commercial Services
              </Link>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Solutions for Every Industry: {title}</h1>
              <p className="text-lg text-gray-600 mb-12">{content}</p>
            </div>
            {testimonial && (
              <div className="my-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <p className="text-gray-600 italic">"{testimonial}"</p>
              </div>
            )}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Film Types</h2>
              <div className="flex justify-center gap-4 flex-wrap">
                {relatedServices.map(service => (
                  <Button asChild variant="outline" key={service.name}>
                    <Link to={service.link}><service.icon className="w-4 h-4 mr-2" />{service.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-800">Get a Tailored Quote</h3>
              <p className="mt-2 text-blue-700">Contact us for a free consultation on the best window film solution for your {title.toLowerCase()}.</p>
              <Button asChild size="lg" className="mt-6"><Link to="/contact">Request My Free Estimate</Link></Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IndustriesPage;
