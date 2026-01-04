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
    const duration = 1200;
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
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-12">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <div className="text-5xl font-extrabold text-blue-900 mb-2">
              {counts[i]}
              {stat.suffix}
            </div>
            <div className="text-lg font-medium text-neutral-700">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
