import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const JoinSection = () => (
  <section className="relative py-32 bg-gradient-to-b from-[#0a192f]/5 to-gray-50">
    {/* Connecting gradient */}
    <div className="absolute inset-0">
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(235,96,14,0.1), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(20,108,180,0.05), transparent 50%)
          `
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="text-lg font-semibold text-[#eb600e] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Rejoignez-nous
        </motion.p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Devenez membre de notre communauté
        </h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Joining our club opens the door to a vibrant community of digital art enthusiasts. 
          Participate in exclusive events and access a wealth of resources designed to enhance your skills.
        </motion.p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
            title: "Participez aux événements",
            description: "Restez informé de notre calendrier et inscrivez-vous aux prochains événements."
          },
          {
            icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
            title: "Accédez aux ressources éducatives",
            description: "Explorez notre blog, nos tutoriels et nos forums pour enrichir vos connaissances."
          },
          {
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            title: "Connectez-vous avec les autres membres",
            description: "Participez aux discussions et partagez vos projets avec la communauté."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-[#eb600e] to-[#ff8f4c] rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <Button 
          variant="primary" 
          className="px-8 py-3 bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] hover:from-[#ff8f4c] hover:to-[#eb600e] text-white rounded-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Se connecter
        </Button>
        <Button 
          variant="outline"
          className="px-8 py-3 border-2 border-[#eb600e] text-[#eb600e] hover:bg-[#eb600e]/5 rounded-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          En savoir plus
        </Button>
      </motion.div>
    </div>
  </section>
);