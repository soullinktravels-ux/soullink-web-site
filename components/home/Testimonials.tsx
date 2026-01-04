import TestimonialCard from '../shared/TestimonialCard';

const testimonials = [
  {
    name: 'Chinedu A.',
    country: 'Canada',
    quote:
      'Soullink made my visa process seamless and stress-free. I am now working in Toronto!',
    photo: '/images/testimonials/client-1.jpg',
  },
  {
    name: 'Aisha B.',
    country: 'UK',
    quote:
      'Their team helped me secure a job and guided me through every step. Highly recommended!',
    photo: '/images/testimonials/client-2.jpg',
  },
  {
    name: 'Emeka O.',
    country: 'Australia',
    quote:
      'From application to flight booking, Soullink handled it all. Excellent service!',
    photo: '/images/testimonials/client-3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-center mb-12 text-primary">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
