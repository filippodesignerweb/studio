
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Targets } from '@/components/Targets';
import { Portfolio } from '@/components/Portfolio';
import { LogoMarquee } from '@/components/LogoMarquee';
import { Timeline } from '@/components/Timeline';
import { SalesCards } from '@/components/SalesCards';
import { Technology } from '@/components/Technology';
import { AboutUs } from '@/components/AboutUs';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Stats />
      <Targets />
      <Portfolio />
      <LogoMarquee />
      <Timeline />
      <SalesCards />
      <Technology />
      <AboutUs />
      <FAQ />
      <Footer />
    </main>
  );
}
