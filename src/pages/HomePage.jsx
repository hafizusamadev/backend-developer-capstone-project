import React from 'react';
import HeroSection from '../components/HeroSection';
import SpecialsSection from '../components/SpecialsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';

/**
 * Little Lemon Home Page component.
 */
export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}
