import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ExternalLink, ShieldCheck, Zap, ThermometerSun, Award } from 'lucide-react';
import { brands } from '@/data/brands';
import { filmCategories } from '@/data/films';
import { blogPosts } from '@/data/blogPosts.jsx';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';

const BrandPage = () => {
  const { slug } = useParams();
  const brand = brands.find(b => b.slug === slug);

  if (!brand) return <NotFound />;

  const pageTitle = `${brand.name} Window Films | Arizona House of Film | ROC #315259`;
  const metaDescription = `Authorized ${brand.name} window film installation in Arizona. High-performance solar, security, and decorative solutions for Phoenix & Scottsdale homes.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/brands/${brand.slug}`;

  // ✅ Safety Guards for Schema Logic
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com" },
      { "@type": "ListItem", "position": 2, "name": "Brands", "item": "https://arizonahouseoffilm.com/brands" },
      { "@type": "ListItem", "position": 3, "name": brand.name }
    ]
  };

  // We check if brand has specific FAQs, otherwise provide an empty structure to prevent .map crashes
  const faqSchema = brand.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": brand.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  } : null;

  const relatedFilmCategories = filmCategories.filter(cat =>
    brand.relatedFilms?.some(rf => cat.slug.includes(rf))
  );

  const relatedBlogPosts = blogPosts
    ? blogPosts.filter(post => post.brandMentions?.includes(brand.name)).slice(0, 3)
    : [];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <div className="bg-slate-950 min-h-screen text-white">
        {/* --- HERO SECTION --- */}
        <section className="relative py-16 md:py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Link to="/brands" className="inline-flex items-center text-red-500 font-bold uppercase tracking-widest text-xs mb-8 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Partners
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-3 mb-4 text-slate-400 font-black uppercase tracking-tighter">
                  <Award className="text-red-600 w-5 h-5" />
                  Authorized Arizona Installer
                </div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.8] mb-6">
                  {brand.name}<br /><span className="text-red-600">Series</span>
                </h1>
                <p className="text-xl text-slate-300 font-bold uppercase tracking-wide border-l-4 border-red-600 pl-6 max-w-2xl">
                  {brand.description}
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                {brand.url && brand.url !== "#" && (
                  <Button asChild variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black font-black uppercase italic">
                    <a href={brand.url} target="_blank" rel="noopener noreferrer">
                      Official Specs <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
                <Button asChild className="bg-red-600 hover:bg-white hover:text-red-600 rounded-none font-black uppercase italic px-8">
                  <Link to="/contact">Get {brand.name} Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- MAIN CONTENT & SPECS --- */}
        <section className="py-20 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-16">
              
              <div className="lg:col-span-2 prose prose-slate max-w-none">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8">
                  Engineering the <span className="text-red-600">Arizona Standard</span>
                </h2>
                <div className="text-lg font-medium text-slate-700 space-y-6">
                  <p>
                    Arizona House of Film is a factory-certified installer of <strong>{brand.name}</strong> window films. In our desert climate, where surface temperatures can exceed 160°F, we choose {brand.name} for its industry-leading thermal stability and molecular-level UV inhibitors.
                  </p>
                  <p>
                    Whether you are targeting massive HVAC savings or protecting high-end interiors from solar degradation, {brand.name} provides the nanotechnology required for long-term performance in Phoenix and Scottsdale.
                  </p>
                </div>

                {relatedFilmCategories.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-black uppercase italic mb-6">Available {brand.name} Solutions</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {relatedFilmCategories.map(cat => (
                        <Link key={cat.slug} to={`/films/${cat.slug}`} className="group p-6 border-2 border-slate-100 hover:border-red-600 transition-all flex justify-between items-center">
                          <span className="font-black uppercase tracking-tighter text-xl group-hover:text-red-600 transition-colors">{cat.name}</span>
                          <CheckCircle className="text-slate-200 group-hover:text-red-600 w-6 h-6" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Technical Sidebar */}
              <aside className="space-y-8">
                <div className="bg-slate-950 text-white p-8 border-t-8 border-red-600">
                  <h3 className="font-black uppercase italic tracking-tighter text-2xl mb-8 border-b border-white/10 pb-4">
                    Performance <span className="text-red-600 text-sm block">Metrics</span>
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <ThermometerSun className="text-red-600 w-6 h-6 shrink-0" />
                      <div>
                        <span className="block font-black uppercase text-sm tracking-tighter italic">Heat Rejection</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                          {brand.specs?.heatRejection || "High Performance IR Block"}
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <ShieldCheck className="text-red-600 w-6 h-6 shrink-0" />
                      <div>
                        <span className="block font-black uppercase text-sm tracking-tighter italic">UV Protection</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                          {brand.specs?.uvProtection || "99.9% Solar Blockade"}
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Zap className="text-red-600 w-6 h-6 shrink-0" />
                      <div>
                        <span className="block font-black uppercase text-sm tracking-tighter italic">Technology</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                          {brand.specs?.tech || "Advanced Nanotechnology"}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* --- FAQ SECTION (Safely Guarded) --- */}
        {faqSchema?.mainEntity && (
          <section className="py-24 border-t border-white/5 bg-slate-950">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-12 text-center underline decoration-red-600 underline-offset-8">
                Technical FAQ
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-900/50 border border-white/10 p-6 hover:border-red-600/50 transition-colors"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  >
                    <h3 className="text-red-500 font-black uppercase tracking-tighter italic mb-2">Q: {faq.name}</h3>
                    <p className="text-slate-400 font-bold uppercase text-xs tracking-widest leading-relaxed">A: {faq.acceptedAnswer?.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- DYNAMIC BLOG LINKS --- */}
        {relatedBlogPosts.length > 0 && (
          <section className="py-20 bg-slate-50 text-slate-950">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8 italic">Field Reports & Insights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogPosts.map(post => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-white p-6 border border-slate-200 hover:shadow-xl transition-shadow text-left">
                    <h4 className="font-black uppercase tracking-tight text-lg mb-2">{post.title}</h4>
                    <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Read Article &rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BrandPage;