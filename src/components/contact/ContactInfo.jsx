import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      details: "480-788-1591",
      href: "tel:4807881591",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "arizonahouseoffilm@gmail.com",
      href: "mailto:arizonahouseoffilm@gmail.com",
      description: "Send us a detailed message",
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Phoenix, Arizona",
      description: "Serving the greater Phoenix area",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon–Fri: 9AM–5PM | Sat: 9AM–2PM",
      description: "Closed Sundays",
    },
  ];

  return (
    <div className="space-y-6">
      {contactItems.map((info, index) => (
        <motion.div
          key={info.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="bg-slate-800/60 border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <info.icon className="w-5 h-5 text-white" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                {info.title}
              </h3>

              {info.href ? (
                <a
                  href={info.href}
                  className="text-teal-400 font-semibold break-words hover:underline"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-teal-400 font-semibold break-words">
                  {info.details}
                </p>
              )}

              <p className="text-slate-400 text-sm mt-1">
                {info.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;