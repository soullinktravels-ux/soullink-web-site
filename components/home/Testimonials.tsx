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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
            Success Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Trusted by Thousands of{' '}
            <span className="text-blue-600">Global Travelers</span>
          </h3>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with SoulLink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
