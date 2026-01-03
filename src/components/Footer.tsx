import { motion } from 'framer-motion';
import { MessageCircle, Mail, Globe } from 'lucide-react';
import DemonLogo from './DemonLogo';

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <DemonLogo className="w-48 mb-4" />
            <p className="text-muted-foreground max-w-md">
              Premium VPS & RDP hosting with enterprise-grade infrastructure. 
              Unleash pure power for your projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://morning.is-a.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Dev Portfolio
                </a>
              </li>
              <li>
                <a href="https://t.me/xazoc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Contact Dev
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-space font-bold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
              <a
                  href="https://t.me/DemonxWorld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  @DemonxWorld
                </a>
              </li>
              <li>
                <a
                  href="mailto:notookk404@gmail.comm"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  notookk404@gmail.comm
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="w-5 h-5" />
                  24/7 Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Demon VPS. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://t.me/DemonxWorld"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
