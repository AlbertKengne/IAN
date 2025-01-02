import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "../common/Input";
import { Button } from "../common/Button";

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
              to="/signin"
              className="flex items-center gap-2 text-gray-600 hover:text-[#eb600e] transition-colors group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à la connexion
            </Link>
            <Link 
              to="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0a192f] to-[#146cb4]"
            >
              Club IAN
            </Link>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Mot de passe oublié</h2>
              <p className="text-gray-600">
                Entrez votre email pour réinitialiser votre mot de passe
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] hover:from-[#ff8f4c] hover:to-[#eb600e] text-white py-3 rounded-xl transition-all duration-300"
                >
                  Envoyer les instructions
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center p-6 bg-green-50 rounded-xl"
              >
                <p className="text-green-800">
                  Les instructions de réinitialisation ont été envoyées à votre email.
                </p>
              </motion.div>
            )}

            <p className="text-center text-gray-600">
              <Link to="/signin" className="text-[#eb600e] hover:text-[#ff8f4c] font-semibold">
                Retour à la connexion
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image & Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/90 to-[#0a192f]/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80"
          alt="Digital Art Support"
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
              Récupérez votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb600e] to-[#ff8f4c]">
                accès
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Nous vous aiderons à réinitialiser votre mot de passe en toute sécurité.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Comment ça marche ?</h3>
              <div className="space-y-4">
                {[
                  "Entrez votre adresse email",
                  "Recevez un lien sécurisé",
                  "Créez un nouveau mot de passe",
                  "Reconnectez-vous en toute sécurité"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#eb600e] flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
