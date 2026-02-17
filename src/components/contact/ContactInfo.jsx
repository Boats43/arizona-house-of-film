import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      title: 'Phone',
      details: '480-788-1591',
      href: 'tel:480-788-1591',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'arizonahouseoffilm@gmail.com',
      href: 'mailto:arizonahouseoffilm@gmail.com',
      description: 'Send us a detailed message'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Phoenix, Arizona',
      description: 'Serving the greater Phoenix area'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-5PM, Sat: 9AM-2PM',
      description: 'Closed Sundays'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover flex flex-col"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 flex-shrink-0">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.href ? (
                 <a href={info.href} className="text-lg font-semibold text-teal-600 mb-2 break-words hover:underline">
                   {info.details}
                 </a>
              ) : (
                <p className="text-lg font-semibold text-teal-600 mb-2 break-words">
                  {info.details}
                </p>
              )}

              <p className="text-gray-600 text-sm mt-auto">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;