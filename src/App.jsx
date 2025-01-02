import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignInForm } from './components/auth/SignInForm';
import { SignUpForm } from './components/auth/SignUpForm';
import { ForgotPasswordForm } from './components/auth/ForgotPasswordForm';
import { Header } from './components/Header/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/features/Features';
import { InfoSection } from './components/home/InfoSection';
import { CreativePotential } from './components/home/CreativePotential';
import { JoinSection } from './components/home/JoinSection';
import { MemberArea } from './components/home/MemberArea';
import { Newsletter } from './components/home/Newsletter';
import { Footer } from './components/layout/Footer';
import { AlternatingContent } from './components/home/AlternatingContent';
import { FAQ } from './components/home/FAQ';
import { Testimonials } from './components/home/Testimonials';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;