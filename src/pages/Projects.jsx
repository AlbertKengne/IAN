import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/layout/Footer';

export const Projects = () => {
  const projects = [
    {
      title: "Digital Art Masterpiece",
      description: "Une création unique mélangeant art traditionnel et numérique...",
      image: "https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?auto=format&fit=crop&w=800",
      tags: ['Digital', 'Art', '3D']
    },
    {
      title: "Animation Interactive",
      description: "Un projet d'animation interactive utilisant les dernières technologies...",
      image: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?auto=format&fit=crop&w=800",
      tags: ['Animation', 'Interactive', 'Motion']
    },
    {
      title: "3D Character Design",
      description: "Création de personnages 3D pour jeux vidéo et animation...",
      image: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?auto=format&fit=crop&w=800",
      tags: ['3D', 'Character', 'Design']
    },
    {
      title: "VR Experience",
      description: "Une expérience immersive en réalité virtuelle...",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800",
      tags: ['VR', 'Experience', 'Digital']
    },
    {
      title: "NFT Collection",
      description: "Collection d'art digital unique sur la blockchain...",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800",
      tags: ['NFT', 'Crypto', 'Art']
    },
    {
      title: "Digital Sculpture",
      description: "Sculpture numérique créée avec des outils de modélisation 3D...",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800",
      tags: ['Sculpture', '3D', 'Art']
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
                Nos Projets Créatifs
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez les projets réalisés par notre communauté d'artistes digitaux
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-48 relative overflow-hidden group">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#eb600e]/20 to-[#146cb4]/20 group-hover:opacity-0 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                          {tag}
                        </span>
                      ))}
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
