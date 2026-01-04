import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          {/* <p className="text-amber-400 font-semibold mb-2 uppercase tracking-wider">
            About
          </p> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Soullink Travels
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Your trusted partner for seamless international travel experiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Soullink Travels is a professional travel and visa assistance
              company committed to making international travel simple, reliable,
              and accessible. We provide expert guidance and tailored travel
              solutions to individuals and families seeking opportunities abroad
              for leisure, education, work, or business.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With a strong focus on clarity, transparency, and customer
              satisfaction, we support our clients through every stage of their
              travel, from consultation and documentation to booking and
              departure. Our services include Visit, Work, and Study Visa
              assistance, Flight Booking, Hotel Reservation, and Travel
              Consultation, all delivered with professionalism and attention to
              detail.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Based in Port Harcourt, Nigeria, Soullink Travels is built on
              trust, integrity, and excellence. We are dedicated to helping our
              clients travel with confidence and connect seamlessly to global
              destinations.
            </p>
          </div>

          {/* Highlight Quote */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-8 md:p-12 text-center mb-12 shadow-lg">
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              "At Soullink Travels, we don't just plan trips, we connect you to
              the world."
            </p>
          </div>

          {/* Our Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Trust</h3>
              <p className="text-slate-600">
                Building lasting relationships through honesty and reliability
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Integrity
              </h3>
              <p className="text-slate-600">
                Operating with transparency and ethical standards
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Excellence
              </h3>
              <p className="text-slate-600">
                Delivering outstanding service with attention to detail
              </p>
            </div>
          </div>

          {/* Our Services Summary */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              What We Offer
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Visit Visa Assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Work Visa Assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Study Visa Assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Flight Booking</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Hotel Reservation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Travel Consultation</span>
              </div>
            </div>
          </div>

          {/* Brand Tagline */}
          <div className="text-center">
            <Image
              src="/logo/logo.jpg"
              alt="Soullink Travels"
              width={150}
              height={75}
              className="mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Soullink Travels
            </h3>
            <p className="text-amber-600 font-semibold text-lg">
              Your Link to Global Destinations
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg shadow-lg transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
