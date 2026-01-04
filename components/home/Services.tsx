// Make sure the path is correct; update as needed if the file is elsewhere
// Update the path below if ServiceCard is located elsewhere
import ServiceCard from '../shared/ServiceCard';
import Link from 'next/link';
// If ServiceCard is in a different location, update the path accordingly, e.g.:
// import ServiceCard from '../components/shared/ServiceCard';

const services = [
  {
    title: 'Visa Application Processing',
    description:
      'Expert guidance and processing for all visa types: Work, Study, Tourist, Business. Fast, reliable, and stress-free.',
    icon: '/images/services/visa-processing.jpg',
    link: '/services/visa-processing',
  },
  {
    title: 'Flight Booking',
    description:
      'Best deals on flights, multi-destination planning, and travel support for your journey.',
    icon: '/images/services/flight-booking.jpg',
    link: '/services/flight-booking',
  },
  {
    title: 'Hotel/Accommodation Reservation',
    description:
      'Secure bookings for hotels, resorts, apartments. Comfortable stays worldwide.',
    icon: '/images/services/migration.jpg',
    link: '/services/accommodation',
  },
  {
    title: 'Visa Consultation',
    description:
      'Personalized expert advice on visa options, requirements and strategies including visa-free destinations for Nigerians.',
    icon: '/images/services/job-assistance.jpg',
    link: '/services/visa-consultation',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Comprehensive Solutions for Your{' '}
            <span className="text-blue-600">Global Journey</span>
          </h3>
          <p className="text-gray-600 text-lg">
            From visa processing to accommodation booking, we provide end-to-end
            support to ensure your international travel is smooth and
            successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Ready to Get Started CTA */}
        <div className="mt-20 text-center bg-slate-900 rounded-2xl p-10 max-w-3xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h4>
          <p className="text-slate-300 mb-8 text-lg">
            Contact our experts today to discuss your specific needs and get
            personalized guidance.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-all shadow-lg hover:scale-105 text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
