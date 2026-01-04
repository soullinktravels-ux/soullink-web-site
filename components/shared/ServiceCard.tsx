import Image from 'next/image';
import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  link,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl p-8 flex flex-col items-center text-center transition-all duration-500 border border-gray-100 hover:-translate-y-2 relative overflow-hidden">
      {/* Hover background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-24 h-24 mb-8 relative z-10">
        <div className="absolute inset-0 bg-blue-100 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover rounded-full border-4 border-white shadow-md relative z-10"
        />
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors relative z-10">
        {title}
      </h3>
      <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10">
        {description}
      </p>

      <Link
        href={link}
        className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-gray-50 text-blue-600 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Link>
    </div>
  );
}
