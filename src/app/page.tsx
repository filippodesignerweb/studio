
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Targets } from '@/components/Targets';
import { SalesCards } from '@/components/SalesCards';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AboutUs } from '@/components/AboutUs';
import { AIProjectAssistant } from '@/components/AIProjectAssistant';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Targets />
      <AboutUs />
      <LogoMarquee />
      <SalesCards />
      <AIProjectAssistant />
      <FAQ />
      <Footer />
    </main>
  );
}
