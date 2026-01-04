import Link from 'next/link';

const eVisaCountries = [
  {
    name: 'Turkey',
    flag: '🇹🇷',
    processingTime: '24-72 hours',
    validity: '90 days',
    fee: '$80',
    description: 'Popular destination with rich culture and history.',
  },
  {
    name: 'India',
    flag: '🇮🇳',
    processingTime: '24-72 hours',
    validity: '60-365 days',
    fee: '$80-$160',
    description: 'Diverse landscapes and vibrant culture.',
  },
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    processingTime: '24 hours',
    validity: '30 days',
    fee: '$80',
    description: 'Tropical paradise with ancient heritage.',
  },
  {
    name: 'Vietnam',
    flag: '🇻🇳',
    processingTime: '3-5 days',
    validity: '30-90 days',
    fee: '$25-$50',
    description: 'Beautiful landscapes and delicious cuisine.',
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    processingTime: '3-5 days',
    validity: '60 days',
    fee: '$80',
    description: 'Tropical beaches and Buddhist temples.',
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    processingTime: '3-5 days',
    validity: '90 days',
    fee: '$50',
    description: 'Modern cities and natural wonders.',
  },
];

const eVisaBenefits = [
  {
    icon: '⚡',
    title: 'Fast Processing',
    description:
      'Get your visa approved in as little as 24 hours, much faster than traditional visas.',
  },
  {
    icon: '💻',
    title: 'Online Application',
    description:
      'Apply from anywhere in the world using your computer or mobile device.',
  },
  {
    icon: '💰',
    title: 'Cost Effective',
    description: 'Lower fees compared to embassy visits and courier services.',
  },
  {
    icon: '🛡️',
    title: 'Secure & Reliable',
    description:
      'Official government systems with secure payment and data protection.',
  },
  {
    icon: '📱',
    title: 'Digital Convenience',
    description:
      'Receive your visa electronically - no need to visit embassies or consulates.',
  },
  {
    icon: '🌍',
    title: 'Multiple Destinations',
    description:
      'Access to popular tourist and business destinations worldwide.',
  },
];

const applicationSteps = [
  {
    step: 1,
    title: 'Choose Destination',
    description:
      'Select your preferred country and visa type from our available options.',
  },
  {
    step: 2,
    title: 'Fill Application Form',
    description:
      'Complete the online application form with your personal and travel details.',
  },
  {
    step: 3,
    title: 'Upload Documents',
    description:
      'Scan and upload required documents like passport, photos, and supporting files.',
  },
  {
    step: 4,
    title: 'Make Payment',
    description:
      'Pay the visa fee securely online using credit card or other payment methods.',
  },
  {
    step: 5,
    title: 'Submit & Track',
    description: 'Submit your application and track the status in real-time.',
  },
  {
    step: 6,
    title: 'Receive E-Visa',
    description:
      'Get your approved e-visa via email within the processing time.',
  },
];

export default function EVisaPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-heading font-black mb-6"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            E-Visa Services
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            Fast, convenient, and secure electronic visa processing for popular
            destinations worldwide.
          </p>
        </div>
      </section>

      {/* What is E-Visa Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">
              What is an E-Visa?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              An Electronic Visa (E-Visa) is a digital visa that allows
              travelers to enter a country without the need for a traditional
              paper visa stamp in their passport. It&apos;s obtained online
              through official government portals and delivered electronically
              via email.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Fast Approval</h3>
                <p className="text-neutral-600">
                  Most e-visas are approved within 24-72 hours
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2">100% Online</h3>
                <p className="text-neutral-600">
                  No embassy visits or paper documents required
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2">Digital Delivery</h3>
                <p className="text-neutral-600">
                  Receive your visa instantly via email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Why Choose E-Visa?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experience the convenience and speed of modern visa processing
              with our comprehensive e-visa services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eVisaBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Countries */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Available E-Visa Countries
            </h2>
            <p className="text-xl text-neutral-600">
              Choose from our extensive list of popular destinations offering
              e-visa services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eVisaCountries.map((country) => (
              <div
                key={country.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-32 relative bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                  <div className="text-6xl mb-2">{country.flag}</div>
                  <h3 className="text-xl font-bold text-white">
                    {country.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-700 mb-4">{country.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-primary">
                        Processing:
                      </span>
                      <span className="text-neutral-600">
                        {country.processingTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-primary">
                        Validity:
                      </span>
                      <span className="text-neutral-600">
                        {country.validity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-primary">Fee:</span>
                      <span className="text-neutral-600">{country.fee}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Simple Application Process
            </h2>
            <p className="text-xl text-neutral-600">
              Follow these easy steps to get your e-visa approved quickly and
              hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center mb-8">
              General Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  📋 Required Documents
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Valid passport (minimum 6 months validity)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Recent passport-sized photos
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Flight itinerary or travel plans
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hotel booking confirmation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Proof of sufficient funds
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  💳 Payment & Processing
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Secure online payment (credit/debit cards)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Processing time: 24 hours to 5 days
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Email delivery of approved visa
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Multiple entry options available
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    24/7 customer support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Apply for Your E-Visa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your hassle-free e-visa application today and get approved in
            record time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              Apply Now
            </Link>
            <Link
              href="/countries"
              className="inline-block px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              View All Countries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
