import HeroCarousel from '../components/home/HeroCarousel';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
