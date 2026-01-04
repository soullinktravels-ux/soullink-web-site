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
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-neutral-200">
      <div className="w-20 h-20 mb-6 relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover rounded-full border-4 border-primary/20"
        />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-neutral-700 mb-6 flex-grow">{description}</p>
      <Link
        href={link}
        className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Learn More →
      </Link>
    </div>
  );
}
