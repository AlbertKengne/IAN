import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const CreativePotential = () => (
  <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
    {/* Background Effects */}
    <motion.div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0% 0%, rgba(235,96,14,0.08), transparent 40%),
          radial-gradient(circle at 100% 100%, rgba(20,108,180,0.08), transparent 40%)
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

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Unlock Your Creative Potential:
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#eb600e] to-[#ff8f4c]">
            Join Our Dynamic Digital Art
            <br />
            Community Today!
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          By becoming a member, you'll enhance your skills through exclusive
          workshops and tutorials. Connect with fellow artists and gain access to a
          treasure trove of resources designed to elevate your digital art journey.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Explore Our Engaging Workshops and Tutorials",
            subtitle: "For Aspiring Digital Artists",
            description: "Our club offers a variety of services designed to enhance your skills and creativity.",
            buttonText: "Join",
            delay: 0,
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Participate in Our Interactive Workshops",
            subtitle: "And Hands-On Learning Sessions",
            description: "Engage with experts and peers in our collaborative workshops to elevate your craft.",
            buttonText: "Team",
            delay: 0.2,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
          },
          {
            title: "Access Exclusive Tutorials and Resources",
            subtitle: "Tailored for Your Growth",
            description: "Dive into our rich library of tutorials and resources to sharpen your skills.",
            buttonText: "Explore",
            delay: 0.4,
            image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: feature.delay, duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/5 to-[#146cb4]/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500 blur-xl" />
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl group-hover:shadow-lg transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#eb600e]/20 to-[#146cb4]/20 group-hover:opacity-0 transition-opacity duration-300" />
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0a192f] to-[#146cb4]">
                {feature.title}
              </h3>
              <p className="text-lg font-semibold text-gray-800 mb-4">{feature.subtitle}</p>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Button
                variant="primary"
                className="bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] text-white px-6 py-2 rounded-xl hover:from-[#ff8f4c] hover:to-[#eb600e] transition-all duration-300"
              >
                {feature.buttonText} →
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
