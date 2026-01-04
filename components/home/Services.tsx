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
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-heading font-black text-center mb-12 text-blue-900"
          style={{ textShadow: '0 2px 4px rgba(30,64,175,0.3)' }}
        >
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
