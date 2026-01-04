import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-8 text-lg">
          Book a consultation or begin your visa application process with our
          expert team today.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-secondary text-white font-bold rounded shadow hover:bg-white hover:text-primary transition"
          >
            Book Consultation
          </Link>
          <Link
            href="/services/visa-processing"
            className="px-8 py-4 border border-white text-white font-bold rounded hover:bg-white hover:text-primary transition"
          >
            Start Visa Application
          </Link>
        </div>
      </div>
    </section>
  );
}
