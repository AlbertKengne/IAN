import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/layout/Footer';

export const Events = () => {
  const events = [
    {
      title: "Workshop Digital Art",
      description: "Apprenez les techniques avancées de l'art digital avec nos experts...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800",
      date: { day: 15, month: "JAN", year: "2024" }
    },
    {
      title: "Masterclass 3D Animation",
      description: "Une session intensive sur les dernières techniques d'animation 3D...",
      image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=800",
      date: { day: 16, month: "JAN", year: "2024" }
    },
    {
      title: "Conférence Art & Tech",
      description: "Explorez l'intersection entre l'art et la technologie...",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
      date: { day: 17, month: "JAN", year: "2024" }
    }
  ];

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
                Événements à Venir
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Participez à nos workshops, conférences et rencontres
              </p>
            </motion.div>

            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#eb600e]/90 to-[#146cb4]/90 mix-blend-multiply" />
                      <div className="relative p-6 text-white text-center flex flex-col justify-center h-full">
                        <div className="text-2xl font-bold">{event.date.month}</div>
                        <div className="text-4xl font-bold">{event.date.day}</div>
                        <div className="text-sm">{event.date.year}</div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>
                      <button className="px-4 py-2 bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] text-white rounded-xl">
                        S'inscrire
                      </button>
                    </div>
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
