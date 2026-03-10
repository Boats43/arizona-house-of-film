import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, ArrowLeft, MapPin } from 'lucide-react';
import { allFilms } from '@/data/films';
import { solyxProducts } from '@/data/solyxFilms';
import NotFound from '@/pages/NotFound';

// ─── CATEGORY SEO CONTENT MAP ────────────────────────────────────────────────
const CATEGORY_CONTENT = {

  'frosted-etched-films': {
    h1Suffix: 'Frosted & Etched Window Film',
    metaTitle: (name) => `${name} | Frosted Window Film Phoenix AZ | Arizona House of Film`,
    metaDesc: (name) => `${name} — frosted and etched window film for privacy, style, and UV protection. Installed in Phoenix, Scottsdale & all Arizona. Licensed ROC #314088. Free quote.`,
    intro: `Frosted and etched window films are the most popular decorative privacy solution in Arizona. They eliminate direct sightlines while diffusing natural light — no blinds, no curtains, no loss of brightness. Whether you need bathroom privacy, office glass partitions, conference room opacity, or decorative front door glass, frosted film installs in hours and lasts decades.`,
    useCases: [
      { title: 'Bathroom & Shower Glass', desc: 'Full privacy with natural light. No shower curtain, no frosted glass replacement — just film.' },
      { title: 'Office & Conference Rooms', desc: 'Create private meeting spaces from open glass walls. Remove anytime without damage.' },
      { title: 'Front Door Sidelights', desc: 'Block street-view sightlines into your entryway without replacing expensive glass.' },
      { title: 'Retail Storefronts', desc: 'Brand your glass with custom etched patterns while controlling customer sightlines.' },
      { title: 'Residential Partition Glass', desc: 'Elegant privacy for interior glass railings, stair enclosures, and room dividers.' },
      { title: 'Medical & Legal Offices', desc: 'HIPAA-compliant visual privacy for waiting rooms and consultation areas.' },
    ],
    benefits: [
      'Blocks 99% of UV rays — protects furniture, flooring, and artwork',
      'Maintains full natural light transmission while eliminating sightlines',
      'Removes without adhesive residue — no glass damage',
      'Scratch-resistant hard coat on premium Solyx films',
      'Available in matte, satin, etched, and pattern varieties',
      'Works on tempered, laminated, and standard float glass',
    ],
    faqs: [
      { q: 'How long does frosted window film last in Arizona\'s heat?', a: 'Premium Solyx frosted films are rated for Arizona\'s extreme UV exposure. Expect 10–15 years on interior applications. Exterior-rated films carry a separate warranty.' },
      { q: 'Can frosted film be applied to textured glass?', a: 'Smooth glass surfaces only. Heavily textured glass (like obscure or rain glass) requires a different application approach — contact us for assessment.' },
      { q: 'Is frosted window film removable?', a: 'Yes. All film installs are fully reversible. We can remove and replace without glass damage. No residue on quality film.' },
      { q: 'Does frosted film work on both sides of the glass?', a: 'Most frosted films are interior-mount only. Exterior-rated frosted films are available for specific applications. We assess your glass before recommending.' },
      { q: 'How much does frosted window film cost in Phoenix?', a: 'Frosted film installation ranges from $8–$18 per square foot depending on film spec, glass accessibility, and project scope. All projects are custom-quoted — call (480) 788-1591.' },
    ],
    keywords: 'frosted window film phoenix, etched window film arizona, privacy window film scottsdale, frosted glass film installation, decorative frosted film arizona',
  },

  'casper-films': {
    h1Suffix: 'Casper Privacy Cloaking Film',
    metaTitle: (name) => `${name} | Casper Cloaking Film Arizona | Arizona House of Film`,
    metaDesc: (name) => `${name} — Casper cloaking film blocks LED screens from outside view while maintaining full glass clarity. Commercial installers Phoenix & Scottsdale. ROC #314088.`,
    intro: `Casper cloaking film is the only window film technology specifically engineered to block LED and OLED screen content from outside view while leaving the glass visually transparent. Designed by Designtex, Casper is standard-spec for law firms, finance offices, executive suites, boardrooms, and any glass-walled space with sensitive screen data. Arizona House of Film is an authorized Casper installer serving Phoenix and Scottsdale.`,
    useCases: [
      { title: 'Law Firm Conference Rooms', desc: 'Block case files, deposition screens, and client data from hallway visibility.' },
      { title: 'Financial Services', desc: 'Protect trading screens, portfolio data, and client information in glass offices.' },
      { title: 'Executive Boardrooms', desc: 'Prevent competitive intelligence leaks during presentations and strategy sessions.' },
      { title: 'Healthcare Administration', desc: 'Maintain HIPAA visual compliance on glass-walled workstations and nursing stations.' },
      { title: 'Tech & Startup Offices', desc: 'Protect IP, code, and product roadmaps on open-plan glass walls.' },
      { title: 'Government & Legal', desc: 'Security-cleared spaces where screen content must remain visually classified.' },
    ],
    benefits: [
      'Blocks LED/OLED screen content — invisible to outside observers',
      'Glass remains fully transparent and clear to the human eye',
      'No impact on screen brightness or color accuracy from inside',
      'Removes cleanly — no glass modification required',
      'Designed by Designtex, manufactured by Solyx',
      'Works with all LED, LCD, and OLED display technology',
    ],
    faqs: [
      { q: 'How does Casper cloaking film work?', a: 'Casper uses a proprietary optical interference layer that scatters LED wavelengths at specific angles. Screens appear black to anyone outside the glass while remaining fully visible inside.' },
      { q: 'Does Casper film affect screen brightness from inside?', a: 'No. Casper has no measurable impact on screen visibility, color, or brightness for people inside the room.' },
      { q: 'Will Casper film work on all types of screens?', a: 'Casper is optimized for LED and OLED displays. It does not block projectors or traditional fluorescent-backlit displays. Modern LED monitors and TVs are fully compatible.' },
      { q: 'How much does Casper cloaking film cost?', a: 'Casper film installs at a premium price point — typically $20–$35 per square foot installed, depending on glass size and accessibility. Contact us for a site-specific quote.' },
      { q: 'Is Casper film available for residential use?', a: 'Yes — home offices with sensitive screens, home theaters, or any residential glass application can use Casper film.' },
    ],
    keywords: 'casper cloaking film arizona, casper film phoenix, privacy film conference room, screen privacy film scottsdale, designtex casper film installer',
  },

  'gradient-films': {
    h1Suffix: 'Gradient Window Film',
    metaTitle: (name) => `${name} | Gradient Window Film Arizona | Arizona House of Film`,
    metaDesc: (name) => `${name} — gradient and ombré window films for modern offices, storefronts, and homes. Smooth fade patterns installed in Phoenix & Scottsdale. ROC #314088.`,
    intro: `Gradient window films create a smooth visual fade from opaque to clear — the architectural equivalent of an ombré effect on glass. Popular in modern commercial offices, hotel lobbies, retail storefronts, and residential spaces where you want privacy at eye level with an open view above. Arizona House of Film installs gradient films across Phoenix, Scottsdale, Chandler, and all of Arizona.`,
    useCases: [
      { title: 'Office Glass Partitions', desc: 'Lower half opaque for seated privacy, upper half clear for openness and light.' },
      { title: 'Hotel Lobbies & Reception', desc: 'Architectural statement pieces that define zones without walls.' },
      { title: 'Retail Storefronts', desc: 'Brand your glass — gradient from logo zone to clear product display area.' },
      { title: 'Residential Patio Doors', desc: 'Ground-level privacy with sky view preserved on large sliding glass doors.' },
      { title: 'Conference Room Glass', desc: 'Semi-private lower section with full visibility upper section for natural light.' },
      { title: 'Staircase & Railing Glass', desc: 'Elegant gradient on glass balustrades — safety visibility with style.' },
    ],
    benefits: [
      'Smooth optical fade — no visible transition line on quality films',
      'Custom orientation — fade from bottom-up, top-down, or side-to-side',
      'Maintains maximum natural light in the clear zone',
      'Architectural-grade appearance — not a budget fix',
      'Available in frosted, colored, and mirror gradient variants',
      'Works on standard, tempered, and laminated glass',
    ],
    faqs: [
      { q: 'Can gradient film be custom-sized to my glass dimensions?', a: 'Yes. Gradient films are cut to exact glass dimensions. The fade position and gradient length are selected based on your glass height and privacy needs.' },
      { q: 'Is the gradient visible from outside?', a: 'The fade effect is visible from both sides. Most clients prefer the fade to face inward for the cleanest exterior appearance.' },
      { q: 'How long does gradient window film last?', a: 'Interior-mounted gradient films last 10–15 years in Arizona conditions. We use Solyx films with UV-stable dye systems that resist color shift.' },
      { q: 'What is the cost of gradient window film installation in Phoenix?', a: 'Gradient films typically run $10–$20 per square foot installed. Custom-sized cuts may have a minimum charge. Call (480) 788-1591 for a quote.' },
    ],
    keywords: 'gradient window film phoenix, ombre window film arizona, fade window film scottsdale, decorative gradient film installation arizona',
  },

  'stained-glass-films': {
    h1Suffix: 'Stained Glass Window Film',
    metaTitle: (name) => `${name} | Stained Glass Window Film Arizona | Arizona House of Film`,
    metaDesc: (name) => `${name} — decorative stained glass window films for homes, churches, and offices. Stunning color effects without costly glass replacement. Phoenix & Scottsdale. ROC #314088.`,
    intro: `Stained glass window film recreates the visual richness of traditional leaded stained glass at a fraction of the cost — no glass replacement, no structural modification, no permits. Arizona House of Film installs cathedral, mosaic, jewel, and artistic stained glass films for residential homes, churches, restaurants, hotels, and commercial properties across Phoenix and Scottsdale. The effect is stunning: deep color saturation, light diffusion, and architectural character.`,
    useCases: [
      { title: 'Residential Entryways', desc: 'Transform plain sidelights and door glass into architectural statements.' },
      { title: 'Churches & Places of Worship', desc: 'Restore or augment stained glass aesthetics without the $50,000+ glass replacement cost.' },
      { title: 'Restaurants & Hospitality', desc: 'Create atmosphere and visual identity with colorful decorative glass throughout.' },
      { title: 'Bathrooms & Powder Rooms', desc: 'Stained glass privacy film gives character while blocking sightlines.' },
      { title: 'Office Reception Areas', desc: 'Brand your space with custom color schemes on lobby and reception glass.' },
      { title: 'Historic Properties', desc: 'Match original stained glass aesthetics without disturbing historic glass.' },
    ],
    benefits: [
      'Replicates traditional leaded stained glass at 5–10% of the cost',
      'Full UV blocking — protects interiors while adding color',
      'Available in cathedral, mosaic, bevel, jewel, and artistic patterns',
      'Removable — change designs without glass replacement',
      'Works on any smooth glass surface',
      'Custom color matching available for specific design requirements',
    ],
    faqs: [
      { q: 'Does stained glass window film look realistic?', a: 'Premium Solyx stained glass films closely replicate traditional glass with deep color saturation and authentic lead line aesthetics. The effect is convincing from both inside and outside.' },
      { q: 'Can stained glass film be used on exterior glass?', a: 'Most stained glass films are interior-mount only. Exterior-rated versions are available but limited in pattern selection. We recommend interior application for maximum durability.' },
      { q: 'Will stained glass film block my view?', a: 'Yes — stained glass films are decorative privacy films. They block direct sightlines. If you need partial privacy with view, consider gradient or light-filtering films instead.' },
      { q: 'How much does stained glass window film cost in Arizona?', a: 'Stained glass film installation runs $12–$22 per square foot depending on pattern complexity and glass size. Contact Arizona House of Film at (480) 788-1591 for a custom quote.' },
    ],
    keywords: 'stained glass window film phoenix, decorative stained glass film arizona, church window film scottsdale, colored glass film installation arizona',
  },

  'colored-films': {
    h1Suffix: 'Colored Window Film',
    metaTitle: (name) => `${name} | Colored Window Film Arizona | Arizona House of Film`,
    metaDesc: (name) => `${name} — transparent and translucent colored window films in amber, cobalt, bronze, and more. Decorative and solar control. Phoenix & Scottsdale installer. ROC #314088.`,
    intro: `Colored window films combine solar control with architectural color — creating tinted glass effects without permanent glass modification. Arizona House of Film installs translucent and transparent colored films for commercial storefronts, residential accent glass, office interiors, and architectural applications. Available in amber, cobalt, bronze, wine, emerald, and specialty dichroic finishes.`,
    useCases: [
      { title: 'Commercial Storefronts', desc: 'Brand-color glass facades that also reduce interior heat gain.' },
      { title: 'Residential Accent Windows', desc: 'Color pop on sidelights, transoms, and decorative windows.' },
      { title: 'Office Interiors', desc: 'Colored glass partition walls that define zones with visual energy.' },
      { title: 'Hospitality & Restaurants', desc: 'Warm amber or wine tones create atmosphere without expensive glass.' },
      { title: 'Architectural Highlights', desc: 'Dichroic films shift color with viewing angle — spectacular on lobby glass.' },
      { title: 'Solar & Privacy Combined', desc: 'Darker translucent films provide both color and heat reduction.' },
    ],
    benefits: [
      'Solar heat reduction without losing the colored light effect',
      '99% UV blocking on all colored film options',
      'Dichroic films create dynamic color-shift effects',
      'Translucent options allow soft colored light diffusion',
      'Transparent options maintain view with color overlay',
      'Available in 30+ color options through Solyx collection',
    ],
    faqs: [
      { q: 'Will colored window film fade over time in Arizona sun?', a: 'Quality Solyx colored films use UV-stable dye systems engineered for high-UV climates. Expect minimal color shift over a 10-year period on interior applications.' },
      { q: 'Can I mix colored films with clear film on the same window?', a: 'Yes — zone application is a common technique. Colored film on lower sections, clear on upper sections, with or without a gradient transition.' },
      { q: 'Does colored film affect the amount of light coming in?', a: 'Translucent colored films reduce light transmission by 30–70% depending on color density. Transparent colored films maintain higher light levels with a color overlay.' },
      { q: 'How much does colored window film cost in Phoenix?', a: 'Colored film installation typically runs $9–$18 per square foot. Specialty dichroic films are priced higher. Call (480) 788-1591 for a site-specific quote.' },
    ],
    keywords: 'colored window film phoenix, tinted decorative film arizona, amber window film scottsdale, translucent colored glass film arizona',
  },

  'patterned-privacy-films': {
    h1Suffix: 'Patterned Privacy Window Film',
    metaTitle: (name) => `${name} | Patterned Privacy Film Phoenix | Arizona House of Film`,
    metaDesc: (name) => `${name} — geometric, woven, and fabric-pattern privacy window films for Arizona homes and offices. Style + privacy without blinds. ROC #314088. Free quote.`,
    intro: `Patterned privacy films combine functional privacy with decorative design — geometric patterns, woven fabric textures, rice paper effects, linen, and stripe patterns that obscure sightlines while maintaining diffused natural light. Unlike solid frosted films, patterned films add visual texture and architectural character to glass. Arizona House of Film installs patterned privacy films for residential and commercial clients across Phoenix, Scottsdale, Chandler, and Mesa.`,
    useCases: [
      { title: 'Office Glass Partitions', desc: 'Woven and geometric patterns that define private zones with design intent.' },
      { title: 'Residential Privacy Glass', desc: 'Bathroom, bedroom, and entryway glass with pattern-based privacy.' },
      { title: 'Retail & Hospitality', desc: 'Branded pattern work on storefront and interior glass.' },
      { title: 'Conference & Meeting Rooms', desc: 'Pattern privacy at eye level while maintaining openness above.' },
      { title: 'Interior Doors & Sidelights', desc: 'Fabric and linen textures on interior glass doors for soft privacy.' },
      { title: 'Spa & Wellness Centers', desc: 'Rice paper and washi-style films for tranquil, natural aesthetics.' },
    ],
    benefits: [
      'Privacy without total opacity — patterned light diffusion',
      'Design-forward patterns: geometric, woven, linen, rice paper, stripe',
      'Full UV protection on all patterned film options',
      'No blinds or curtains required — clean glass aesthetic',
      'Works on standard, tempered, and laminated glass',
      'Removable without glass damage',
    ],
    faqs: [
      { q: 'How much privacy do patterned films provide?', a: 'Pattern density determines privacy level. Open geometric patterns (like grid or stripe) provide partial privacy — reduced sightlines but not complete opacity. Dense fabric patterns like linen or rice paper approach full privacy while allowing light diffusion.' },
      { q: 'Can patterned film be cut to custom shapes?', a: 'Yes — all film is cut to your exact glass dimensions. Standard rectangular cuts are priced normally; complex shapes or arched windows may have a custom cut surcharge.' },
      { q: 'Do patterned films work in high-traffic areas?', a: 'Interior-mount patterned films have a scratch-resistant hard coat. They are suitable for high-traffic door glass and frequently touched surfaces.' },
      { q: 'What is the cost of patterned privacy film in Arizona?', a: 'Patterned privacy films run $9–$16 per square foot installed. Contact Arizona House of Film at (480) 788-1591 for a custom quote.' },
    ],
    keywords: 'patterned privacy window film phoenix, decorative privacy film arizona, geometric window film scottsdale, fabric pattern glass film arizona',
  },

  'reflective-films': {
    h1Suffix: 'Reflective & Mirror Window Film',
    metaTitle: (name) => `${name} | Reflective Window Film Phoenix | Arizona House of Film`,
    metaDesc: (name) => `${name} — one-way mirror and reflective window films for daytime privacy and solar control. Installed in Phoenix & Scottsdale AZ. ROC #314088. Free quote.`,
    intro: `Reflective and mirror window films provide one-way daytime privacy — you see out, they can't see in. In Arizona's intense sun, reflective films are also highly effective solar control products, rejecting 50–80% of solar heat gain. Arizona House of Film installs silver, bronze, gold, and chrome reflective films for residential homes and commercial buildings across Phoenix, Scottsdale, Tempe, and Chandler.`,
    useCases: [
      { title: 'Residential Street-Facing Windows', desc: 'Daytime privacy on front-facing windows — no blinds, full view from inside.' },
      { title: 'Commercial Office Buildings', desc: 'Reduce solar heat gain by up to 80% while creating a professional exterior.' },
      { title: 'Retail Storefronts', desc: 'Mirror finish on storefront glass — solar control plus visual impact.' },
      { title: 'Apartments & Condos', desc: 'Privacy for ground-floor and street-level units in dense urban environments.' },
      { title: 'West & South-Facing Glass', desc: 'Maximum heat rejection on the most solar-exposed elevations.' },
      { title: 'Glass Balconies & Railings', desc: 'Privacy and solar control for balcony enclosures and patio glass.' },
    ],
    benefits: [
      'One-way daytime privacy — see out, no one sees in',
      'Rejects up to 80% of solar heat gain',
      'Reduces glare on screens and work surfaces',
      '99% UV blocking — protects interiors from sun damage',
      'Available in silver, bronze, gold, pewter, and chrome finishes',
      'Reduces cooling costs — measurable energy savings in Arizona heat',
    ],
    faqs: [
      { q: 'Does one-way mirror film work at night?', a: 'No. One-way mirror effect requires more light on the reflective side than inside. At night when interior lights are on, the effect reverses — people can see in. For night privacy, combine with interior shades or choose a frosted film.' },
      { q: 'How much heat does reflective film reject in Arizona?', a: 'Quality reflective films reject 50–80% of solar heat gain. In Phoenix summers, this can reduce cooling costs by 20–30% on heavily glazed elevations. We can provide energy savings estimates for your specific glass.' },
      { q: 'Will reflective film make my house look commercial?', a: 'Residential-grade reflective films (bronze, pewter, light silver) have a subtle finish that reads as tinted glass rather than commercial mirror. We help you select the right film for your aesthetic.' },
      { q: 'What does reflective window film cost in Phoenix?', a: 'Reflective film installation runs $8–$15 per square foot depending on film spec and glass size. Call (480) 788-1591 for a free site assessment and quote.' },
    ],
    keywords: 'reflective window film phoenix, one way mirror film arizona, mirror window film scottsdale, solar reflective film installation arizona',
  },

  'specialty-films': {
    h1Suffix: 'Specialty Window Film',
    metaTitle: (name) => `${name} | Specialty Window Film Arizona | Arizona House of Film`,
    metaDesc: (name) => `${name} — specialty window films including smart, switchable, squid, and unique film technologies. Arizona House of Film — licensed installer ROC #314088.`,
    intro: `Specialty window films represent the cutting edge of architectural glass technology — smart switchable films, Squid textile films, and unique optical technologies that go beyond standard privacy and solar control. Arizona House of Film installs specialty films for high-end residential, commercial, and architectural applications across Phoenix and Scottsdale.`,
    useCases: [
      { title: 'Smart Office Glass', desc: 'Switchable privacy that goes from clear to opaque on demand.' },
      { title: 'Luxury Residential', desc: 'High-tech privacy and light control for custom home builds and remodels.' },
      { title: 'Hospitality & Hotels', desc: 'Switchable bathroom and bedroom privacy glass — premium guest experience.' },
      { title: 'Automotive & Marine', desc: 'Specialty films for vehicle and boat glass applications.' },
      { title: 'Architectural Installations', desc: 'Unique optical films for award-winning commercial and residential design.' },
      { title: 'Healthcare Facilities', desc: 'Instant privacy glass for examination rooms and patient spaces.' },
    ],
    benefits: [
      'Switchable technology — clear to opaque at the touch of a button',
      'Squid textile films: unique fabric-substrate window covering',
      'Advanced optical properties not available in standard films',
      'Custom specification available for project-specific requirements',
      'Professional installation required — Arizona House of Film certified',
      'Manufacturer warranty on all specialty film installations',
    ],
    faqs: [
      { q: 'What is Squid window film?', a: 'Squid is a textile-substrate window film from Solyx — a woven fabric bonded to an optical adhesive layer. It creates a soft, fabric-like appearance on glass with privacy and light diffusion properties.' },
      { q: 'How does switchable smart film work?', a: 'Smart film contains a PDLC (Polymer Dispersed Liquid Crystal) layer. In the off state, crystals are randomly oriented and the film appears opaque. Apply voltage and crystals align — the film turns clear instantly.' },
      { q: 'Is specialty film more expensive than standard film?', a: 'Yes. Specialty films carry a premium price — typically $25–$80+ per square foot depending on technology. Contact us for project-specific pricing at (480) 788-1591.' },
    ],
    keywords: 'specialty window film phoenix, smart window film arizona, squid film installer scottsdale, switchable privacy film arizona',
  },

  'decorative': {
    h1Suffix: 'Decorative Window Film',
    metaTitle: (name) => `${name} | Decorative Window Film Phoenix | Arizona House of Film`,
    metaDesc: (name) => `${name} — decorative window film for Arizona homes and businesses. Privacy, style, and UV protection in one installation. Phoenix & Scottsdale. ROC #314088.`,
    intro: `Decorative window films transform plain glass into architectural features — adding privacy, character, and UV protection without glass replacement. Arizona House of Film installs decorative films across Phoenix, Scottsdale, Chandler, Mesa, and all of Arizona. From subtle frosted patterns to bold architectural statements, our Solyx film catalog includes 600+ options for residential and commercial glass.`,
    useCases: [
      { title: 'Residential Privacy Glass', desc: 'Bathroom, bedroom, and entryway glass privacy without losing light.' },
      { title: 'Commercial Office Glass', desc: 'Conference rooms, reception areas, and glass partition walls.' },
      { title: 'Retail Storefronts', desc: 'Brand your glass — decorative film as visual marketing.' },
      { title: 'Restaurants & Hospitality', desc: 'Ambiance-creating decorative glass throughout your space.' },
      { title: 'Healthcare & Medical', desc: 'HIPAA visual privacy plus professional aesthetics.' },
      { title: 'Schools & Educational', desc: 'Classroom privacy and safety combined with design.' },
    ],
    benefits: [
      '99% UV protection — blocks damaging solar radiation',
      'Privacy without loss of natural light',
      'No glass replacement required — installs on existing glass',
      '600+ pattern and style options in the Solyx collection',
      'Fully removable without glass damage',
      'Licensed installer — ROC #314088',
    ],
    faqs: [
      { q: 'What is decorative window film?', a: 'Decorative window film is an adhesive optical film applied to existing glass to add privacy, pattern, color, or texture. It installs without glass replacement and is removable.' },
      { q: 'How long does decorative window film last?', a: 'Interior decorative films last 10–15 years under normal conditions. Arizona\'s UV intensity can accelerate wear on low-grade films — we use only commercial-grade Solyx films rated for Arizona conditions.' },
      { q: 'Can decorative film be applied to double-pane windows?', a: 'Yes, with precautions. Interior-mount decorative films are safe on double-pane insulated glass. Avoid dark exterior films on double-pane as heat buildup can void the IGU seal warranty.' },
      { q: 'What does decorative window film installation cost in Arizona?', a: 'Decorative film installation in Phoenix and Scottsdale ranges from $8–$22 per square foot depending on film type, glass size, and accessibility. All projects are custom-quoted. Call (480) 788-1591.' },
    ],
    keywords: 'decorative window film phoenix, privacy window film arizona, decorative glass film scottsdale, window film installation arizona',
  },
};

// Fallback content
const DEFAULT_CONTENT = CATEGORY_CONTENT['decorative'];

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const categoryMap = {
  'frosted-etched-films': 'frosted-etched',
  'casper-films': 'casper-designtex',
  'stained-glass-films': 'stained-glass',
  'gradient-films': 'gradient',
  'colored-films': 'colored-films',
  'patterned-privacy-films': 'patterned-privacy',
  'reflective-films': 'reflective-mirror',
  'specialty-films': 'specialty',
  'elegant-textured-films': 'frosted-etched',
  'exterior-films': 'decorative',
  'glasslike-distortion-films': 'decorative',
  'smart-spy-films': 'specialty',
  'squid-window-textile': 'decorative',
  'decorative-films': 'decorative',
};

export default function FilmProductPage() {
  const { categorySlug, productSlug } = useParams();

  // Resolve film — try allFilms first, then solyxFilms
  const { film, solyxFilm } = useMemo(() => {
    // Try legacy allFilms
    const legacyFilm = allFilms.find(
      p => p.slug === productSlug && p.categorySlug === categorySlug
    );
    if (legacyFilm) return { film: legacyFilm, solyxFilm: null };

    // Try solyxFilms by SKU slug
    const solyx = solyxProducts.find(p => toSlug(p.sku) === productSlug || toSlug(p.name) === productSlug);
    if (solyx) return { film: null, solyxFilm: solyx };

    return { film: null, solyxFilm: null };
  }, [categorySlug, productSlug]);

  const content = CATEGORY_CONTENT[categorySlug] || DEFAULT_CONTENT;

  // Get related Solyx products for this category
  const solyxCat = categoryMap[categorySlug] || 'decorative';
  const relatedProducts = useMemo(() =>
    solyxProducts.filter(p => p.category === solyxCat).slice(0, 12),
    [solyxCat]
  );

  // Display data
  const displayName = solyxFilm?.name || film?.name || 'Decorative Window Film';
  const displaySku = solyxFilm?.sku || film?.variants?.[0]?.sku || '';
  const displayImg = solyxFilm?.img || null;

  // 404
  if (!film && !solyxFilm) {
    return <NotFound />;
  }

  const pageTitle = content.metaTitle(displayName);
  const pageDesc = content.metaDesc(displayName);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": displayName,
    "description": pageDesc,
    "brand": { "@type": "Brand", "name": "Solyx" },
    "offers": {
      "@type": "Offer",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Arizona House of Film",
        "telephone": "+14807881591",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "7007 W Flower St",
          "addressLocality": "Phoenix",
          "addressRegion": "AZ",
          "postalCode": "85033"
        }
      },
      "areaServed": "Phoenix, Scottsdale, Chandler, Mesa, Tempe, Arizona",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "description": "Custom quoted per project"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={content.keywords} />
        <link rel="canonical" href={`https://arizonahouseoffilm.com/films/${categorySlug}/${productSlug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/films" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Film Catalog
          </Link>
          <span>/</span>
          <Link to={`/films/${categorySlug}`} className="text-gray-600 capitalize hover:text-blue-600 transition-colors">
            {categorySlug?.replace(/-/g, ' ')}
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{displayName}</span>
        </nav>

        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-square">
            {displayImg ? (
              <img
                src={displayImg}
                alt={`${displayName} — ${content.h1Suffix} | Arizona House of Film`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                <span className="text-4xl">🪟</span>
              </div>
            )}
          </div>

          {/* Right: Core info */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-green-700 text-xs font-semibold mb-3 w-fit">
              AUTHORIZED SOLYX INSTALLER · ROC #314088
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-1">{displayName}</h1>
            {displaySku && <p className="text-sm text-gray-400 font-mono mb-3">{displaySku}</p>}
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{content.intro.substring(0, 200)}...</p>

            {/* Install CTA */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-1">We install this film.</p>
              <p className="text-sm text-gray-500 mb-4">Arizona House of Film — authorized Solyx installer serving Phoenix, Scottsdale, and all Arizona.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg text-center transition-colors">
                  Get Installation Quote
                </Link>
                <a href="tel:4807881591" className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" /> (480) 788-1591
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Intro copy — full paragraph */}
        <section className="mb-12">
          <p className="text-gray-600 leading-relaxed text-base">{content.intro}</p>
        </section>

        {/* Use Cases grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Where Arizona Clients Use {content.h1Suffix}
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {content.useCases.map((uc, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{uc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">
            Why Choose {content.h1Suffix} for Your Arizona Property
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related products in this category */}
        {relatedProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {content.h1Suffix} — Available Patterns & Styles
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              {relatedProducts.length} films available in this category — we install all of them.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {relatedProducts.map(p => (
                <Link
                  key={p.sku}
                  to={`/films/${categorySlug}/${toSlug(p.sku)}`}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={p.img}
                      alt={`${p.name} — ${content.h1Suffix}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                    <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/films" className="text-sm text-blue-600 hover:underline">
                View all 618 films in catalog →
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions — {content.h1Suffix} in Arizona
          </h2>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local service area */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <h2 className="text-lg font-bold text-gray-800">
              {content.h1Suffix} Installation — Phoenix Metro & All Arizona
            </h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Arizona House of Film installs {content.h1Suffix.toLowerCase()} for residential and commercial
            properties across the Phoenix metro area and all of Arizona. Service areas include Phoenix,
            Scottsdale, Chandler, Mesa, Tempe, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale,
            and surrounding communities. Licensed ROC #314088. Bonded and insured.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear'].map(city => (
              <span key={city} className="bg-white border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Install {displayName}?</h2>
          <p className="text-gray-300 text-sm mb-6">
            Arizona House of Film — licensed, bonded, ROC #314088. Serving Phoenix, Scottsdale, and all Arizona since 2017. 713+ projects completed.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg text-base transition-colors">
              Request Free Quote
            </Link>
            <a href="tel:4807881591" className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-4 rounded-lg hover:border-white/40 transition-colors">
              <Phone className="w-4 h-4" /> (480) 788-1591
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
