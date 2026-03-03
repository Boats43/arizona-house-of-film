import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Award from "lucide-react/dist/esm/icons/award";
import Zap from "lucide-react/dist/esm/icons/zap";
import Shield from "lucide-react/dist/esm/icons/shield";
import Building from "lucide-react/dist/esm/icons/building";
import HomeIcon from "lucide-react/dist/esm/icons/home";
import Star from "lucide-react/dist/esm/icons/star";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Server from "lucide-react/dist/esm/icons/server";
import Clock from "lucide-react/dist/esm/icons/clock";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import HelpCircle from "lucide-react/dist/esm/icons/help-circle";
import Lock from "lucide-react/dist/esm/icons/lock";
import CheckSquare from "lucide-react/dist/esm/icons/check-square";
import { Button } from "@/components/ui/button";

const Home = () => {
  const HERO_IMAGE = "/images/phoenix-window-tinting.webp";
  const LOGO_IMAGE = "/images/Arizona-House-of-Film.webp";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  useEffect(() => {
    const loadDeferredScripts = () => {
      if (window.scriptsLoaded) return;
      const gtmScript = document.createElement("script");
      gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MC2PDPFR";
      gtmScript.async = true;
      document.head.appendChild(gtmScript);
      window.scriptsLoaded = true;
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => setTimeout(loadDeferredScripts, 3500));
    } else {
      setTimeout(loadDeferredScripts, 3500);
    }
    const trigger = () => loadDeferredScripts();
    window.addEventListener("scroll", trigger, { once: true, passive: true });
    return () => window.removeEventListener("scroll", trigger);
  }, []);

  const services = [
    { name: "Residential Window Tinting", icon: HomeIcon, path: "/residential-window-tinting", cta: "Explore Residential Tinting", description: "Advanced home tinting using ceramic films that block 84% of solar heat and 99.9% of UV rays." },
    { name: "Commercial Window Tinting", icon: Building, path: "/commercial-window-tinting", cta: "Explore Commercial Tinting", description: "Industrial-grade solar control solutions designed to lower HVAC loads and improve comfort." },
    { name: "Decorative & Privacy Films", icon: Zap, path: "/decorative-window-films", cta: "Explore Decorative Films", description: "Modern frosted and privacy films that transform interior glass without replacing it." },
    { name: "Safety & Security Film", icon: Shield, path: "/safety", cta: "Explore Security Films", description: "8–12 mil impact-resistant safety films that strengthen glass and deter break-ins." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How long does window film last in Arizona's heat?", acceptedAnswer: { "@type": "Answer", text: "Quality ceramic films are engineered for high-heat climates and typically last 15–25 years in Arizona conditions. We install only manufacturer-certified films backed by warranty." } },
      { "@type": "Question", name: "Does window film make rooms too dark?", acceptedAnswer: { "@type": "Answer", text: "No. Modern ceramic films reject heat through infrared blocking, not by darkening the glass. You keep natural light while eliminating heat and glare." } },
      { "@type": "Question", name: "Do you serve my city?", acceptedAnswer: { "@type": "Answer", text: "We serve Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Tucson, and 100+ Arizona communities. View our full service area coverage." } },
      { "@type": "Question", name: "Is window film worth it in Arizona?", acceptedAnswer: { "@type": "Answer", text: "For most Arizona properties, window film pays for itself within 2–4 years through reduced cooling costs alone — before counting UV protection and security benefits." } },
      { "@type": "Question", name: "How much does window tinting cost in Phoenix?", acceptedAnswer: { "@type": "Answer", text: "Residential projects typically range from $600 to $2,500 depending on film type and window count. Commercial projects are quoted by square footage — ROI typically covers installation cost within 2-4 years through energy savings alone." } },
      { "@type": "Question", name: "Is ceramic film worth it in Arizona?", acceptedAnswer: { "@type": "Answer", text: "Yes — more than anywhere else in the country. In a 115°F climate, ceramic film is the only technology that blocks up to 84% of infrared heat without interfering with GPS signals or darkening glass. The payback period in Phoenix is 2-4 years versus 8-12 years in northern climates." } },
      { "@type": "Question", name: "Do you help with SRP or APS rebates?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide the NFRC-rated technical data sheets required for SRP Business Solutions and APS energy-efficiency rebate applications. We identify qualifying films and assist with the paperwork during your free estimate." } },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Arizona House of Film",
    url: "https://arizonahouseoffilm.com",
    telephone: "+14807881591",
    email: "arizonahouseoffilm@gmail.com",
    image: ogImage,
    description: "Arizona's trusted window film installer since 2012. Licensed ROC #314088.",
    address: { "@type": "PostalAddress", streetAddress: "7007 W Flower St", addressLocality: "Phoenix", addressRegion: "AZ", postalCode: "85033", addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: 33.4484, longitude: -112.074 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" }
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.4", reviewCount: "15" },
    priceRange: "$",
    areaServed: { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
    sameAs: [
      "https://maps.app.goo.gl/TFe5r35sb3diLvtj9",
      "https://www.yelp.com/biz/az-house-of-film-phoenix",
      "https://www.houzz.com/professionals/window-treatments/arizona-house-of-film-pfvwus-pf~1864982788",
      "https://www.homeadvisor.com/rated.ArizonaHouseofFilmLLC.109629489.html",
      "https://azroc.my.site.com/AZRoc/s/contractor-search?licenseId=a0ot0000000NqN0AAK",
    ],
    hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "Arizona Registrar of Contractors License #314088" },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arizona House of Film",
    url: "https://arizonahouseoffilm.com",
    logo: "https://arizonahouseoffilm.com/images/Arizona-House-of-Film.webp",
    contactPoint: { "@type": "ContactPoint", telephone: "+14807881591", email: "arizonahouseoffilm@gmail.com", contactType: "customer service" },
    knowsAbout: [
      "window film installation",
      "solar control film",
      "security film",
      "decorative film",
      "anti-graffiti film",
      "ceramic window tint",
      "commercial window tinting Phoenix",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arizona House of Film",
    url: "https://arizonahouseoffilm.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://arizonahouseoffilm.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Helmet>
        <title>Arizona Window Film & Tinting Experts | Ceramic, Security & Decorative | Arizona House of Film</title>
        <meta name="description" content="Phoenix window film experts since 2012. Ceramic heat rejection, security film, decorative glass. Trusted by U.S. Navy, GCU, Skechers. ROC #314088." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/" />
        <meta property="og:title" content="Window Tinting Phoenix | Residential & Commercial | Arizona House of Film" />
        <meta property="og:description" content="Phoenix's authority in ceramic window tinting for 20+ years. Licensed ROC #314088. Solar control, privacy, and security films." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Tinting Phoenix | Arizona House of Film" />
        <meta name="twitter:description" content="Phoenix's authority in ceramic window tinting. Licensed ROC #314088." />
        <meta name="twitter:image" content={ogImage} />
        <link rel="preload" as="image" href={HERO_IMAGE} fetchpriority="high" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative w-full bg-gray-900 overflow-hidden" style={{ aspectRatio: "1600/1066", minHeight: "500px", maxHeight: "85vh" }}>
        <img src={HERO_IMAGE} alt="Commercial and Residential Window Tinting Phoenix Arizona" className="absolute inset-0 w-full h-full object-cover" width="1600" height="1066" fetchpriority="high" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-20">
          <div className="text-center max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
                Arizona <span className="text-blue-500 italic">Window Film</span> & Tinting Experts — Phoenix, Scottsdale, and Beyond
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-gray-100 font-medium max-w-3xl mx-auto">
                Extreme climate solar control for Arizona's leading brands, builders, and homeowners. From military installations to high-rise efficiency, we neutralize the 115°F heat. ROC #314088.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="bg-blue-600 text-white font-black h-16 px-10 rounded-none">
                  <Link to="/contact">Schedule Free Glass Assessment</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="bg-white text-black border-white hover:bg-gray-100 font-black h-16 px-10 rounded-none">
                  <a href="tel:4807881591" className="hover:underline">(480) 788-1591</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY STRIP */}
      <section className="w-full bg-gray-900 border-y border-gray-800 py-6 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
            Trusted by Arizona's Leading Enterprises &amp; Institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-gray-400 text-sm font-medium">
            {[
              "U.S. Navy Recruitment Centers",
              "Grand Canyon University",
              "Skechers USA",
              "Wespac Construction",
              "Banner Physical Therapy",
              "On Q Financial",
              "DMC Builders",
              "Willmeng Construction",
              "Coca-Cola",
              "FCI Constructors",
              "State of Arizona",
              "City of Mesa",
              "ASU MacroTechnology Works",
              "Glendale Fire Station 152",
              "Frank Lloyd Wright Foundation",
              "Camden Development",
            ].map((name, i, arr) => (
              <React.Fragment key={name}>
                <span>{name}</span>
                {i < arr.length - 1 && <span className="text-gray-600">&bull;</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CLIMATE CONTEXT */}
      <section className="py-8 bg-blue-950 text-white border-b border-blue-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <p className="text-base md:text-lg text-blue-100 font-medium leading-relaxed text-center">
            Arizona's extreme climate — with summer temperatures exceeding 115°F and one of the highest UV indexes in North America — makes window film not a luxury but a necessity. Arizona House of Film has been protecting Phoenix homes and businesses since 2012, installing ceramic, <Link to="/safety" className="text-blue-200 underline">safety</Link>, decorative, and energy-saving films for thousands of Arizona properties. Licensed ROC #314088.
          </p>
        </div>
      </section>

      {/* TRUST STACK */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { icon: Star, text: "Top Rated Google", sub: "15+ Local Reviews" },
            { icon: Award, text: "ROC #314088", sub: "Licensed & Bonded" },
            { icon: Server, text: "500,000+ Sq Ft Installed", sub: "Installed Valley-Wide" },
            { icon: Clock, text: "Free Estimates", sub: "24-Hour Response" },
            { icon: CheckCircle, text: "713+ Projects", sub: "Completed Since 2017" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <item.icon className="w-8 h-8 text-blue-800 mx-auto mb-3" />
              <p className="font-black text-gray-900 uppercase text-xs tracking-tighter">{item.text}</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black text-gray-900 uppercase leading-none mb-8">The Standard for <br /><span className="text-blue-700">Arizona Solar Control</span></h2>
              <p className="text-gray-700 font-medium leading-relaxed mb-6">Since 2012, Arizona House of Film has been the trusted provider of residential and commercial window tinting in Phoenix, Scottsdale, and Tempe.</p>
              <p className="text-gray-700 font-medium leading-relaxed mb-6">Our advanced Nano-Ceramic window films can reduce annual cooling loads by <strong>$250–$725</strong>.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {["SRP & APS Rebate Ready", "99.9% UV Protection", "Glare Mitigation", "Dual-Pane Safe"].map((check) => (
                  <div key={check} className="flex items-center gap-2 font-black text-xs uppercase italic text-blue-900">
                    <CheckCircle className="w-4 h-4" /> {check}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm font-medium mt-6 leading-relaxed">
                We serve{" "}
                <Link to="/commercial-window-tinting" className="text-blue-700 underline">commercial properties</Link>{" "}
                and{" "}
                <Link to="/residential-window-tinting" className="text-blue-700 underline">residential homes</Link>{" "}
                across the Valley. Explore our{" "}
                <Link to="/solutions" className="text-blue-700 underline">full range of film solutions</Link>{" "}
                or browse our{" "}
                <Link to="/service-areas" className="text-blue-700 underline">service areas</Link>{" "}
                to find coverage near you.
              </p>
            </div>
            <div className="bg-gray-50 p-10 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-blue-700" />
                <h3 className="text-2xl font-black text-gray-900 uppercase">Window Tinting FAQ</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-black text-gray-900 uppercase text-sm mb-2">How much does home window tinting cost?</h4>
                  <p className="text-sm text-gray-600 font-medium">Pricing varies by film type and project size. We provide <Link to="/contact" className="text-blue-700 underline">free estimates</Link> with lifetime warranties.</p>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Is tinting safe for dual-pane windows?</h4>
                  <p className="text-sm text-gray-600 font-medium">Yes — we use Arizona-engineered ceramics designed for high thermal load.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Professional Window Film Services in Phoenix &amp; Scottsdale</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-white/5 p-8 border border-white/10 hover:border-blue-500 transition-all group">
              <s.icon className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black uppercase mb-4 tracking-tighter text-white">{s.name}</h3>
              <p className="text-sm text-gray-100 font-medium leading-relaxed mb-8">{s.description}</p>
              <Button variant="link" asChild className="p-0 text-blue-300 hover:text-white uppercase font-black text-xs">
                <Link to={s.path}>{s.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* ARIZONA BENEFITS */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-12">Engineering Glass for the Arizona Desert</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Beat 115°F Heat", body: "Ceramic films block up to 84% of solar heat, keeping interiors 10–15°F cooler without darkening your rooms." },
              { title: "Block 99.9% UV", body: "Arizona's UV index regularly hits 11 (extreme). Our films block 99.9% of UV rays, protecting furniture, flooring, and skin." },
              { title: "Cut Cooling Costs 30%", body: "SRP and APS utility rebates available for qualifying energy-saving film installations." },
              { title: "Protect Against Break-ins", body: "Security films hold shattered glass in place, making forced entry significantly harder." },
            ].map((card, i) => (
              <div key={i} className="p-8 border border-gray-100 bg-gray-50 hover:shadow-lg transition-all">
                <h3 className="text-lg font-black text-gray-900 uppercase mb-4">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR SECTION */}
      <section className="py-24 bg-gray-950 text-white border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Why Arizona's Leading Brands &amp; Homeowners Choose Us</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4" />
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-medium">The difference between a window tint shop and a performance glass partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Military & Government Grade", body: "Trusted for high-security federal and educational installations. Documented work for U.S. Navy Recruitment Centers and State of Arizona facilities. We understand compliance, clearance, and documentation requirements." },
              { icon: Zap, title: "Utility Rebate Authorized", body: "SRP Business Solutions and APS Peak Player rebate-ready installations. We provide NFRC-rated data sheets and handle the rebate application process for qualifying residential and commercial projects." },
              { icon: CheckSquare, title: "Architectural Compliance", body: "LEED credit documentation, SHGC-compliant film specifications, and COMcheck support for general contractors and architects. Frequent subcontractor for Wespac, Willmeng, and FCI Constructors." },
              { icon: Lock, title: "Advanced Security Systems", body: "C-Bond certified glass strengthening and wet-glaze anchoring specialists. Industrial-grade security for schools, dispensaries, government facilities, and high-value retail." },
            ].map((card, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 p-8 hover:border-blue-500 transition-all group">
                <card.icon className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-black uppercase mb-4 tracking-tighter text-white">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME FAQ */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-12">Arizona Window Film — Common Questions</h2>
          <div className="space-y-8">
            {[
              { q: "How long does window film last in Arizona's heat?", a: "Quality ceramic films are engineered for high-heat climates and typically last 15–25 years in Arizona conditions. We install only manufacturer-certified films backed by warranty." },
              { q: "Does window film make rooms too dark?", a: "No. Modern ceramic films reject heat through infrared blocking, not by darkening the glass. You keep natural light while eliminating heat and glare." },
              { q: "Do you serve my city?", a: "We serve Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Tucson, and 100+ Arizona communities. View our full service area coverage." },
              { q: "Is window film worth it in Arizona?", a: "For most Arizona properties, window film pays for itself within 2–4 years through reduced cooling costs alone — before counting UV protection and security benefits." },
              { q: "How much does window tinting cost in Phoenix?", a: "Residential projects typically range from $600 to $2,500 depending on film type and window count. Commercial projects are quoted by square footage — ROI typically covers installation cost within 2-4 years through energy savings alone." },
              { q: "Is ceramic film worth it in Arizona?", a: "Yes — more than anywhere else in the country. In a 115°F climate, ceramic film is the only technology that blocks up to 84% of infrared heat without interfering with GPS signals or darkening glass. The payback period in Phoenix is 2-4 years versus 8-12 years in northern climates." },
              { q: "Do you help with SRP or APS rebates?", a: "Yes. We provide the NFRC-rated technical data sheets required for SRP Business Solutions and APS energy-efficiency rebate applications. We identify qualifying films and assist with the paperwork during your free estimate." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <h3 className="font-black text-gray-900 uppercase text-sm mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
