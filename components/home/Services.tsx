import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Visa Application Processing',
    description:
      'Expert guidance and processing for all visa types: Work, Study, Tourist, Business. Fast, reliable, and stress-free.',
    image: '/Visa applicationprocessing.jpeg',
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
    image: '/flightbooking.jpeg',
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
    image: '/HotelAccomodations.jpeg',
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
    image: '/visaconsultation.jpeg',
    link: '/services/visa-consultation',
    features: [
      'Expert guidance',
      'Visa-free destinations',
      'Requirements analysis',
      'Strategy planning',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-800 mb-3">
                    Key Features:
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/2349136201808?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat with Us
                </a>
              </div>
            </div>
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
