import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with image and overlay */}
      <div className="absolute inset-0 bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent z-10" />
        <div className="absolute inset-0 opacity-30 bg-[url('/images/hero/hero-main.jpg')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Start Your <br />
            <span className="text-blue-400">Global Journey?</span>
          </h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl leading-relaxed">
            Join thousands of successful Nigerians who have achieved their
            dreams of traveling, working, and living abroad with SoulLink
            Travels.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://wa.me/2349136201808?text=Hello%2C%20I%27d%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/20 hover:bg-blue-400 hover:scale-105 transition-all duration-300 text-center text-lg"
            >
              Book a Free Consultation
            </a>
            <Link
              href="/services"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-center text-lg"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4 text-blue-200">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-blue-900 bg-blue-800 flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">
              Join 2,000+ successful applicants today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
