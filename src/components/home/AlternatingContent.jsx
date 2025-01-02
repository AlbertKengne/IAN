import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export const AlternatingContent = () => (
  <section className="relative py-32 bg-gradient-to-b from-white to-gray-50">
    <motion.div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(235,96,14,0.08), transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(20,108,180,0.08), transparent 40%)
        `
      }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <Container>
      {/* Premier bloc - Texte à gauche, Image à droite */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0a192f] to-[#146cb4]">
            Développez vos compétences créatives
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Notre approche pédagogique combine théorie et pratique pour vous permettre
            de maîtriser les outils et techniques de l'art numérique. Apprenez à votre
            rythme avec nos ressources exclusives.
          </p>
          <ul className="space-y-4">
            {['Workshops interactifs', 'Projets pratiques', 'Mentorat personnalisé'].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <span className="text-[#eb600e]">✓</span>
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/20 to-[#146cb4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80"
              alt="Digital Art Learning"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.02 }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/5 to-[#146cb4]/5 blur-2xl opacity-60 -z-10" />
        </motion.div>
      </div>

      {/* Second bloc - Image à gauche, Texte à droite */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#146cb4]/20 to-[#eb600e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.img
              src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=800&q=80"
              alt="Creative Community"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              whileHover={{ scale: 1.02 }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#146cb4]/5 to-[#eb600e]/5 blur-2xl opacity-60 -z-10" />
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#146cb4] to-[#0a192f]">
            Rejoignez une communauté passionnée
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Connectez-vous avec d'autres artistes, partagez vos créations et
            recevez des retours constructifs. Notre communauté est un espace
            d'échange et d'inspiration.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '500+', label: 'Membres actifs' },
              { number: '50+', label: 'Événements annuels' },
              { number: '1000+', label: 'Projets partagés' },
              { number: '24/7', label: 'Support communautaire' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-[#eb600e]">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);
