'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroImages = [
  {
    src: '/images/hero/hero-main.jpg',
    alt: 'Global travel success',
  },
  {
    src: '/images/hero/hero-main1.jpg',
    alt: 'Visa application',
  },
  {
    src: '/images/hero/hero-main3.jpg',
    alt: 'International travel',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-400/70 text-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-20 gap-8 md:gap-0">
        {/* Images on the left */}
        <div className="relative w-full md:w-1/2 h-[340px] md:h-[520px] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 backdrop-blur-md">
          {heroImages.map((img, idx) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover object-center rounded-lg shadow-lg transition-opacity duration-1000 absolute top-0 left-0 w-full h-full ${
                idx === current ? 'opacity-70 z-10' : 'opacity-0 z-0'
              }`}
              priority={idx === 0}
            />
          ))}
          {/* Carousel indicators (mobile/desktop) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? 'bg-secondary' : 'bg-white/50'
                } border border-white`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Text on the right */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-xl w-full md:w-1/2 px-2 md:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg animate-fade-in tracking-tight leading-tight">
              Your Gateway to <span className="text-blue-300">Global</span>{' '}
              Opportunities
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in delay-100 text-white/90">
              Simplifying Visa Applications, Job Placement Abroad, and
              International Travel for Nigerians
            </p>
            <div className="flex gap-4 mb-8 animate-fade-in delay-200 flex-col sm:flex-row w-full sm:w-auto justify-center md:justify-start">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 transition text-lg"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-blue-700 transition text-lg"
              >
                Book Consultation
              </a>
            </div>
            <div className="flex gap-8 justify-center md:justify-start mt-6 animate-fade-in delay-300">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold">10+</span>
                <div className="text-base">Years Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold">2,000+</span>
                <div className="text-base">Successful Applications</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold">20+</span>
                <div className="text-base">Countries Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-700/60 to-transparent pointer-events-none" />
    </section>
  );
}
