import React, { useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import EstimatorCTA from '@/components/EstimatorCTA';
import { solyxCategories, solyxProducts } from '../data/solyxFilms';

const CATEGORY_LABELS = {
  'casper-designtex': 'Casper Cloaking',
  'frosted-etched': 'Frosted & Etched',
  'stained-glass': 'Stained Glass',
  'gradient': 'Gradient',
  'colored-films': 'Colored Films',
  'patterned-privacy': 'Patterned Privacy',
  'reflective-mirror': 'Reflective & Mirror',
  'decorative': 'Decorative',
};

const ROLL_WIDTHS = ['48"', '60"', '72"'];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com/" },
    { "@type": "ListItem", "position": 2, "name": "Film Store", "item": "https://arizonahouseoffilm.com/store" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you ship window film nationwide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Arizona House of Film ships Solyx window film nationwide. Most orders ship within 3-5 business days after payment confirmation. We also offer professional installation throughout the Phoenix metro area. Licensed ROC #314088."
      }
    },
    {
      "@type": "Question",
      "name": "What roll widths are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solyx window film is available in 48\" (4 ft), 60\" (5 ft), and 72\" (6 ft) roll widths. Roll length is standard 100 feet unless otherwise specified. Contact us for custom lengths."
      }
    },
    {
      "@type": "Question",
      "name": "How do I order window film?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Select your films from our catalog, choose roll width and quantity, fill in your shipping information, and submit. We confirm pricing and availability within 24 hours and send an invoice through our billing system."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order film and have it professionally installed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer both film supply only and professional installation throughout Phoenix, Scottsdale, and the Arizona metro. Select your preference when ordering."
      }
    }
  ]
};

function ProductCard({ product, onAdd }) {
  const [width, setWidth] = useState('60"');
  const [qty, setQty] = useState(1);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        {!imgError ? (
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No image</div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-tight">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{product.sku}</p>
        <div className="mt-3 flex items-center gap-2">
          <Label className="text-xs text-gray-600 shrink-0">Width:</Label>
          <div className="flex gap-1">
            {ROLL_WIDTHS.map(w => (
              <button
                key={w}
                type="button"
                onClick={() => setWidth(w)}
                className={`px-2 py-1 text-xs rounded border transition-colors ${
                  width === w
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Label className="text-xs text-gray-600 shrink-0">Qty:</Label>
          <div className="flex items-center border border-gray-300 rounded">
            <button type="button" onClick={() => setQty(q => Math.max(1, q - 1))} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">{qty}</span>
            <button type="button" onClick={() => setQty(q => q + 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
        <Button
          type="button"
          onClick={() => onAdd({ ...product, width, qty })}
          className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold"
        >
          <ShoppingCart className="w-4 h-4 mr-1" /> Add to Order
        </Button>
      </div>
    </div>
  );
}

const Store = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: '', phone: '', email: '', company: '',
    street: '', city: '', state: '', zip: '',
    serviceType: 'installation',
    notes: '',
  });

  const filteredProducts = useMemo(() => {
    let items = solyxProducts;
    if (activeCategory !== 'all') {
      items = items.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p =>
        p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const addToOrder = useCallback((item) => {
    setOrderItems(prev => {
      const key = `${item.sku}-${item.width}`;
      const existing = prev.find(i => `${i.sku}-${i.width}` === key);
      if (existing) {
        return prev.map(i =>
          `${i.sku}-${i.width}` === key ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });
    toast({
      title: `${item.name} added`,
      description: `${item.width} × ${item.qty}`,
      className: 'bg-green-600 border-none text-white font-bold rounded-none',
    });
  }, [toast]);

  const removeItem = useCallback((index) => {
    setOrderItems(prev => prev.filter((_, i) => i !== index));
  }, []);

  const updateField = useCallback((field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (orderItems.length === 0 && !form.notes.trim()) {
      toast({ variant: 'destructive', title: 'No films selected', description: 'Add at least one film to your order or include a note.', className: 'rounded-none font-bold' });
      return;
    }
    if (!form.name || !form.phone || !form.email || !form.street || !form.city || !form.state || !form.zip) {
      toast({ variant: 'destructive', title: 'Missing information', description: 'Please fill in all required fields.', className: 'rounded-none font-bold' });
      return;
    }

    setSubmitting(true);
    const filmsFormatted = orderItems.map(i => `${i.name} (${i.sku}) — ${i.width} × ${i.qty}`).join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          address: `${form.street}, ${form.city}, ${form.state} ${form.zip}`,
          propertyType: form.serviceType === 'installation' ? 'Professional Installation' : 'Film Supply Only',
          films: filmsFormatted,
          message: form.notes,
          source: 'film-store-order',
          estimateRange: 'Film order — see details',
        }),
      });

      if (!response.ok) throw new Error('Request failed');

      toast({
        title: 'Order received',
        description: "We'll confirm pricing and availability within 24 hours. Questions: (480) 788-1591",
        className: 'bg-green-600 border-none text-white font-bold rounded-none',
      });
      setOrderItems([]);
      setForm({ name: '', phone: '', email: '', company: '', street: '', city: '', state: '', zip: '', serviceType: 'installation', notes: '' });
    } catch {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Call (480) 788-1591 directly.',
        className: 'rounded-none font-bold',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Buy Window Film | Solyx Film Catalog | Arizona House of Film</title>
        <meta name="description" content="Order Solyx window film direct. 618+ SKUs — decorative, frosted, privacy, cloaking, reflective, patterned. Roll widths 48&quot;/60&quot;/72&quot;. Ships nationwide. ROC #314088." />
        <meta property="og:title" content="Buy Window Film | Solyx Film Catalog | Arizona House of Film" />
        <meta property="og:description" content="Order Solyx window film direct. 618+ SKUs. Decorative, frosted, privacy, cloaking, reflective, patterned. Ships nationwide." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/store" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/store" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy Window Film | Solyx Film Catalog | Arizona House of Film" />
        <meta name="twitter:description" content="Order Solyx window film direct. 618+ SKUs. Ships nationwide. ROC #314088." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gray-100 text-gray-800 min-h-screen">
        {/* SECTION 1 — Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 text-white py-14 md:py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Window Film Catalog — Order Direct
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-300">
              618+ Solyx film SKUs available for purchase and professional installation. Select your film, roll width, and quantity — we'll send a confirmed quote within 24 hours.
            </p>
          </div>
        </motion.section>

        {/* SECTION 2 — Category filter bar */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                }`}
              >
                All ({solyxProducts.length})
              </button>
              {solyxCategories.map(cat => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    activeCategory === cat.slug
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-400'
                  }`}
                >
                  {CATEGORY_LABELS[cat.slug] || cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8">
          {/* SECTION 3 — Search + Product grid */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search films by name or SKU..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-3 text-base bg-white"
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <p className="text-sm text-gray-500 mb-4">{filteredProducts.length} films shown</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.sku} product={product} onAdd={addToOrder} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <p className="text-lg font-semibold">No films match your search.</p>
              <button type="button" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="mt-2 text-green-600 underline">
                Clear filters
              </button>
            </div>
          )}

          {/* SECTION 4 — Order summary */}
          {orderItems.length > 0 && (
            <section className="mt-12 bg-white rounded-lg border border-green-200 p-6" id="order-summary">
              <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-green-600" />
                Your Order ({orderItems.length} {orderItems.length === 1 ? 'item' : 'items'})
              </h2>
              <div className="divide-y divide-gray-100">
                {orderItems.map((item, i) => (
                  <div key={`${item.sku}-${item.width}-${i}`} className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.sku} · {item.width} · Qty {item.qty}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(i)} className="text-red-500 hover:text-red-700 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EstimatorCTA */}
          <EstimatorCTA />

          {/* SECTION 5 & 6 — Contact form + Submit */}
          <section className="mt-8 bg-white rounded-lg border border-gray-200 p-6 md:p-8" id="order-form">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">Shipping & Contact Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Name *</Label>
                  <Input id="name" required value={form.name} onChange={e => updateField('name', e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">Phone *</Label>
                  <Input id="phone" type="tel" required value={form.phone} onChange={e => updateField('phone', e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email *</Label>
                  <Input id="email" type="email" required value={form.email} onChange={e => updateField('email', e.target.value)} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-700">Company</Label>
                  <Input id="company" value={form.company} onChange={e => updateField('company', e.target.value)} className="mt-1" />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">Shipping Address *</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="street" className="text-gray-700">Street</Label>
                    <Input id="street" required value={form.street} onChange={e => updateField('street', e.target.value)} className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2 md:col-span-1">
                      <Label htmlFor="city" className="text-gray-700">City</Label>
                      <Input id="city" required value={form.city} onChange={e => updateField('city', e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-gray-700">State</Label>
                      <Input id="state" required value={form.state} onChange={e => updateField('state', e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-gray-700">Zip</Label>
                      <Input id="zip" required value={form.zip} onChange={e => updateField('zip', e.target.value)} className="mt-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-gray-700 font-bold">Is this for installation or film only? *</Label>
                <RadioGroup value={form.serviceType} onValueChange={v => updateField('serviceType', v)} className="mt-2 flex gap-6">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="installation" id="rt-install" />
                    <Label htmlFor="rt-install" className="cursor-pointer">Professional Installation</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="supply" id="rt-supply" />
                    <Label htmlFor="rt-supply" className="cursor-pointer">Film Supply Only</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="notes" className="text-gray-700">Notes (optional)</Label>
                <Textarea id="notes" value={form.notes} onChange={e => updateField('notes', e.target.value)} rows={3} className="mt-1" placeholder="Custom lengths, special instructions, questions..." />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg px-10 py-6"
              >
                {submitting ? 'Submitting...' : 'Submit Purchase Order →'}
              </Button>
              <p className="text-xs text-gray-500 mt-2">
                We confirm pricing and availability within 24 hours. Questions? Call <a href="tel:4807881591" className="text-green-600 font-bold">(480) 788-1591</a>.
              </p>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default Store;
