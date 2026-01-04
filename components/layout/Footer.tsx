export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-bold">
          SoullinkTravels &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-6 text-neutral-400 text-sm">
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms of Service
          </a>
          <a
            href="mailto:info@soullinktravels.com"
            className="hover:text-white"
          >
            info@soullinktravels.com
          </a>
        </div>
      </div>
    </footer>
  );
}
