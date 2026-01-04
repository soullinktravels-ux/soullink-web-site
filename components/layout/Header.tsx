'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-1 px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.jpg"
            alt="Soullink Logo"
            width={80}
            height={80}
            className="rounded-full object-cover"
            priority
          />
          {/* <span
            className="text-2xl font-heading font-extrabold hidden sm:inline"
            style={{
              color: '#1E40AF',
              textShadow: '0 1px 2px rgba(30,64,175,0.15)',
            }}
          >
            SoulLink <span className="text-red-900">Travels</span>
          </span> */}
          <Image
            src="/logo/logo5.jpg"
            alt="Soullink Logo5"
            width={100}
            height={100}
            className="rounded-full object-cover"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-neutral-700 font-medium items-center">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 bg-amber-500 text-white rounded-lg font-bold hover:bg-blue-700 transition shadow-md"
          >
            Contact Us
          </Link>
        </nav>
        <button 
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {/* Hamburger / Close icon */}
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link 
              href="/" 
              className="text-slate-700 font-medium py-2 hover:text-amber-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-slate-700 font-medium py-2 hover:text-amber-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-slate-700 font-medium py-2 hover:text-amber-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-400 transition shadow-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
