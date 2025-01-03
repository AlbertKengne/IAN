import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/layout/Footer';

export const About = () => {
  const team = [
    {
      name: "Sarah Martin",
      role: "Fondatrice & Directrice",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500",
      description: "Passionnée d'art digital depuis plus de 10 ans"
    },
    {
      name: "Marc Dubois",
      role: "Directeur Artistique",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500",
      description: "Expert en design et création numérique"
    },
    {
      name: "Julie Chen",
      role: "Responsable Formation",
      image: "https://images.unsplash.com/photo-1601931935821-5fbe71157695?auto=format&fit=crop&w=500",
      description: "Spécialiste en pédagogie digitale"
    }
  ];

  const values = [
    {
      icon: "🎨",
      title: "Créativité",
      description: "Encourager l'innovation et l'expression artistique"
    },
    {
      icon: "🤝",
      title: "Communauté",
      description: "Favoriser l'entraide et le partage de connaissances"
    },
    {
      icon: "📚",
      title: "Excellence",
      description: "Viser la qualité dans chaque aspect de notre enseignement"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Rester à la pointe des technologies créatives"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative bg-gradient-to-b from-[#0a192f] to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Notre Histoire et{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb600e] to-[#ff8f4c]">
                    Notre Vision
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Fondée en 2020, IAN est née de la volonté de créer un espace d'apprentissage et d'échange pour les artistes digitaux.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  {[
                    { number: "2000+", label: "Membres actifs" },
                    { number: "150+", label: "Workshops réalisés" },
                    { number: "98%", label: "Satisfaction" },
                    { number: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                    >
                      <div className="text-3xl font-bold text-[#eb600e]">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1664575198308-3959904fa430?auto=format&fit=crop&w=800"
                    alt="Notre espace créatif"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a192f]/80 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nouvelle section Valeurs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Les principes qui guident notre mission chaque jour
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Des professionnels passionnés dédiés à votre réussite
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-gray-300">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{member.description}</p>
                    <div className="mt-4 flex gap-4">
                      {['linkedin', 'twitter', 'github'].map((social, i) => (
                        <button key={i} className="text-gray-400 hover:text-[#eb600e] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            {/* Icons paths here */}
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nouvelle section CTA */}
        <section className="py-20 bg-[#0a192f] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à rejoindre l'aventure ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Découvrez comment nous pouvons vous aider à développer votre créativité
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] text-white rounded-xl font-semibold"
              >
                Commencer maintenant
              </motion.button>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[#146cb4]/10 mix-blend-multiply" />
        </section>
      </main>
      <Footer />
    </div>
  );
};
