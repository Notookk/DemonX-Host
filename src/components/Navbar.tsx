import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DemonLogo from './DemonLogo';

const TELEGRAM_LINK = 'https://t.me/DemonxWorld';
const TELEGRAM_USERNAME = 'WerewolfDemon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="z-50">
            <DemonLogo className="w-40" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={`https://t.me/${TELEGRAM_USERNAME}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 bg-background z-40 pt-24"
        >
          <div className="flex flex-col items-center gap-8 p-8">
            <a
              href="#pricing"
              className="text-2xl font-space font-bold hover:text-primary transition-colors"
              onClick={(e) => scrollToSection(e, 'pricing')}
            >
              Pricing
            </a>
            <a
              href="#features"
              className="text-2xl font-space font-bold hover:text-primary transition-colors"
              onClick={(e) => scrollToSection(e, 'features')}
            >
              Features
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-space font-bold hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </a>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              asChild
            >
              <a href={TELEGRAM_USERNAME} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Owner
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
