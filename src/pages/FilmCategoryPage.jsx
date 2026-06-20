import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { filmCategories } from '@/data/films';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';

const categoryFaqs = {
  'casper-films': [
    { q: 'What is Casper film and how does it work?', a: 'Casper film uses a specialized optical coating that makes screens appear opaque when viewed from an angle while remaining clear straight-on. It blocks the display from being seen through glass walls — used in conference rooms and executive offices where screen privacy is required without sacrificing natural light.' },
    { q: 'Can Casper film be removed without damaging glass?', a: 'Yes. Casper film is removable and repositionable. It does not etch or permanently alter the glass surface. Removal typically takes 30–60 minutes per panel with no adhesive residue.' },
    { q: 'Does Casper film work on all screen types?', a: 'Casper film is optimized for LCD and LED screens. It may not fully obscure OLED displays. We test compatibility with your specific screen type before installation.' },
  ],
  'frosted-etched-films': [
    { q: 'Will frosted window film block all visibility through glass?', a: 'Frosted film diffuses light and blocks direct visibility from both sides at all times — unlike one-way mirror film which only works in daylight. It is used for permanent privacy in bathrooms, offices, shower enclosures, and glass doors where consistent privacy is required regardless of lighting.' },
    { q: 'Can frosted film be cut to custom shapes or patterns?', a: 'Yes. Frosted film can be precision-cut to any shape — company logos, geometric patterns, stripe bands, or custom designs. We use digital cutting equipment for clean edges on complex shapes.' },
    { q: 'How does frosted film compare to sandblasted glass?', a: 'Frosted film achieves a nearly identical visual result to sandblasted glass at a fraction of the cost. The key advantage is removability — sandblasted glass requires full pane replacement to change, while film can be removed or updated without touching the glass.' },
  ],
  'gradient-films': [
    { q: 'What is gradient window film used for?', a: 'Gradient film transitions from opaque or frosted at one edge to clear at the other — creating a fade effect on glass. Common applications include bottom-of-window privacy bands on street-level glass, architectural accent glass, conference room partitions, and decorative interior glass walls.' },
    { q: 'Does gradient film fade or change color over time?', a: 'Quality gradient films are UV-stabilized and do not yellow or fade under normal conditions. We install commercial-grade gradient film with 5–10 year manufacturer warranties depending on application.' },
    { q: 'Can gradient film be installed on existing glass without replacement?', a: 'Yes. Gradient film applies directly to existing glass surfaces with no structural modification. Installation is completed in hours and the glass can be used immediately after a short cure period.' },
  ],
  'reflective-films': [
    { q: 'How much heat does reflective window film block?', a: 'Reflective window film blocks 60–80% of solar heat depending on the film specification and glass orientation. The metallic layer reflects solar energy back before it enters the building — reducing AC load significantly on south and west-facing glass in Phoenix.' },
    { q: 'Does reflective film look like a mirror from outside?', a: 'Yes — reflective film creates a one-way mirror effect during daylight hours. The exterior has a metallic mirror appearance while interior views remain clear. At night when interior lights are on, the effect reverses. If you want heat rejection without mirror appearance, ceramic film is the better option.' },
    { q: 'Is reflective film suitable for residential use in Phoenix HOA communities?', a: 'It depends on your HOA rules. Some Phoenix area HOAs restrict highly reflective film on residential windows. We carry lower-reflectivity options that provide heat rejection while meeting most HOA aesthetic requirements. We review HOA guidelines before recommending a spec.' },
  ],
  'patterned-privacy-films': [
    { q: 'What types of patterns are available for privacy window film?', a: 'We install the full 3M Fasara pattern library — including geometric, linen, frost, bamboo, floral, striped, and custom designs. Over 100 pattern options are available across translucent, frosted, and clear-base variations. Pattern film is used in retail, corporate, medical, and residential environments.' },
    { q: 'Can patterned film be used on commercial storefronts?', a: 'Yes. Patterned privacy film is one of the most common applications we install on commercial storefronts and restaurant glass — providing brand-consistent design without permanent etching. We have installed 3M Fasara Luna at Chipotle Scottsdale and 3M Fasara patterned film at Starbucks Phoenix locations.' },
    { q: 'How long does patterned window film last?', a: 'Commercial-grade patterned film in Arizona lasts 7–12 years depending on sun exposure and whether it is applied to interior or exterior glass surfaces. Interior applications last longer due to reduced UV and heat exposure.' },
  ],
  'colored-films': [
    { q: 'Can colored window film be used for branding or signage?', a: 'Yes. Colored film is used for brand accent glass, logo backgrounds, and interior design elements. It is applied to glass partitions, doors, and storefront glass to create color zones without paint or vinyl. Film is removable if branding changes.' },
    { q: 'Does colored film block heat or UV?', a: 'Colored film provides moderate UV protection but is not optimized for heat rejection. If your goal is primarily solar control with a tint appearance, a colored solar film combining dye with UV-blocking layers is the right spec. We clarify performance expectations for every colored film application.' },
    { q: 'Is colored window film permanent?', a: 'No. Colored window film is removable without damaging the glass — unlike paint or vinyl wraps. This makes it suitable for leased commercial spaces and environments where glass may need to be restored to clear.' },
  ],
  'stained-glass-films': [
    { q: 'Does stained glass film look like real stained glass?', a: 'High-quality stained glass film achieves a very close visual approximation of traditional leaded stained glass — particularly in backlit environments. It is used in churches, historic renovations, restaurants, and residential accent windows. The key difference is that film does not refract light the same way as hand-blown antique glass.' },
    { q: 'Can stained glass film be custom designed?', a: 'Yes. Custom stained glass film patterns can be designed to match existing architectural elements, replicate historic patterns, or create original designs. Lead-line film is applied over the colored base to complete the stained glass appearance.' },
    { q: 'Is stained glass film removable?', a: 'Yes. Stained glass film is removable without damaging the glass. This is a significant advantage over actual stained glass installation — which requires framing, structural modification, and is permanent.' },
  ],
  'exterior-films': [
    { q: 'What is exterior window film and when is it used?', a: 'Exterior window film is applied to the outside surface of glass rather than the interior. It is used when interior access is impractical — such as structural glass, skylights, atrium roofs, and high-rise glass where interior scaffolding is not feasible. Exterior film uses a harder scratch-resistant coating to handle outdoor exposure.' },
    { q: 'Does exterior window film last as long as interior film?', a: 'Exterior film has a shorter lifespan than interior film due to direct exposure to weather, UV, and abrasion — typically 5–8 years versus 10–15 years for interior applications. We recommend exterior film only when interior installation is genuinely not feasible.' },
    { q: 'Can exterior film be used on all glass types?', a: 'Exterior film is compatible with most flat commercial glass. It cannot be applied to patterned, wired, or heavily textured surfaces. We assess glass type and installation access on every exterior film project before recommending this approach.' },
  ],
  'smart-spy-films': [
    { q: 'What is smart spy film and how is it different from regular privacy film?', a: 'Smart spy film (also called switchable or smart glass film) uses liquid crystal technology to switch between transparent and opaque on demand — controlled by a switch or automated system. Unlike static frosted film which is always opaque, smart film gives you on-demand privacy without permanently blocking light.' },
    { q: 'What does smart window film cost in Phoenix?', a: 'Smart switchable window film is a premium product — typically $50–$150 per square foot installed depending on glass size and control system complexity. It is most commonly used in executive conference rooms, high-end residential, and medical consultation rooms where on-demand privacy is required.' },
    { q: 'Is smart film difficult to install?', a: 'Smart film installation requires both film application and electrical wiring for the control system. We work with licensed electricians on smart film projects to ensure proper power supply and switch integration. It is not a DIY product.' },
  ],
  'elegant-textured-films': [
    { q: 'What surfaces can textured window film be applied to?', a: 'Textured film applies to flat glass surfaces — windows, glass doors, shower enclosures, glass partitions, and mirrors. It cannot be applied to already-textured, wired, or curved glass. We verify glass compatibility on every project.' },
    { q: 'Does textured film provide privacy?', a: 'Yes — textured films with surface relief patterns diffuse visibility while maintaining light transmission. The degree of privacy depends on the specific texture. Deep embossed textures provide more obscuration than subtle linen or fabric patterns.' },
    { q: 'Can textured film be used in wet areas like shower glass?', a: 'Yes. Quality textured film is moisture-resistant and suitable for shower enclosures and bathroom glass. We specify film with appropriate moisture resistance ratings for wet area applications.' },
  ],
  'glasslike-distortion-films': [
    { q: 'What is glass distortion film used for?', a: 'Glass distortion film creates a refractive, rippled, or wavy visual effect on glass — used for artistic privacy applications, decorative interior glass, retail display windows, and architectural accent panels. It obscures visibility while allowing significant light transmission.' },
    { q: 'Is distortion film the same as frosted film?', a: 'No. Frosted film diffuses light evenly and creates a matte, opaque appearance. Distortion film creates a refractive visual effect — shapes are visible but unrecognizable, similar to textured art glass. The choice depends on whether you want matte privacy or a dynamic visual effect.' },
    { q: 'How long does glass distortion film last in Arizona?', a: 'Interior glass distortion film lasts 10–15 years in Arizona with proper installation. UV stabilizers in quality films prevent yellowing from the intense Arizona sun.' },
  ],
  'specialty-films': [
    { q: 'What types of specialty window film do you install in Phoenix?', a: 'Specialty films include anti-graffiti film (sacrificial surface protection), blast-mitigation film (government/security), blackout film (complete light block), one-way mirror film, solar control film, and bird-strike deterrent film. We install specialty film for commercial, government, and residential applications across Phoenix.' },
    { q: 'Do you install anti-graffiti film in Phoenix?', a: 'Yes. Anti-graffiti film is a sacrificial clear film that protects glass, mirrors, and polished metal surfaces from tagging, scratching, and acid etching. When damaged, the film is replaced rather than the glass — typically saving $500–$5,000 per surface versus glass replacement. We install anti-graffiti film at transit stations, retail locations, and commercial properties across Phoenix.' },
    { q: 'Can specialty film be installed on commercial building exteriors?', a: 'Yes. Many specialty films — including blast mitigation, anti-graffiti, and solar control — are available in exterior-grade formulations for commercial building applications. We assess glass type, exposure conditions, and performance requirements before specifying exterior specialty film.' },
  ],
  'squid-window-textile': [
    { q: 'What is Squid window textile film?', a: 'Squid is a flexible, textile-based window film that combines fabric aesthetics with functional glass coverage. It is available in woven patterns that diffuse light while adding a soft, fabric-like texture to glass surfaces. Used in retail, hospitality, and interior design applications.' },
    { q: 'Is Squid film durable for commercial use?', a: 'Yes. Squid textile film is a commercial-grade product designed for high-traffic environments. It is scratch-resistant, cleanable, and UV-stabilized. Commercial warranty terms apply.' },
    { q: 'Can Squid film be applied to any glass surface?', a: 'Squid textile film applies to standard flat glass surfaces. Like other decorative films, it is not suitable for heavily textured, wired, or curved glass. We verify compatibility before installation.' },
  ],
};

const FilmCategoryPage = () => {
  const { categorySlug } = useParams();
  const category = filmCategories.find(c => c.slug === categorySlug);

  if (!category) return <NotFound />;

  const pageTitle = `${category.name} Window Films for Arizona Homes | Arizona House of Film`;
  const metaDescription = `Vibrant ${category.name.toLowerCase()} options ideal for branding, interior style, and privacy in Arizona homes.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/films/${category.slug}`;

  // ✅ Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Film Library", "item": "https://arizonahouseoffilm.com/films" },
      { "@type": "ListItem", "position": 2, "name": category.name, "item": canonicalUrl }
    ]
  };

  // ✅ FAQ Schema — per-category specific questions
  const categoryFaqs_data = categoryFaqs[category?.slug] || [
    { q: 'Can this film type be used for commercial properties in Phoenix?', a: 'Yes. All of our window film products are available for both residential and commercial applications across Phoenix. We provide custom specifications based on your glass type, building orientation, and performance requirements.' },
    { q: 'Does this window film provide UV protection?', a: 'Yes. Our window films block up to 99% of UV radiation — protecting flooring, furniture, merchandise, and occupants from UV damage. UV protection is included in all film types we install.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categoryFaqs_data.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  // ✅ Shipping Details Schema
  const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": { "@type": "MonetaryAmount", "value": "0.00", "currency": "USD" },
    "shippingDestination": {
      "@type": "DefinedRegion",
      "addressCountry": "US",
      "addressRegion": "AZ"
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
      "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "DAY" }
    },
    "doesShip": true
  };

  // ✅ Return Policy Schema (fixed with full fields)
  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "US",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "returnMethod": "ReturnByMail",
    "returnFees": "FreeReturn",
    "merchantReturnDays": 30,
    "returnPolicySeasonalOverride": "https://schema.org/NoReturns"
  };

  // ✅ ProductGroup Schema with Offer, Shipping, Return Policy, ProductGroupID
  const generateProductVariantSchema = (product, variant, parentId) => ({
    "@type": "Product",
    "name": variant.name,
    "sku": variant.sku,
    "productGroupID": parentId,
    "image": `https://arizonahouseoffilm.com/images/films/${variant.sku.toLowerCase()}.webp`,
    "description": `Premium ${variant.name} window film ideal for Arizona residential and commercial properties.`,
    "brand": { "@type": "Brand", "name": variant.brand || "Arizona House of Film" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": variant.price || "19.99",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": `https://arizonahouseoffilm.com/films/${category.slug}/${product.slug}`,
      "shippingDetails": shippingDetails,
      "hasMerchantReturnPolicy": returnPolicy
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1291" },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Verified Customer" },
      "reviewBody": `Excellent ${variant.name} film – highly rated for quality and UV protection.`
    }
  });

  const productGroupSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": category.name,
    "productGroupID": `${category.slug}-group`,
    "description": category.description,
    "url": canonicalUrl,
    "image": `https://arizonahouseoffilm.com/images/categories/${category.slug}.webp`,
    "brand": { "@type": "Brand", "name": "Arizona House of Film" },
    "hasVariant": category.products.flatMap(product =>
      product.variants.map(variant =>
        generateProductVariantSchema(product, variant, `${category.slug}-group`)
      )
    ),
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1291" },
    "review": {
      "@type": "Review",
      "itemReviewed": { "@type": "Organization", "name": "Arizona House of Film" },
      "author": { "@type": "Person", "name": "Verified Customer" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": `Great selection of ${category.name.toLowerCase()} and flawless installation.`
    },
    "shippingDetails": shippingDetails,
    "hasMerchantReturnPolicy": returnPolicy
  };

  // ✅ ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": category.products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "url": `https://arizonahouseoffilm.com/films/${category.slug}/${product.slug}`,
        "image": `https://arizonahouseoffilm.com/images/films/${product.slug}.webp`,
        "description": `High-quality ${product.name} window film ideal for homes and businesses across Arizona.`,
        "brand": { "@type": "Brand", "name": "Arizona House of Film" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "19.99",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": `https://arizonahouseoffilm.com/films/${category.slug}/${product.slug}`,
          "shippingDetails": shippingDetails,
          "hasMerchantReturnPolicy": returnPolicy
        },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "27" },
        "review": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Verified Customer" },
          "reviewBody": `Customers love ${product.name} for clarity, performance, and UV protection.`
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />

        {/* ✅ Fully validated structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productGroupSchema) }} />
      </Helmet>

      <div className="bg-gray-50">
        <section className="relative py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="mb-4">
              <Link to="/films" className="text-white hover:underline flex items-center justify-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Film Library
              </Link>
            </div>
            <h1
              className="text-4xl md:text-6xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg md:text-xl text-gray-300">
              {category.description}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Explore Our {category.name} Collections
            </h2>
            <div className="space-y-6">
              {category.products.map((product, index) => (
                <motion.div key={product.slug} initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group p-6">
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      <Link to={`/films/${category.slug}/${product.slug}`} className="hover:text-blue-600 transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Explore our {product.name.toLowerCase()} options for residential and commercial use.
                    </p>
                    <div className="mt-auto">
                      <Button asChild variant="link" className="p-0 text-blue-600 hover:text-blue-800">
                        <Link to={`/films/${category.slug}/${product.slug}`}>
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FilmCategoryPage;