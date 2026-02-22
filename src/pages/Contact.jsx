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

      {/* Main Container */}
      <div className="bg-[#020617] min-h-screen font-sans">
        
        {/* 1. Header Section */}
        <div className="pt-24 pb-12">
          <ContactHeader 
            title="Get in Touch" 
            subtitle="Ready to transform your space? Contact us today for a free consultation." 
          />
        </div>

        {/* 2. Main Content Grid - The Fix is Here */}
        <section className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
            
            {/* Left Column: Info Cards (Fixed width on desktop to prevent squishing) */}
            <aside className="space-y-6 order-2 lg:order-1">
              <div className="bg-slate-900/50 p-8 rounded-xl border border-white/10 shadow-xl">
                <ContactInfo />
              </div>
            </aside>

            {/* Right Column: The Form */}
            <main className="bg-white rounded-xl shadow-2xl overflow-hidden order-1 lg:order-2">
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    REQUEST YOUR <span className="text-blue-600 italic">FREE AUDIT</span>
                  </h2>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">
                    Response guaranteed within 24 hours
                  </p>
                </div>
                
                <ContactFormSection />
              </div>
            </main>

          </div>
        </section>

        {/* 3. Map Section */}
        <section className="bg-slate-900 border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-black text-white uppercase mb-10 text-center lg:text-left">
              Our <span className="text-blue-500 italic">Service Area</span>
            </h2>
            <div className="h-[450px] rounded-xl overflow-hidden border border-white/20">
              <ContactMap />
            </div>
          </div>
        </section>

        {/* 4. Footer */}
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