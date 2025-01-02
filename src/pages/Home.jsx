import React from 'react';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/features/Features';
import { InfoSection } from '../components/home/InfoSection';
import { CreativePotential } from '../components/home/CreativePotential';
import { AlternatingContent } from '../components/home/AlternatingContent';
import { MemberArea } from '../components/home/MemberArea';
import { Testimonials } from '../components/home/Testimonials';
import { JoinSection } from '../components/home/JoinSection';
import { FAQ } from '../components/home/FAQ';
import { Newsletter } from '../components/home/Newsletter';
import { Footer } from '../components/layout/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <InfoSection />
        <CreativePotential />
        <AlternatingContent />
        <MemberArea />
        <Testimonials />
        <JoinSection />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};
