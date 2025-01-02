import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

const memberFeatures = [
  {
    title: "Workshops & Événements",
    description: "Rejoignez notre communauté dynamique et accédez à du contenu exclusif.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    title: "Ressources Premium",
    description: "Accédez à notre bibliothèque de tutoriels et ressources exclusives.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  {
    title: "Projets Collaboratifs",
    description: "Participez à des projets créatifs avec d'autres membres de la communauté.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  }
];

export const MemberArea = () => (
  <section className="relative py-32 bg-gradient-to-b from-gray-50 to-[#0a192f]/5">
    {/* Background Effects */}
    <motion.div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 100% 0%, rgba(235,96,14,0.08), transparent 40%),
          radial-gradient(circle at 0% 100%, rgba(20,108,180,0.08), transparent 40%)
        `
      }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.span 
          className="inline-block text-[#eb600e] font-semibold mb-4 px-6 py-2 rounded-full bg-[#eb600e]/10"
          whileHover={{ scale: 1.05 }}
        >
          Espace Membre
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0a192f] to-[#146cb4]">
          Libérez votre potentiel créatif
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Accédez à des ressources exclusives et rejoignez une communauté passionnée
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {memberFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden rounded-t-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#eb600e]/20 to-[#146cb4]/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#eb600e] to-[#ff8f4c] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#eb600e] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <Button 
                variant="outline" 
                className="w-full py-3 border-2 border-[#eb600e] text-[#eb600e] hover:bg-[#eb600e] hover:text-white rounded-xl transition-all duration-300"
              >
                Explorer →
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);