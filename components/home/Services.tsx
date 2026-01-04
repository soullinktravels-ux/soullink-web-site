// Make sure the path is correct; update as needed if the file is elsewhere
// Update the path below if ServiceCard is located elsewhere
import ServiceCard from '../shared/ServiceCard';
// If ServiceCard is in a different location, update the path accordingly, e.g.:
// import ServiceCard from '../components/shared/ServiceCard';

const services = [
  {
    title: 'Visa Application Processing',
    description:
      'Expert guidance for all visa types: Work, Study, Tourist, Business. Fast, reliable, and stress-free.',
    icon: '/images/services/visa-processing.jpg',
    link: '/services/visa-processing',
  },
  {
    title: 'Job Application Abroad',
    description:
      'Country-specific job search, CV review, and interview prep to land your dream job overseas.',
    icon: '/images/services/job-assistance.jpg',
    link: '/services/job-assistance',
  },
  {
    title: 'Migration Services',
    description:
      'Complete relocation packages and settlement support for a smooth transition to your new country.',
    icon: '/images/services/migration.jpg',
    link: '/services/migration',
  },
  {
    title: 'Flight Booking',
    description:
      'Best deals on flights, multi-destination planning, and travel support for your journey.',
    icon: '/images/services/flight-booking.jpg',
    link: '/services/flight-booking',
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
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Comprehensive Solutions for Your{' '}
            <span className="text-blue-600">Global Journey</span>
          </h3>
          <p className="text-gray-600 text-lg">
            From visa processing to job placement, we provide end-to-end support
            to ensure your international transition is smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
