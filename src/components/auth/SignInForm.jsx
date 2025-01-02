import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "../common/Input";
import { Button } from "../common/Button";

export const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          {/* Header with Logo and Back Button */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-[#eb600e] transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l'accueil
            </Link>
            <Link 
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0a192f] to-[#146cb4]"
            >
              Club IAN
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Bon retour!</h2>
              <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-4 mb-8">
              <button
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                onClick={() => {/* Implement Google Auth */}}
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                <span className="text-gray-700">Continuer avec Google</span>
              </button>
              <button
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                onClick={() => {/* Implement GitHub Auth */}}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.218 11.218 0 0112 3.205c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 19.795 24 15.298 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-gray-700">Continuer avec GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>

            {/* Form Fields */}
            <form className="space-y-6">
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="john@example.com"
                icon={
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                }
              />

              <div className="space-y-1">
                <Input
                  label="Mot de passe"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  icon={
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  }
                />
                <div className="flex justify-end">
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-[#eb600e] hover:text-[#ff8f4c] transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] hover:from-[#ff8f4c] hover:to-[#eb600e] text-white py-3 rounded-xl transition-all duration-300"
              >
                Se connecter
              </Button>
            </form>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Pas encore membre ?{" "}
            <Link to="/signup" className="text-[#eb600e] hover:text-[#ff8f4c] font-semibold transition-colors">
              S'inscrire
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/90 to-[#0a192f]/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80"
          alt="Digital Art Community"
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative z-20 flex flex-col justify-center px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Bienvenue dans votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb600e] to-[#ff8f4c]">
                espace créatif
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Retrouvez vos projets et connectez-vous avec votre communauté d'artistes.
            </p>
            <div className="space-y-4">
              {[
                "Accès à vos projets en cours",
                "Participez aux workshops exclusifs",
                "Collaborez avec d'autres artistes",
                "Support personnalisé 24/7"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <svg className="w-5 h-5 text-[#eb600e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
