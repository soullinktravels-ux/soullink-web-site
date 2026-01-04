import Link from 'next/link';

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description:
      'Schedule a free consultation with our visa experts to discuss your goals and determine the best visa options for your situation.',
    details: [
      'Assessment of your profile and eligibility',
      'Discussion of destination countries and visa types',
      'Timeline and cost estimation',
      'Document checklist preparation',
    ],
    icon: '💬',
    duration: '1-2 days',
  },
  {
    step: 2,
    title: 'Document Collection',
    description:
      'Gather all required documents including passport, financial statements, employment letters, and supporting materials.',
    details: [
      'Passport (valid for at least 6 months)',
      'Financial statements and bank statements',
      'Employment verification and salary slips',
      'Educational certificates and transcripts',
      'Medical certificates and insurance',
      'Police clearance certificates',
    ],
    icon: '📄',
    duration: '1-4 weeks',
  },
  {
    step: 3,
    title: 'Application Preparation',
    description:
      'Our team prepares your visa application forms, writes supporting letters, and organizes all documents for submission.',
    details: [
      'Form completion and review',
      'Cover letter and supporting statement drafting',
      'Document organization and verification',
      'Application fee calculation and payment',
    ],
    icon: '✍️',
    duration: '3-7 days',
  },
  {
    step: 4,
    title: 'Application Submission',
    description:
      'Submit your visa application through the appropriate embassy or consulate with our assistance and tracking.',
    details: [
      'Appointment scheduling at embassy/consulate',
      'Application submission and biometrics',
      'Application tracking and status updates',
      'Follow-up on any additional requirements',
    ],
    icon: '📤',
    duration: '1-2 weeks',
  },
  {
    step: 5,
    title: 'Interview Preparation',
    description:
      'Prepare for your visa interview with mock interviews, common question practice, and confidence building.',
    details: [
      'Mock interview sessions',
      'Common question preparation',
      'Body language and presentation tips',
      'Last-minute document checks',
    ],
    icon: '🎯',
    duration: '1 week',
  },
  {
    step: 6,
    title: 'Visa Approval & Travel',
    description:
      'Receive your visa approval and get ready for your journey with travel arrangements and final preparations.',
    details: [
      'Visa approval notification',
      'Passport collection and verification',
      'Travel itinerary planning',
      'Pre-departure checklist completion',
    ],
    icon: '✈️',
    duration: '2-8 weeks',
  },
];

const successStats = [
  { label: 'Success Rate', value: '98%', description: 'Visa approval rate' },
  {
    label: 'Average Processing',
    value: '4-6 weeks',
    description: 'From start to finish',
  },
  {
    label: 'Countries Served',
    value: '25+',
    description: 'Global destinations',
  },
  {
    label: 'Years Experience',
    value: '10+',
    description: 'Industry expertise',
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-heading font-black mb-6"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            Our Application Process
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
          >
            A streamlined 6-step process designed to maximize your visa approval
            chances and minimize stress.
          </p>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-neutral-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Step-by-Step Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our proven methodology ensures every detail is covered for your
              visa application success.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  {/* Step Number and Icon */}
                  <div className="md:w-1/4 bg-primary text-white p-8 text-center flex flex-col justify-center">
                    <div className="text-6xl mb-4">{step.icon}</div>
                    <div className="text-4xl font-bold mb-2">
                      Step {step.step}
                    </div>
                    <div className="text-lg opacity-90">{step.duration}</div>
                  </div>

                  {/* Step Content */}
                  <div className="md:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 text-lg">
                      {step.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-neutral-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Typical Timeline
            </h2>
            <p className="text-xl text-neutral-600">
              Most applications are completed within 6-8 weeks from start to
              visa approval.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                    1-2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800">
                      Weeks 1-2: Preparation
                    </h3>
                    <p className="text-neutral-600">
                      Consultation, document collection, and application
                      preparation
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                    3-4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800">
                      Weeks 3-4: Submission
                    </h3>
                    <p className="text-neutral-600">
                      Application submission, biometrics, and initial processing
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                    5-6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800">
                      Weeks 5-6: Review
                    </h3>
                    <p className="text-neutral-600">
                      Embassy review, interview (if required), and decision
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                    7-8
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800">
                      Weeks 7-8: Approval
                    </h3>
                    <p className="text-neutral-600">
                      Visa approval, passport collection, and travel
                      preparations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Begin your visa application process today with our expert guidance
            and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              Start Your Application
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
