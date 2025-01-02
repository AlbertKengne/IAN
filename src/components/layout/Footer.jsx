import React from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';

export const Footer = () => (
  <footer className="relative bg-[#0a192f] text-white overflow-hidden">
    {/* Effet de fond */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
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
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <motion.div 
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/logo.jpg" alt="Logo" className="h-14 w-auto" />
          </motion.div>
          <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
            Inscrivez-vous à notre newsletter pour recevoir les dernières mises à jour.
          </p>
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/20 to-[#146cb4]/20 blur-xl rounded-xl" />
            <div className="relative bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="flex gap-4 mb-3">
                <Input
                  type="email"
                  placeholder="Your email here"
                  className="flex-1 bg-white/10 border-[#146cb4]/30 text-white placeholder:text-gray-400"
                />
                <Button variant="primary" className="bg-[#eb600e] hover:bg-[#eb600e]/90 text-white px-8">
                  Join
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                By subscribing, you consent to our Privacy Policy and updates from us.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#eb600e]">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-[#146cb4] transition-colors">Home Page</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-[#146cb4] transition-colors">About Us</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-[#146cb4] transition-colors">Events List</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-[#146cb4] transition-colors">Our Projects</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#146cb4] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#eb600e]">Connect With Us</h3>
            <ul className="space-y-3">
              <li><a href="/blog" className="text-gray-300 hover:text-[#146cb4] transition-colors">Blog Posts</a></li>
              <li><a href="/tutorials" className="text-gray-300 hover:text-[#146cb4] transition-colors">Tutorials Hub</a></li>
              <li><a href="/member" className="text-gray-300 hover:text-[#146cb4] transition-colors">Member Area</a></li>
              <li><a href="/help" className="text-gray-300 hover:text-[#146cb4] transition-colors">Help Center</a></li>
              <li><a href="/feedback" className="text-gray-300 hover:text-[#146cb4] transition-colors">Feedback Form</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#eb600e]">Stay Updated</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#146cb4] transition-colors flex items-center gap-3 group">
                  <i className="fab fa-facebook text-xl group-hover:text-[#eb600e]"></i>Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#146cb4] transition-colors flex items-center gap-3 group">
                  <i className="fab fa-instagram text-xl group-hover:text-[#eb600e]"></i>Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#146cb4] transition-colors flex items-center gap-3 group">
                  <i className="fab fa-twitter text-xl group-hover:text-[#eb600e]"></i>Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#146cb4] transition-colors flex items-center gap-3 group">
                  <i className="fab fa-linkedin text-xl group-hover:text-[#eb600e]"></i>LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#146cb4] transition-colors flex items-center gap-3 group">
                  <i className="fab fa-youtube text-xl group-hover:text-[#eb600e]"></i>YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">© 2024 Digital Art Club. Tous droits réservés.</p>
        <div className="flex gap-8">
          <motion.a 
            whileHover={{ scale: 1.05, x: 2 }}
            href="/privacy" 
            className="text-sm text-gray-400 hover:text-[#eb600e] transition-colors"
          >
            Politique de confidentialité
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, x: 2 }}
            href="/terms" 
            className="text-sm text-gray-400 hover:text-[#eb600e] transition-colors"
          >
            Terms of Service
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, x: 2 }}
            href="/cookies" 
            className="text-sm text-gray-400 hover:text-[#eb600e] transition-colors"
          >
            Cookie Settings
          </motion.a>
        </div>
      </div>
    </div>
  </footer>
);