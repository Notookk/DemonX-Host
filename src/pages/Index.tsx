import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProviderGallery from '@/components/ProviderGallery';
import TrustBadges from '@/components/TrustBadges';
import PricingCards from '@/components/PricingCards';
import OSSelector from '@/components/OSSelector';
import Footer from '@/components/Footer';
import { OrderProvider } from '@/context/OrderContext';

const Index = () => {
  return (
    <OrderProvider>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <ProviderGallery />
          <TrustBadges />
          <PricingCards />
          <OSSelector />
          <Footer />
        </div>
      </div>
    </OrderProvider>
  );
};

export default Index;
