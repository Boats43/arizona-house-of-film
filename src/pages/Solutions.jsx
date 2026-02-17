import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Lock, Shield, PenTool, Sparkles, SprayCan } from 'lucide-react';
const solutionsData = [{
  icon: Sun,
  title: "Comfort & Energy",
  description: "Reduce heat, cut glare, and lower your energy bills with our advanced solar control films.",
  link: "/energy-saving-window-films",
  color: "blue"
}, {
  icon: Lock,
  title: "Privacy & Decorative",
  description: "Enhance privacy and style with a wide range of frosted, patterned, and custom decorative films.",
  link: "/decorative-window-films",
  color: "purple"
}, {
  icon: Shield,
  title: "Safety & Security",
  description: "Strengthen your glass against break-ins, accidents, and storms with heavy-duty security films.",
  link: "/safety",
  color: "red"
}, {
  icon: PenTool,
  title: "Graphics & Branding",
  description: "Turn your windows into a canvas with custom-cut logos and vibrant graphics to elevate your brand.",
  link: "/decorative-window-films/aesthetic-appeal",
  color: "green"
}, {
  icon: SprayCan,
  title: "Graffiti & Protection",
  description: "Protect your property from vandalism with sacrificial anti-graffiti films that are easy to replace.",
  link: "/anti-graffiti",
  color: "orange"
}];
const gradientClasses = {
  blue: "from-blue-500 to-sky-600",
  purple: "from-purple-500 to-pink-600",
  red: "from-red-500 to-orange-600",
  green: "from-green-500 to-emerald-600",
  orange: "from-yellow-500 to-amber-600"
};
const Solutions = () => {
  return <>
            <Helmet>
                <title>Window Film Solutions in Arizona | Arizona House of Film</title>
                <meta name="description" content="Explore our comprehensive window film solutions for energy savings, privacy, security, and branding. Serving Phoenix, Scottsdale, and all of Arizona." />
                <link rel="canonical" href="https://arizonahouseoffilm.com/solutions" />
            </Helmet>
            <div className="bg-white">
                <header className="relative py-24 bg-gray-100 text-center text-white">
                    <img alt="Modern office with various window film applications" className="absolute inset-0 w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20230911_153938-DFysq.jpg" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10">
                        <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }} className="text-4xl md:text-5xl font-extrabold text-white">
                            Our Window Film Solutions
                        </motion.h1>
                        <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                            Find the perfect solution to meet your specific needs, from reducing energy costs to enhancing security and style.
                        </motion.p>
                    </div>
                </header>

                <main className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {solutionsData.map((solution, index) => <motion.div key={solution.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="group">
                                    <Link to={solution.link} className="block bg-gray-50 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col p-8 text-center">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${gradientClasses[solution.color]} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform`}>
                                            <solution.icon className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                                        <p className="text-gray-600 flex-grow">{solution.description}</p>
                                    </Link>
                                </motion.div>)}
                        </div>
                    </div>
                </main>
            </div>
        </>;
};
export default Solutions;