'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Success Rate', value: 98, suffix: '%' },
  { label: 'Countries', value: 20, suffix: '+' },
  { label: 'Clients Served', value: 2000, suffix: '+' },
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let start = stats.map(() => 0);
    const duration = 1500;
    const steps = 60;
    const increments = stats.map((stat) => Math.ceil(stat.value / steps));
    let currentStep = 0;

    function animate() {
      currentStep++;
      start = start.map((val, i) => {
        const next = val + increments[i];
        return next > stats[i].value ? stats[i].value : next;
      });
      setCounts([...start]);
      if (currentStep < steps) {
        animationRef.current = setTimeout(animate, duration / steps);
      } else {
        setCounts(stats.map((stat) => stat.value));
      }
    }
    animate();
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                  {counts[i].toLocaleString()}
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
              </div>
              <div className="text-blue-100 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
