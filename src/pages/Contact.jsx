import React from "react";
import { Helmet } from "react-helmet";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Arizona House of Film</title>
        <meta
          name="description"
          content="Request a free window film consultation in Phoenix. Commercial and residential window tinting experts serving all of Arizona."
        />
      </Helmet>

      <div className="w-full bg-[#020617] overflow-x-hidden">

        {/* HEADER */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-[#020617]">
          <ContactHeader />
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-7xl mx-auto px-4 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT: Contact Info */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="bg-slate-900/60 backdrop-blur rounded-2xl border border-white/10 shadow-xl p-6">
                <ContactInfo />
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-900">
                <div className="p-10 md:p-14">

                  {/* SECTION TITLE */}
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                      Request Your{" "}
                      <span className="text-blue-600 italic">Free Audit</span>
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-2xl">
                      Fill out the form below and our team will provide a detailed quote tailored to your residential or commercial window film project.
                    </p>
                  </div>

                  <ContactFormSection />

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* MAP SECTION */}
        <section className="bg-slate-900 border-t border-white/10 py-20">
          <div className="max-w-7xl mx-auto px-4">

            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Area
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We proudly serve the entire state of Arizona with professional window film installation services.
              </p>
            </div>

            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10">
              <ContactMap />
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Contact;