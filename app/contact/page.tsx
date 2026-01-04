import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We'd love to help you plan your next journey. Reach out to us
            through any of the channels below and our team will be happy to
            assist you.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              {/* Office Address */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    18A Rumuibekwe Road, Port Harcourt, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a
                    href="tel:+2349039871982"
                    className="text-blue-600 hover:underline"
                  >
                    +234 7036 280 825
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-full">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/2349136201808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +234 913 620 1808
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Website</h3>
                  <a
                    href="https://www.soullinktravels.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.soullinktravels.com
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-red-100 p-3 rounded-full">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@soullinktravels.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@soullinktravels.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-amber-100 p-3 rounded-full">
                  <span className="text-2xl">🕘</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday – Friday: 9:00 AM – 5:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 ..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-slate-900 font-bold py-4 rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Find Us
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7776!2d7.0134!3d4.8156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRumuibekwe%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1640000000000!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Our team is standing by to help you with your visa application,
            flight booking, and travel needs.
          </p>
          <a
            href="https://wa.me/2349136201808"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-all shadow-lg hover:scale-105"
          >
            <span className="text-xl">💬</span>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
