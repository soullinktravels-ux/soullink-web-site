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
    <div className="bg-neutral-50 rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="w-16 h-16 mb-4 relative">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover rounded-full border-4 border-primary/20"
        />
      </div>
      <blockquote className="italic text-neutral-700 mb-4">
        “{quote}”
      </blockquote>
      <div className="font-bold text-primary">{name}</div>
      <div className="text-sm text-neutral-500">{country}</div>
    </div>
  );
}
