import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { FeatureCard } from './FeatureCard';
import { PaintBrushIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export const Features = () => (
  <section className="relative py-24 -mt-20 bg-gradient-to-b from-[#0a192f] via-[#0a192f]/95 to-[#0a192f]/5">
    {/* Background Elements */}
    <div className="absolute inset-0">
      {/* Grille animée */}
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 0% 0%, rgba(235,96,14,0.1), transparent 40%),
            radial-gradient(circle at 100% 0%, rgba(20,108,180,0.1), transparent 40%)
          `
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>

    <Container className="relative">
      <motion.div 
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 1 }}
      >
        <motion.span 
          className="inline-block text-[#eb600e] font-semibold mb-4 px-8 py-3 rounded-full bg-gradient-to-r from-[#eb600e]/10 to-transparent backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Découvrez nos fonctionnalités
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600">
          Unlock Your Creative Potential
        </h2>
        <p className="text-lg text-gray-400/90 max-w-2xl mx-auto">
          Join our community and access exclusive features designed to enhance your artistic journey.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        <motion.div
          className="absolute -top-40 inset-x-0 h-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(235,96,14,0.15), transparent 70%)',
          }}
        />
        
        {[
          {
            icon: <PaintBrushIcon className="w-6 h-6" />,
            title: "Creative Workshops",
            description: "Access exclusive workshops led by industry professionals and master new techniques."
          },
          {
            icon: <UserGroupIcon className="w-6 h-6" />,
            title: "Community Events",
            description: "Connect with fellow artists in regular meetups, challenges, and collaborative projects."
          },
          {
            icon: <AcademicCapIcon className="w-6 h-6" />,
            title: "Learning Resources",
            description: "Explore our comprehensive library of tutorials, guides, and educational content."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="group relative p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#eb600e]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#eb600e] to-[#ff8f4c] flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#eb600e] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
  </section>
);