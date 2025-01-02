import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Container } from '../layout/Container';
import { Button } from '../common/Button';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slideImages = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe',
];

export const Hero = () => (
  <section className="relative min-h-[95vh] overflow-hidden">
    {/* Background Slider */}
    <div className="absolute inset-0 z-0">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={2000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0"
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={index} className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${image}?q=80&w=2970')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'saturate(1.1) contrast(1.1) brightness(0.7)',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Enhanced overlay layers */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent z-1" />
    <div className="absolute inset-0 bg-gradient-to-br from-[#146cb4]/80 via-[#146cb4]/40 to-transparent z-1 opacity-70" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-1" />
    
    {/* Animated tech pattern */}
    <motion.div 
      className="absolute inset-0 z-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent)',
      }}
    />
    
    {/* Enhanced radial gradients */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(235,96,14,0.2),transparent_70%)] z-2 opacity-80" />
    
    {/* Multiple animated blobs */}
    <motion.div 
      className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#eb600e]/20 to-[#ff8f4c]/10 rounded-full blur-3xl z-2"
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{ 
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Amélioration transition et connexion avec Features */}
    <div className="absolute bottom-0 left-0 right-0">
      <div className="relative h-80">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/90 to-transparent" />
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 100%, rgba(235,96,14,0.25), transparent 40%),
              radial-gradient(circle at 80% 100%, rgba(20,108,180,0.15), transparent 40%)
            `
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>

    <Container className="relative z-10 pt-32 pb-40">
      <div className="max-w-4xl ml-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Unleash Your{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eb600e] to-[#ff8f4c]">
                Creativity
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </span>
          </h1>

          <motion.p 
            className="text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join our vibrant community of digital artists and tech enthusiasts. 
            Together, we explore, create, and innovate in the world of computer 
            and digital art.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-8 justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              variant="primary"
              className="bg-gradient-to-r from-[#eb600e] to-[#ff8f4c] hover:from-[#ff8f4c] hover:to-[#eb600e] text-white px-10 py-5 text-lg rounded-2xl shadow-xl shadow-[#eb600e]/20 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Join Now
            </Button>
            <Button 
              variant="outline"
              className="text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 px-10 py-5 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Enhanced stats section */}
          <motion.div 
            className="mt-20 flex gap-16 justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Monthly Events" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {stat.number}
                </p>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Container>
  </section>
);