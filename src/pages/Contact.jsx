import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMap from '@/components/contact/ContactMap';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
    const { toast } = useToast();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How do I get a quote for window tinting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get a free quote by filling out the contact form on our website, calling us at 480-788-1591, or emailing us at info@arizonahouseoffilm.com. We offer free consultations and estimates."
      }
    }, {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We proudly serve the entire state of Arizona, including Phoenix, Scottsdale, Tempe, Mesa, Chandler, and surrounding areas."
      }
    }, {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Arizona House of Film is fully licensed, bonded, and insured for your complete peace of mind."
      }
    }]
  };

  return (
    <>
      <Helmet>
        <title>Contact for a Free Window Tinting Quote | Arizona House of Film</title>
        <meta name="description" content="Get in touch with Arizona House of Film for a free estimate on residential or commercial window tinting in Arizona. Call, email, or fill out our form to schedule your consultation with our experts today." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/contact" />
        <meta property="og:title" content="Contact for a Free Window Tinting Quote | Arizona House of Film" />
        <meta property="og:description" content="Get in touch with Arizona House of Film for a free estimate on residential or commercial window tinting in Arizona. Call, email, or fill out our form to schedule your consultation with our experts today." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/contact" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-contact.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <ContactHeader />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
    </>
  );
};

export default Contact;