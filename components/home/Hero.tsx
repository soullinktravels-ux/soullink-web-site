import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-primary/80 to-secondary/80 text-white overflow-hidden">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Global travel success"
        fill
        className="object-cover object-center -z-10 opacity-70"
        priority
      />
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-lg animate-fade-in">
          Your Gateway to Global Opportunities
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-medium animate-fade-in delay-100">
          Simplifying Visa Applications, Job Placement Abroad, and International
          Travel for Nigerians.
        </p>
        <div className="flex gap-4 mb-8 animate-fade-in delay-200">
          <a
            href="/contact"
            className="px-6 py-3 rounded bg-secondary text-white font-bold shadow hover:bg-primary transition"
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded border border-white text-white font-bold hover:bg-white hover:text-primary transition"
          >
            Book Consultation
          </a>
        </div>
        <div className="flex gap-8 justify-center mt-6 animate-fade-in delay-300">
          <div>
            <span className="text-3xl font-bold">10+</span>
            <div className="text-sm">Years Experience</div>
          </div>
          <div>
            <span className="text-3xl font-bold">2,000+</span>
            <div className="text-sm">Successful Applications</div>
          </div>
          <div>
            <span className="text-3xl font-bold">20+</span>
            <div className="text-sm">Countries Covered</div>
          </div>
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-transparent pointer-events-none" />
    </section>
  );
}
