import React from "react";
import { Helmet } from "react-helmet-async";
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

  const services = [
    { name: "Residential Window Tinting", icon: HomeIcon, path: "/residential-window-tinting", cta: "Explore Residential Tinting", description: "Advanced home tinting using ceramic films that block 84% of solar heat and 99.9% of UV rays." },
    { name: "Commercial Window Tinting", icon: Building, path: "/commercial-window-tinting", cta: "Explore Commercial Tinting", description: "Industrial-grade solar control solutions designed to lower HVAC loads and improve comfort." },
    { name: "Decorative & Privacy Films", icon: Zap, path: "/decorative-window-films", cta: "Explore Decorative Films", description: "600+ patterns including frosted privacy film, bathroom privacy film, office glass film, and one-way mirror film." },
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
      { "@type": "Question", name: "Do you help with SRP or APS rebates?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide the NFRC-rated technical data sheets required for SRP Business Solutions and APS energy-efficiency rebate applications. We provide NFRC-rated data sheets required for SRP and APS rebate applications. Customers submit directly to their utility provider." } },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Arizona House of Film",
    url: "https://arizonahouseoffilm.com",
    logo: {
      "@type": "ImageObject",
      "url": "https://arizonahouseoffilm.com/favicon-512.png",
      "width": 512,
      "height": 512,
    },
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
    <main>
      <Helmet>
        <title>Arizona House of Film | Licensed Window Film Contractor</title>
        <meta name="description" content="Arizona's licensed window film contractor — commercial, residential, security & decorative film across Phoenix, Scottsdale & all Arizona. ROC #314088. Free estimate." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/" />
        <meta property="og:title" content="Arizona Window Film | Phoenix's #1 Rated Installer Since 2017" />
        <meta property="og:description" content="Arizona's trusted window film installer since 2017. 713+ projects. Residential, commercial, security & decorative film. Phoenix, Scottsdale & all AZ. Licensed ROC #314088." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Tinting Phoenix | Arizona House of Film" />
        <meta name="twitter:description" content="Phoenix's authority in ceramic window tinting. Licensed ROC #314088." />
        <meta name="twitter:image" content={ogImage} />
        <link rel="preload" as="image" href={HERO_IMAGE} fetchpriority="high" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative w-full bg-gray-900 overflow-hidden" style={{ aspectRatio: "1600/1066", minHeight: "500px", maxHeight: "85vh" }}>
        <img src={HERO_IMAGE} alt="Commercial and Residential Window Tinting Phoenix Arizona" className="absolute inset-0 w-full h-full object-cover" width="1600" height="1066" fetchpriority="high" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center relative z-20">
          <div className="text-center max-w-5xl">
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-6xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
                Arizona <span className="text-blue-500 italic">House of Film</span>
                {" "}— Licensed Window Film{" "}
                <span className="block sm:inline">Contractor Phoenix AZ</span>
              </h1>
              <p className="mt-8 text-base sm:text-lg md:text-2xl text-gray-100 font-medium max-w-3xl mx-auto">
                <span className="sm:hidden">
                  Phoenix's licensed window film contractor. Commercial, residential, security & decorative. ROC #314088.
                </span>
                <span className="hidden sm:inline">
                  Arizona House of Film installs commercial window tinting, residential window film, security film, decorative glass film, and solar control film across Phoenix, Scottsdale, and the Arizona metro. Licensed ROC #314088 — serving contractors, enterprises, and homeowners since 2017.
                </span>
              </p>
              <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-3">
                <Button size="lg" asChild className="bg-blue-600 text-white font-black w-full sm:w-auto h-16 px-10 rounded-none">
                  <Link to="/contact">Schedule Free Glass Assessment</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="bg-white border-2 border-slate-900 text-slate-900 font-black w-full sm:w-auto h-16 px-10 rounded-none hover:bg-slate-900 hover:text-white">
                  <Link to="/get-a-quote">Get a Film Quote</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="bg-white border-2 border-slate-900 text-slate-900 font-black w-full col-span-2 sm:col-span-1 sm:w-auto h-16 px-10 rounded-none hover:bg-slate-900 hover:text-white">
                  <Link to="/window-film-cost-estimator">Instant Price Estimate</Link>
                </Button>
              </div>
            </div>
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
            Arizona's extreme climate — with summer temperatures exceeding 115°F and one of the highest UV indexes in North America — makes window film not a luxury but a necessity. Arizona House of Film has been protecting Phoenix homes and businesses since 2017, installing ceramic, <Link to="/safety" className="text-blue-200 underline">safety</Link>, decorative, and energy-saving films for thousands of Arizona properties. Licensed ROC #314088.
          </p>
        </div>
      </section>

      {/* TRUST STACK */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { icon: Star, text: "Top Rated Google", sub: "22 Google Reviews" },
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

      {/* AUTHORITY SECTION — expanded film inventory */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-green-400 text-sm font-bold uppercase tracking-widest mb-2">ARIZONA'S TRUSTED INSTALLER SINCE 2017</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">The Standard for Arizona Solar Control</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
              Since 2017, Arizona House of Film has been the trusted provider of residential and commercial window tinting in Phoenix, Scottsdale, and across Arizona. Our advanced Nano-Ceramic window films can reduce annual cooling loads by $250–$725. Licensed ROC #314088. Read our complete <Link to="/blog/solar-window-film-phoenix-az" className="text-green-400 hover:text-green-300 underline">solar window film Phoenix</Link> guide for technical specs and rebate eligibility.
            </p>
          </div>

          {/* Core specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'SRP & APS Rebate Ready', icon: '⚡' },
              { label: '99.9% UV Protection', icon: '☀️' },
              { label: 'Glare Mitigation', icon: '🔆' },
              { label: 'Dual-Pane Safe', icon: '🪟' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-white text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Film categories */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-white mb-5 text-center">Film Technologies We Install</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  category: 'Solar Control Films',
                  films: ['Nano-Ceramic', 'Spectrally Selective', 'Low-E', 'Carbon Film', 'Dual-Reflective'],
                  link: '/residential-window-tinting',
                  desc: 'Reject 50–84% solar heat. SRP/APS rebate eligible.',
                },
                {
                  category: 'Security & Safety Films',
                  films: ['8 mil Safety Film', '12 mil Security Film', 'C-Bond Strengthening', 'Blast Retention', 'Anti-Shatter'],
                  link: '/safety',
                  desc: 'Impact-resistant. Used in schools, government, retail.',
                },
                {
                  category: 'Frosted & Privacy Films',
                  films: ['Matte Frosted', 'Etched Glass Film', 'Patterned Privacy', 'Rice Paper', 'Linen Texture'],
                  link: '/bathroom-privacy-window-film',
                  desc: 'Bathroom, office, entryway, and sidelight privacy.',
                },
                {
                  category: 'Decorative Films',
                  films: ['Stained Glass', 'Gradient / Ombré', 'Colored Film', 'Casper Cloaking', 'Dichroic'],
                  link: '/films',
                  desc: '600+ Solyx patterns. Residential and commercial.',
                },
                {
                  category: 'Anti-Graffiti Films',
                  films: ['Sacrificial Surface Film', 'Clear Anti-Graffiti', 'Tinted Anti-Graffiti', 'Mirror Anti-Graffiti'],
                  link: '/anti-graffiti-film',
                  desc: 'Peel-and-replace protection for storefronts and transit.',
                },
                {
                  category: 'Reflective & One-Way Films',
                  films: ['Silver Mirror', 'Bronze Reflective', 'Gold Reflective', 'Pewter', 'Neutral Gray'],
                  link: '/one-way-mirror-window-film',
                  desc: 'Daytime privacy + maximum solar heat rejection.',
                },
                {
                  category: 'Countertop Protection Film',
                  films: ['Clear Bra Film', 'Anti-Scratch', 'Heat-Resistant', 'Stain-Proof', 'Invisible Guard'],
                  link: '/countertop-protection-film-arizona',
                  desc: 'Protect quartz, marble, granite from scratches and heat.',
                },
              ].map((cat, i) => (
                <Link key={i} to={cat.link} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 rounded-xl p-5 transition-all">
                  <h4 className="font-bold text-white text-sm mb-2 group-hover:text-green-400 transition-colors">{cat.category}</h4>
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.films.map((f, j) => (
                      <span key={j} className="bg-white/10 text-gray-300 text-xs px-2 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Brand signals */}
          <div className="mb-8">
            <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Films We Install</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Solyx', 'LLumar', '3M', 'Huper Optik', 'Madico', 'SolarGard', 'Vista', 'Llumar CTX'].map((brand) => (
                <span key={brand} className="bg-white/10 border border-white/10 text-gray-200 text-sm font-semibold px-4 py-1.5 rounded-full">{brand}</span>
              ))}
            </div>
          </div>

          {/* CTA line */}
          <div className="text-center mb-10">
            <p className="text-gray-300 text-sm">
              We serve <Link to="/commercial-window-tinting" className="text-green-400 hover:text-green-300 underline">commercial properties</Link> and <Link to="/residential-window-tinting" className="text-green-400 hover:text-green-300 underline">residential homes</Link> across the Valley — including <Link to="/residential-window-tinting-phoenix" className="text-green-400 hover:text-green-300 underline">residential window tinting in Phoenix</Link> and <Link to="/commercial-window-tinting-scottsdale" className="text-green-400 hover:text-green-300 underline">commercial window tinting in Scottsdale</Link>.{' '}
              <Link to="/films" className="text-green-400 hover:text-green-300 underline">Browse our full film catalog</Link>, compare the <Link to="/brands" className="text-green-400 hover:text-green-300 underline">film brands we carry</Link>, or <Link to="/service-areas" className="text-green-400 hover:text-green-300 underline">find coverage near you</Link>.{' '}
              Try the <Link to="/ai-window-film-estimator" className="text-green-400 hover:text-green-300 underline">AI window film estimator</Link> for an instant quote, browse the <Link to="/blog" className="text-green-400 hover:text-green-300 underline">window film resource blog</Link>, or see our <Link to="/gallery" className="text-green-400 hover:text-green-300 underline">project gallery</Link> ·{' '}
              <Link to="/book-now" className="text-green-400 hover:text-green-300 underline">Book a Consultation</Link>.
            </p>
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

      {/* SERVICE AREA COVERAGE */}
      <section className="py-10 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <p className="text-gray-300 font-medium leading-relaxed text-sm md:text-base">
            Arizona House of Film serves the full Phoenix metro —{" "}
            <Link to="/window-tinting-phoenix" className="text-blue-300 underline hover:text-white">Phoenix</Link>,{" "}
            <Link to="/commercial-window-tinting-scottsdale" className="text-blue-300 underline hover:text-white">Scottsdale</Link>,{" "}
            <Link to="/window-tinting-chandler" className="text-blue-300 underline hover:text-white">Chandler</Link>,{" "}
            <Link to="/window-tinting-gilbert" className="text-blue-300 underline hover:text-white">Gilbert</Link>,{" "}
            <Link to="/window-tinting-mesa" className="text-blue-300 underline hover:text-white">Mesa</Link>,{" "}
            <Link to="/window-tinting-tempe" className="text-blue-300 underline hover:text-white">Tempe</Link>,{" "}
            <Link to="/window-tinting-glendale" className="text-blue-300 underline hover:text-white">Glendale</Link>,{" "}
            <Link to="/window-tinting-peoria" className="text-blue-300 underline hover:text-white">Peoria</Link>,{" "}
            <Link to="/window-tinting-queen-creek" className="text-blue-300 underline hover:text-white">Queen Creek</Link>,{" "}
            and surrounding Arizona communities.
          </p>
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
              { icon: Zap, title: "Utility Rebate Authorized", body: "SRP Business Solutions and APS Peak Player rebate-ready installations. We provide NFRC-rated data sheets required for SRP and APS rebate applications. Customers submit directly to their utility provider." },
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
              { q: "Do you help with SRP or APS rebates?", a: "Yes. We provide the NFRC-rated technical data sheets required for SRP Business Solutions and APS energy-efficiency rebate applications. We provide NFRC-rated data sheets required for SRP and APS rebate applications. Customers submit directly to their utility provider." },
              { q: "Is window tinting safe for dual-pane windows?", a: "Yes — we use Arizona-engineered ceramic and spectrally selective films designed for high thermal load. We assess your glass type before recommending a film to ensure no risk of thermal stress cracking." },
              { q: "What is the difference between ceramic and regular window film?", a: "Ceramic films block heat through infrared rejection rather than darkness, maintaining natural light while rejecting up to 84% of solar heat. Standard dyed films fade over time and work primarily through light reduction. We recommend ceramic for Arizona conditions." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <h3 className="font-black text-gray-900 uppercase text-sm mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center text-gray-600 text-sm">
            More resources:{' '}
            <Link to="/window-film-phoenix" className="text-green-700 underline font-bold">
              Window Film Phoenix
            </Link>
            {' · '}
            <Link to="/residential-window-tinting-phoenix" className="text-green-700 underline font-bold">
              Residential Tinting Phoenix
            </Link>
            {' · '}
            <Link to="/service-areas" className="text-green-700 underline font-bold">
              Service Areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
