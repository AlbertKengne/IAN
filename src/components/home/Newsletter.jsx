import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

export const Newsletter = () => (
  <section className="relative py-32 overflow-hidden">
    {/* Background avec les mêmes effets que les autres sections */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#0a192f]/90" />
    
    {/* Effets de lumière */}
    <motion.div 
      className="absolute inset-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 0% 100%, rgba(235,96,14,0.15), transparent 50%),
          radial-gradient(circle at 100% 0%, rgba(20,108,180,0.15), transparent 50%)
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

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            Rejoignez notre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb600e] to-[#ff8f4c]">
              Communauté Créative
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Restez informé des dernières actualités et du contenu exclusif de notre club.
            Inscrivez-vous pour recevoir nos événements et plus encore !
          </p>
        </motion.div>

        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/20 to-[#146cb4]/20 blur-xl rounded-xl transform group-hover:scale-105 transition-transform duration-500" />
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Votre Email"
                className="w-full bg-white/10 text-white placeholder:text-white/60 border-white/20 focus:border-[#eb600e] rounded-xl py-3 px-4"
              />
              <Button 
                variant="primary" 
                className="w-full bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] hover:from-[#ff8f4c] hover:to-[#eb600e] text-white py-3 rounded-xl transform hover:scale-105 transition-all duration-300"
              >
                S'abonner maintenant
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4 text-center">
              En cliquant sur S'abonner, vous acceptez nos Conditions d'utilisation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);