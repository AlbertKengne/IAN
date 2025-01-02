import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

const images = [
  'https://images.unsplash.com/photo-1633354931133-27ac1ee5d853', // Digital Art Example
  'https://images.unsplash.com/photo-1559028012-481c04fa702d', // Nouveau lien pour Creative Coding
  'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a', // Tech Workshop
];

export const InfoSection = () => (
  <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a192f]/5 via-white to-gray-50">
    {/* Background Effects */}
    <motion.div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(235,96,14,0.08), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(20,108,180,0.08), transparent 40%)
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

    <Container className="relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-[#eb600e] font-semibold mb-4 px-6 py-2 rounded-full bg-[#eb600e]/10"
            whileHover={{ scale: 1.05 }}
          >
            Notre Approche
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0a192f] to-[#146cb4]">
            Formation et Innovation en Art Digital
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre programme combine créativité et technologie pour former la prochaine génération d'artistes numériques.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Apprentissage Pratique",
                description: "Workshops hebdomadaires et sessions pratiques guidées par des experts.",
                icon: "🎨"
              },
              {
                title: "Outils Innovants",
                description: "Accès aux dernières technologies et logiciels de création numérique.",
                icon: "💻"
              },
              {
                title: "Communauté Active",
                description: "Échangez avec d'autres artistes et participez à des projets collaboratifs.",
                icon: "🤝"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative lg:h-[600px] space-y-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
            >
              <div className="relative h-48 overflow-hidden rounded-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/20 to-[#146cb4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.img
                  src={`${image}?auto=format&fit=crop&w=800`}
                  alt={`Digital Art ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.02 }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/5 to-[#146cb4]/5 blur-2xl opacity-60 -z-10" />
            </motion.div>
          ))}
        </div>
        </div>
    </Container>
  </section>
);
