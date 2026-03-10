import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const Careers = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature in Development 🚧",
      description: "Thanks for your interest! Please email your resume directly to arizonahouseoffilm@gmail.com.",
    });
  };

  // ✅ Job Posting Schema for SEO (Google Jobs / Rich Snippets)
  const jobPostingSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "Window Film Installer",
    "description":
      "Arizona House of Film is hiring experienced window film installers for residential and commercial projects across Arizona. Join our high-performance, customer-focused team.",
    "datePosted": "2025-10-19",
    "validThrough": "2025-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Arizona House of Film",
      "sameAs": "https://arizonahouseoffilm.com",
      "logo": "https://arizonahouseoffilm.com/favicon-512.png",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Phoenix Metro Area",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "postalCode": "85004",
        "addressCountry": "US",
      },
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "value": "22",
        "unitText": "HOUR",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com/" },
      { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://arizonahouseoffilm.com/careers" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Careers | Arizona House of Film</title>
        <meta
          name="description"
          content="Join the Arizona House of Film team! We're hiring talented window film installers and professionals dedicated to quality and service. Apply today!"
        />
        <link rel="canonical" href="https://arizonahouseoffilm.com/careers" />
        <meta property="og:title" content="Careers at Arizona House of Film" />
        <meta property="og:description" content="Explore window film installer jobs and join a growing team of professionals serving Arizona homes and businesses." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/careers" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-careers.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jobPostingSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-gray-50">
        {/* Hero Section */}
        <header className="relative py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
          <div className="absolute inset-0 hero-pattern opacity-10" aria-hidden="true"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Join Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-gray-300"
            >
              Be part of Arizona’s leading window film company — dedicated to excellence, craftsmanship, and community.
            </motion.p>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Info */}
            <div className="prose lg:prose-lg text-gray-700">
              <h2 className="text-3xl font-bold text-gray-900">Why Work With Us?</h2>
              <p>
                Arizona House of Film isn’t just a workplace — it’s a team united by skill and pride in craftsmanship.
                We invest in your growth through hands-on training, industry certification, and opportunities to lead.
              </p>
              <ul>
                <li>Competitive pay + performance-based bonuses.</li>
                <li>Ongoing professional training and certification.</li>
                <li>Positive and inclusive team culture.</li>
                <li>Work with industry-leading brands like 3M and Solar Gard.</li>
                <li>Opportunities to serve communities across Arizona.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-12">Current Openings</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-xl text-blue-700">Window Film Installer</h4>
                <p className="text-sm text-gray-500">Full-Time | Phoenix, AZ & Surrounding Areas</p>
                <p className="mt-2">
                  We’re seeking detail-oriented installers passionate about precision and customer satisfaction. If
                  you’ve got hands-on experience or a strong work ethic, we’d love to meet you.
                </p>
              </div>

              <div className="mt-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-lg">Don’t see a position that fits?</h4>
                <p>
                  We’re always on the lookout for motivated professionals. Email your resume to{" "}
                  <a href="mailto:arizonahouseoffilm@gmail.com" className="font-semibold text-blue-600">
                    arizonahouseoffilm@gmail.com
                  </a>{" "}
                  and tell us why you’d be a great fit.
                </p>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Apply Now</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="position">Position Applying For</Label>
                  <Input id="position" type="text" defaultValue="Window Film Installer" required />
                </div>
                <div>
                  <Label htmlFor="resume">Upload Resume</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="cursor-pointer" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your experience..." rows={4} />
                </div>
                <Button type="submit" className="w-full text-lg py-3 bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Resume
                </Button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Careers;