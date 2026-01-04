'use client';
import React, { useState } from 'react';

const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'India',
  'China',
  'Japan',
  'South Africa',
  // Add more countries as needed
];

export default function VisaEnquiryPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' && 'checked' in target
          ? (target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission (API call or email)
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900/20 backdrop-blur-md p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden border border-blue-100">
        {/* Decorative top bar */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400 w-full" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-50 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-gray-800 leading-tight">
            All it takes is 2 hours for a{' '}
            <span className="text-blue-600">visa-free</span> experience. <br />
            <span className="text-blue-500 text-xl font-semibold">
              No Stress, No Delays
            </span>
          </h2>
          <p className="mb-8 text-center text-gray-500 text-sm">
            Fill up the form and our Visa Assistance Team will back to you
            shortly
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234 ..."
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">
                  Country of Interest
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 appearance-none"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all cursor-pointer"
                required
              />
              <label
                htmlFor="agree"
                className="text-sm text-gray-600 cursor-pointer leading-tight"
              >
                I agree to Term and Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-4"
            >
              Enquire Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
