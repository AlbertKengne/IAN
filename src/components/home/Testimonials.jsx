import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Digital Artist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200",
    quote: "Cette formation a transformé ma façon d'aborder l'art digital. La communauté est incroyablement solidaire et inspirante."
  },
  {
    name: "Thomas Dubois",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200",
    quote: "Les workshops sont d'une qualité exceptionnelle. J'ai acquis des compétences que je n'aurais pas imaginé maîtriser si rapidement."
  },
  {
    name: "Emma Bernard",
    role: "Illustratrice",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200",
    quote: "Le mentorat personnalisé a été déterminant dans mon évolution. Une expérience d'apprentissage unique et enrichissante."
  }
];

export const Testimonials = () => {
  return (
    <section className="relative py-32 bg-[#0a192f]">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ce que disent nos membres
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez les expériences de notre communauté d'artistes digitaux
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#eb600e]/10 to-[#146cb4]/10 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">{testimonial.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
