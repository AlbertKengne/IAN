import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';

const faqItems = [
  {
    question: "Quels sont les prérequis pour rejoindre la formation ?",
    answer: "Aucun prérequis technique n'est nécessaire. Une passion pour l'art digital et une volonté d'apprendre sont les seules conditions."
  },
  {
    question: "Comment se déroulent les sessions d'apprentissage ?",
    answer: "Les sessions combinent cours en ligne, workshops interactifs et projets pratiques. Vous avancez à votre rythme avec le soutien de mentors."
  },
  {
    question: "Quel type de support est disponible ?",
    answer: "Vous bénéficiez d'un support communautaire 24/7, de sessions de mentorat personnalisées et d'une assistance technique permanente."
  },
  {
    question: "Puis-je accéder aux ressources hors ligne ?",
    answer: "Oui, la plupart de nos ressources sont téléchargeables pour un apprentissage hors ligne. Les vidéos et tutoriels restent accessibles en permanence."
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 last:border-none"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        className="py-6 w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold text-gray-900">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-[#eb600e] text-2xl"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => (
  <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white">
    <Container>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0a192f] to-[#146cb4]">
          Questions Fréquentes
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Trouvez rapidement des réponses à vos questions sur notre programme et notre communauté
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </Container>
  </section>
);
