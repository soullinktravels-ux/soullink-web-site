import Image from 'next/image';

type TestimonialCardProps = {
  name: string;
  country: string;
  quote: string;
  photo: string;
};

export default function TestimonialCard({
  name,
  country,
  quote,
  photo,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 flex flex-col transition-all duration-300 border border-gray-100 relative">
      {/* Quote icon */}
      <div className="absolute top-6 right-8 text-blue-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56928 13 5.017 13H3.017V21H5.017Z" />
        </svg>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 relative flex-shrink-0">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover rounded-full border-2 border-blue-100 shadow-sm"
          />
        </div>
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-blue-600 font-medium">{country}</div>
        </div>
      </div>

      <blockquote className="text-gray-600 leading-relaxed relative z-10 italic">
        "{quote}"
      </blockquote>

      <div className="mt-6 flex gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
