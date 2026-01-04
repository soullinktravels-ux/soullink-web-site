export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-lg">Soullink Travels</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Soullink Travels is committed to protecting your privacy and
              safeguarding your personal information. This Privacy Policy
              explains how we collect, use, store, and protect your information
              when you interact with our services, website, or office.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Information We Collect
              </h2>
              <p className="text-slate-600 mb-4">
                We may collect the following personal information from you:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Full name</li>
                <li>Phone number and email address</li>
                <li>Residential address</li>
                <li>Passport details</li>
                <li>Travel history and destination details</li>
                <li>
                  Educational or employment information (for study/work visas)
                </li>
                <li>
                  Any other information required for travel or visa processing
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                How We Use Your Information
              </h2>
              <p className="text-slate-600 mb-4">
                Your information is collected strictly to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Process visa applications and travel documentation</li>
                <li>Provide travel consultation and advisory services</li>
                <li>Book flights, hotels, and related travel services</li>
                <li>
                  Communicate with you regarding your application or bookings
                </li>
                <li>Comply with legal or regulatory requirements</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Information Sharing
              </h2>
              <p className="text-slate-600 mb-3">
                <strong>
                  We do not sell or trade your personal information.
                </strong>
              </p>
              <p className="text-slate-600 mb-4">
                Your data may only be shared with:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                <li>Embassies, consulates, and immigration authorities</li>
                <li>Airlines, hotels, and travel service providers</li>
                <li>
                  Trusted third parties involved in your travel processing
                </li>
              </ul>
              <p className="text-slate-600 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                All sharing is done strictly for service delivery purposes.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                Data Protection & Security
              </h2>
              <p className="text-slate-600">
                We take reasonable and appropriate measures to protect your
                personal data against loss, misuse, unauthorized access, or
                disclosure. Access to client information is limited to
                authorized personnel only.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                Data Retention
              </h2>
              <p className="text-slate-600">
                We retain your personal information only for as long as
                necessary to fulfill the purpose for which it was collected or
                as required by law.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </span>
                Your Rights
              </h2>
              <p className="text-slate-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data where applicable</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </span>
                Updates to This Policy
              </h2>
              <p className="text-slate-600">
                Soullink Travels may update this Privacy Policy from time to
                time. Any changes will be posted on this page.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-4">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </span>
                Contact Us
              </h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                <p className="text-slate-700">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info@soullinktravels.com"
                    className="text-amber-600 hover:text-amber-700 underline"
                  >
                    info@soullinktravels.com
                  </a>
                </p>
                <p className="text-slate-700">
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://www.soullinktravels.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-700 underline"
                  >
                    www.soullinktravels.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
