'use client';
import { useState, useEffect } from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import VisaEnquiryPopup from '../components/home/VisaEnquiryPopup';

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      <VisaEnquiryPopup open={showPopup} onClose={() => setShowPopup(false)} />
      <HeroCarousel />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
