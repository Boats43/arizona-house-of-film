import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Info, Edit } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { filmCategories } from '@/data/films';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// ✅ Flatten and map all film variants into a single list
const allFilmVariants = filmCategories
  .flatMap(category =>
    category.products.flatMap(product =>
      product.variants.map(variant => ({
        ...variant,
        parentName: product.name,
        parentSlug: product.slug,
        categoryName: category.name,
        categorySlug: category.slug,
        embedUrl: product.embedUrl
      }))
    )
  )
  .filter(variant => variant.sku);

const ProductCard = ({ variant, index }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editableVariant, setEditableVariant] = useState(variant);
  const [editableImage, setEditableImage] = useState(
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/untitled-design-4-8cGHF.png'
  );

  const handleRequestInfo = e => {
    e.preventDefault();
    e.stopPropagation();
    navigate(
      `/contact?film=${encodeURIComponent(editableVariant.name)}&sku=${encodeURIComponent(editableVariant.sku)}`
    );
    toast({
      title: 'Redirecting to Contact Page',
      description: `Requesting a quote for ${editableVariant.name}.`
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: 'Changes Saved!',
      description: `Content for ${editableVariant.name} has been updated.`
    });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setEditableImage(URL.createObjectURL(file));
    }
  };

  const productUrl = `/films/${editableVariant.categorySlug}/${editableVariant.parentSlug}`;

  // ✅ JSON-LD Product Schema
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: `${editableVariant.name} - Decorative Privacy Film`,
    description:
      'UV-blocking film perfect for privacy and energy savings in Arizona homes and businesses. A top choice for residential UV blocking film and commercial window tinting.',
    sku: editableVariant.sku,
    image: `https://arizonahouseoffilm.com/images/films/${editableVariant.sku.toLowerCase()}.webp`,
    brand: { '@type': 'Brand', name: editableVariant.brand },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0.00',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: 'https://arizonahouseoffilm.com/contact'
    },
    aggregateRating: {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1291"
    },
    review: {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Customer"
      }
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0.00",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "name": "United States"
      }
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/NoReturns"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="h-full"
      >
        <div className="relative rounded-lg border bg-card text-card-foreground shadow-sm bg-white border-gray-200 overflow-hidden group transition-all duration-300 h-full flex flex-col">
          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute top-2 left-2 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Edit Product"
          >
            <Edit size={16} />
          </button>

          {/* Image Upload when editing */}
          {isEditing && (
            <div className="absolute top-12 left-2 z-20 bg-white p-2 rounded shadow-lg">
              <label
                htmlFor={`image-upload-${index}`}
                className="cursor-pointer text-sm text-blue-600 hover:underline"
              >
                Change Image
              </label>
              <input
                id={`image-upload-${index}`}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          )}

          {/* Image */}
          <Link to={productUrl} className="block">
            <div className="relative">
              <img
                className="w-full h-64 object-cover transition-transform duration-300"
                alt={`${editableVariant.name} decorative privacy film for Arizona homes`}
                src={editableImage}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              {/* Brand Tag */}
              <div className="absolute top-3 right-3 bg-blue-500/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {isEditing ? (
                  <Input
                    value={editableVariant.brand}
                    onChange={e =>
                      setEditableVariant({ ...editableVariant, brand: e.target.value })
                    }
                    className="h-6 text-xs bg-white/20"
                  />
                ) : (
                  editableVariant.brand
                )}
              </div>
            </div>
          </Link>

          {/* Product Content */}
          <div className="p-4 flex flex-col flex-grow">
            {isEditing ? (
              <div className="space-y-2">
                <Input
                  value={editableVariant.name}
                  onChange={e =>
                    setEditableVariant({ ...editableVariant, name: e.target.value })
                  }
                  className="text-lg font-bold h-auto"
                />
                <Textarea
                  value={`Part of the ${editableVariant.parentName} collection.`}
                  onChange={e => {
                    const newParentName = e.target.value
                      .replace('Part of the ', '')
                      .replace(' collection.', '');
                    setEditableVariant({ ...editableVariant, parentName: newParentName });
                  }}
                  className="text-sm h-16"
                />
              </div>
            ) : (
              <Link to={productUrl} className="block">
                <h3 className="text-lg font-bold text-gray-800">
                  {editableVariant.name}
                </h3>
                <p className="text-sm text-gray-500 h-10 overflow-hidden">
                  {`Part of the ${editableVariant.parentName} collection.`}
                </p>
              </Link>
            )}

            {/* CTA Button */}
            <div className="mt-auto pt-4">
              {isEditing ? (
                <Button
                  onClick={handleSave}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                >
                  Save Changes
                </Button>
              ) : (
                <Button
                  onClick={handleRequestInfo}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold"
                >
                  <Info className="mr-2 h-4 w-4" /> Request Info
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ProductsList = () => {
  if (allFilmVariants.length === 0) {
    return (
      <div className="text-center text-gray-500 p-8">
        <p>No window film products available at the moment. Please check back soon!</p>
      </div>
    );
  }

  return (
    <section aria-label="Available Window Films">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allFilmVariants.map((variant, index) => (
          <ProductCard key={`${variant.sku}-${index}`} variant={variant} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;