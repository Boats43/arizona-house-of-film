import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Arizona House of Film",
    url: "https://arizonahouseoffilm.com/privacy-policy",
    publisher: { "@type": "LocalBusiness", "@id": "https://arizonahouseoffilm.com", name: "Arizona House of Film" }
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Arizona House of Film</title>
        <meta name="description" content="Read the privacy policy for Arizona House of Film. We are committed to protecting your personal information and being transparent about how we use it." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Arizona House of Film" />
        <meta property="og:description" content="Read the privacy policy for Arizona House of Film. We are committed to protecting your personal information and being transparent about how we use it." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/privacy-policy" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Arizona House of Film" />
        <meta name="twitter:description" content="Read the privacy policy for Arizona House of Film. We are committed to protecting your personal information and being transparent about how we use it." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Privacy Policy</h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-12 prose prose-lg max-w-none">
            <p>Arizona House of Film ("us", "we", or "our") operates the Arizona House of Film website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            <h2>Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
            </ul>
            <h2>Use of Data</h2>
            <p>Arizona House of Film uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
            <h2>AI Chat and Photo Analysis</h2>
            <p>Our website features an AI-powered chat assistant. Conversations may be used to improve customer service. When you upload a photo through our chat for window film recommendations:</p>
            <ul>
              <li>Photos are transmitted to Anthropic's API for analysis and are not stored on our servers.</li>
              <li>Images are discarded after analysis and never used for any other purpose.</li>
              <li>Photo uploads require your explicit consent before the first upload in each session.</li>
              <li>We do not retain, sell, or share any images you upload.</li>
            </ul>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-blue-700 underline">contact us</Link> or return to the <Link to="/" className="text-blue-700 underline">Arizona House of Film home page</Link>:</p>
            <ul>
              <li>By email: info@arizonahouseoffilm.com</li>
              <li>By phone number: 480-788-1591</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
