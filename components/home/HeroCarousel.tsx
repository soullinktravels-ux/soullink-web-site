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

interface HeroCarouselProps {
  onGetStarted?: () => void;
}

export default function HeroCarousel({ onGetStarted }: HeroCarouselProps) {
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
              Your Gateway to <span className="text-amber-400">Global</span>{' '}
              Opportunities
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              Simplifying Visa Applications, Job Placement Abroad, and
              International Travel for Nigerians
            </p>

            <div className="flex gap-4 mb-12 flex-col sm:flex-row">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold shadow-lg shadow-amber-500/30 transition-all hover:scale-105 text-lg text-center"
              >
                Get Started
              </button>
              <a
                href="https://wa.me/2349136201808?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all text-lg text-center"
              >
                Book Consultation
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
                  10+
                </div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
                  2,000+
                </div>
                <div className="text-sm text-slate-400">
                  Successful Applications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
                  20+
                </div>
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
              <a
                href="https://wa.me/2349136201808?text=Hello%2C%20I%27m%20ready%20to%20travel%20and%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:bg-white hover:scale-105 transition-all cursor-pointer block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      Ready to Travel?
                    </div>
                    <div className="text-sm text-slate-600">
                      Click to chat with us on WhatsApp!
                    </div>
                  </div>
                </div>
              </a>
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
