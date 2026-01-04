import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Visa Application Processing',
    description:
      'Expert guidance and processing for all visa types: Work, Study, Tourist, Business. Fast, reliable, and stress-free.',
    icon: '/images/services/visa-processing.jpg',
    link: '/services/visa-processing',
    features: [
      'Document preparation',
      'Application submission',
      'Status tracking',
      'Interview preparation',
    ],
  },
  {
    title: 'Flight Booking',
    description:
      'Best deals on flights, multi-destination planning, and travel support for your journey.',
    icon: '/images/services/flight-booking.jpg',
    link: '/services/flight-booking',
    features: [
      'Competitive pricing',
      'Flexible booking',
      'Travel insurance',
      '24/7 support',
    ],
  },
  {
    title: 'Hotel/Accommodation Reservation',
    description:
      'Secure bookings for hotels, resorts, apartments. Comfortable stays worldwide.',
    icon: '/images/services/migration.jpg',
    link: '/services/accommodation',
    features: [
      'Hotel bookings',
      'Resort reservations',
      'Apartment rentals',
      'Worldwide coverage',
    ],
  },
  {
    title: 'Visa Consultation',
    description:
      'Personalized expert advice on visa options, requirements and strategies including visa-free destinations for Nigerians.',
    icon: '/images/services/job-assistance.jpg',
    link: '/services/visa-consultation',
    features: [
      'Expert guidance',
      'Visa-free destinations',
      'Requirements analysis',
      'Strategy planning',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-heading font-black mb-6 text-white"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Our Comprehensive Services
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            From visa processing to flight booking, we provide end-to-end
            solutions for your international journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 mr-4 relative">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-cover rounded-full border-4 border-primary/20"
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-neutral-700 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">
                      Key Features:
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-neutral-600"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={service.link}
                    className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss your specific needs and get
            personalized guidance.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
