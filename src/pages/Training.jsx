import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/layout/Footer';

export const Training = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <section className="pt-32 pb-16 relative bg-gradient-to-b from-[#0a192f] to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nos Formations
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Développez vos compétences en art digital avec nos formations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Digital Art Fundamentals",
                  duration: "8 semaines",
                  level: "Débutant",
                  price: "499€"
                },
                {
                  title: "Advanced Techniques",
                  duration: "12 semaines",
                  level: "Intermédiaire",
                  price: "699€"
                },
                {
                  title: "3D Modeling Mastery",
                  duration: "10 semaines",
                  level: "Avancé",
                  price: "899€"
                },
                {
                  title: "Animation Workshop",
                  duration: "6 semaines",
                  level: "Tous niveaux",
                  price: "599€"
                }
              ].map((course, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {course.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <span className="w-24">Durée:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="w-24">Niveau:</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="w-24">Prix:</span>
                        <span className="font-medium">{course.price}</span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] text-white rounded-xl">
                      En savoir plus
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
