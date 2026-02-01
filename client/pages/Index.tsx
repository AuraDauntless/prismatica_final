import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import CTASection from '@/components/CTASection';
import GallerySection from '@/components/GallerySection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutSection />
      <MissionVisionSection />
      <CTASection />
      <GallerySection />
      <EventsSection />
      <Footer />
    </div>
  );
}
