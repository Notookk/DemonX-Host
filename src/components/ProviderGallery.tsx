import { motion } from 'framer-motion';

const providers = [
  { name: 'AWS', logo: 'aws' },
  { name: 'Google Cloud', logo: 'gcp' },
  { name: 'Microsoft Azure', logo: 'azure' },
  { name: 'DigitalOcean', logo: 'do' },
  { name: 'Hetzner', logo: 'hetzner' },
  { name: 'Vultr', logo: 'vultr' },
];

const ProviderLogo = ({ name }: { name: string }) => {
  // Simple monochromatic text-based logos
  return (
    <div className="flex items-center justify-center h-16 px-8 opacity-40 hover:opacity-80 transition-opacity duration-300">
      <span className="font-space text-2xl md:text-3xl font-bold tracking-wider text-foreground/70">
        {name}
      </span>
    </div>
  );
};

const ProviderGallery = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-space text-2xl md:text-3xl font-bold mb-4">
            Powered by <span className="text-gradient-demon">World-Class</span> Infrastructure
          </h2>
          <p className="text-muted-foreground">
            Enterprise hardware from leading cloud providers worldwide
          </p>
        </motion.div>
      </div>

      {/* Scrolling logos */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {[...providers, ...providers].map((provider, index) => (
            <div
              key={`${provider.name}-${index}`}
              className="flex-shrink-0 mx-8"
            >
              <ProviderLogo name={provider.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProviderGallery;
