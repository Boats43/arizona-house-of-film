import React from "react";
import { Helmet } from "react-helmet";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  const rocNumber = "315259";

  return (
    <>
      <Helmet>
        <title>Contact Us | Arizona House of Film</title>
        <meta name="description" content="Get a free estimate for window tinting in Phoenix." />
      </Helmet>

      {/* Use a single wrapper div instead of nested mains */}
      <div className="bg-[#020617] min-h-screen">
        
        {/* Header Section */}
        <header className="pt-24 pb-12">
          <ContactHeader 
            title="Get in Touch" 
            subtitle="Ready to transform your space? Contact us today for a free consultation." 
          />
        </header>

        {/* GRID SYSTEM: 
            - lg:grid-cols-[380px_1fr] forces the sidebar to stay exactly 380px.
            - This prevents the "vertical text" bug.
        */}
        <section className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">
            
            {/* LEFT COLUMN: Contact Info */}
            <aside className="bg-white/5 p-8 rounded-xl border border-white/10 shadow-2xl order-2 lg:order-1">
              <ContactInfo />
            </aside>

            {/* RIGHT COLUMN: The Form Container */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden order-1 lg:order-2">
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    REQUEST YOUR <span className="text-blue-600 italic">FREE AUDIT</span>
                  </h2>
                </div>
                
                {/* Your working FormSubmit component */}
                <ContactFormSection />
              </div>
            </div>

          </div>
        </section>

        {/* Map Section */}
        <section className="bg-slate-900 border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-[450px] rounded-xl overflow-hidden border border-white/10">
              <ContactMap />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-8 text-center border-t border-white/5">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em]">
            Arizona House of Film • ROC #{rocNumber}
          </p>
        </footer>
      </div>
    </>
  );
};

export default Contact;