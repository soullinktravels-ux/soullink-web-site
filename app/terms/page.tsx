export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-300 text-lg">Soullink Travels</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              By engaging the services of Soullink Travels, you agree to the
              following Terms & Conditions. Please read them carefully.
            </p>

            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Scope of Services
              </h2>
              <p className="text-slate-600 mb-4">
                Soullink Travels provides travel-related services including but
                not limited to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Visa consultation and application assistance</li>
                <li>Flight booking</li>
                <li>Hotel and accommodation reservation</li>
                <li>Travel consultation and advisory services</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Visa Disclaimer
              </h2>
              <p className="text-slate-600 mb-3">
                Soullink Travels is a travel consultancy and{' '}
                <strong>does not issue visas</strong>.
              </p>
              <p className="text-slate-600">
                Visa approval or rejection is solely at the discretion of the
                relevant embassy, consulate, or immigration authority. We do not
                guarantee visa approval.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Client Responsibilities
              </h2>
              <p className="text-slate-600 mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                <li>Providing accurate, complete, and truthful information</li>
                <li>Submitting genuine and valid documents</li>
                <li>
                  Attending interviews or biometric appointments when required
                </li>
              </ul>
              <p className="text-slate-600 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                Soullink Travels will not be held liable for delays or refusals
                caused by false, incomplete, or misleading information provided
                by the client.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                Fees & Payments
              </h2>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Service fees are communicated before processing begins</li>
                <li>
                  All fees paid for consultation and processing are{' '}
                  <strong>non-refundable</strong> once service has commenced
                </li>
                <li>
                  Embassy fees and third-party charges are subject to change
                  without notice
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                Refund Policy
              </h2>
              <p className="text-slate-600 mb-4">
                Due to the nature of visa and travel services:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Consultation and processing fees are non-refundable</li>
                <li>
                  Refunds, where applicable, depend on third-party service
                  providers (airlines, hotels, embassies)
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </span>
                Limitation of Liability
              </h2>
              <p className="text-slate-600 mb-4">
                Soullink Travels shall not be held liable for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Visa refusal or delays</li>
                <li>
                  Decisions made by embassies, airlines, or immigration
                  authorities
                </li>
                <li>
                  Losses arising from incorrect information provided by the
                  client
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </span>
                Changes to Services
              </h2>
              <p className="text-slate-600">
                We reserve the right to modify, suspend, or discontinue any
                service at any time without prior notice.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </span>
                Governing Law
              </h2>
              <p className="text-slate-600">
                These Terms & Conditions are governed by the laws of the Federal
                Republic of Nigeria.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-4">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                  9
                </span>
                Contact Information
              </h2>
              <p className="text-slate-600 mb-4">
                For questions regarding these Terms & Conditions, please contact
                us:
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
