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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, idx) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
            priority={idx === 0}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content on the left */}
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-amber-500 text-slate-900 rounded-full text-sm font-bold mb-6">
              ✈️ Your Trusted Travel Partner
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Your Gateway to{' '}
              <span className="text-amber-400">Global</span>{' '}
              Opportunities
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              Simplifying Visa Applications, Job Placement Abroad, and International Travel for Nigerians
            </p>
            
            <div className="flex gap-4 mb-12 flex-col sm:flex-row">
              <a
                href="/contact"
                className="px-8 py-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold shadow-lg shadow-amber-500/30 transition-all hover:scale-105 text-lg text-center"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all text-lg text-center"
              >
                Book Consultation
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">10+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">2,000+</div>
                <div className="text-sm text-slate-400">Successful Applications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">20+</div>
                <div className="text-sm text-slate-400">Countries Covered</div>
              </div>
            </div>
          </div>

          {/* Featured image card on the right */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-[4/5] relative">
                {heroImages.map((img, idx) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      idx === current ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Floating info card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Ready to Travel?</div>
                    <div className="text-sm text-slate-600">Get your visa in 2 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex gap-2 justify-center mt-4">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'bg-amber-400 w-6' : 'bg-white/40'
                  }`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
