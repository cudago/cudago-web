import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ServicesGrid from '@/components/ServicesGrid';
import TrustSection from '@/components/TrustSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ServicesGrid />
      <TrustSection />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </>
  );
}
