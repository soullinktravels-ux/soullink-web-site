import Link from 'next/link';

const countries = [
  { name: 'Turkey', flag: '🇹🇷', eVisa: true },
  { name: 'India', flag: '🇮🇳', eVisa: true },
  { name: 'Sri Lanka', flag: '🇱🇰', eVisa: true },
  { name: 'Vietnam', flag: '🇻🇳', eVisa: true },
  { name: 'Thailand', flag: '🇹🇭', eVisa: true },
  { name: 'Malaysia', flag: '🇲🇾', eVisa: true },
  { name: 'United States', flag: '🇺🇸', eVisa: false },
  { name: 'United Kingdom', flag: '🇬🇧', eVisa: false },
  { name: 'Canada', flag: '🇨🇦', eVisa: false },
  { name: 'Australia', flag: '🇦🇺', eVisa: false },
  { name: 'Germany', flag: '🇩🇪', eVisa: false },
  { name: 'UAE', flag: '🇦🇪', eVisa: false },
];

export default function CountriesPage() {
  const eVisaCountries = countries.filter((country) => country.eVisa);
  const traditionalVisaCountries = countries.filter(
    (country) => !country.eVisa
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-heading font-black mb-6"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Visa Destinations
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            Choose your destination and explore visa options for tourism, work,
            and study opportunities.
          </p>
        </div>
      </section>

      {/* E-Visa Countries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              E-Visa Available
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Fast-track your travel plans with electronic visas for these
              popular destinations.
            </p>
            <Link
              href="/e-visa"
              className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Apply for E-Visa
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {eVisaCountries.map((country) => (
              <div
                key={country.name}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="font-semibold text-neutral-800">
                  {country.name}
                </h3>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                    E-Visa Available
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Visa Countries */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Traditional Visa Processing
            </h2>
            <p className="text-xl text-neutral-600">
              Comprehensive visa assistance for countries requiring embassy
              processing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {traditionalVisaCountries.map((country) => (
              <div
                key={country.name}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="font-semibold text-neutral-800">
                  {country.name}
                </h3>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                    Full Service
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Visa Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From quick e-visas to complex work permits, we handle all types of
              visa applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-3">E-Visa Processing</h3>
              <p className="text-neutral-600 mb-4">
                Fast electronic visa applications for multiple countries with
                24-72 hour processing.
              </p>
              <Link
                href="/e-visa"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🏛️
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Embassy Applications
              </h3>
              <p className="text-neutral-600 mb-4">
                Complete assistance with embassy appointments, document
                preparation, and interviews.
              </p>
              <Link
                href="/services"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📋
              </div>
              <h3 className="text-xl font-semibold mb-3">Document Services</h3>
              <p className="text-neutral-600 mb-4">
                Professional document translation, attestation, and legalization
                services.
              </p>
              <Link
                href="/services"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing a Destination?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts can help you determine the best country for your goals
            and guide you through the visa process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/e-visa"
              className="inline-block px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Apply for E-Visa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
