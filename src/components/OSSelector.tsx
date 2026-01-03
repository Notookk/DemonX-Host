import { motion } from 'framer-motion';
import { Monitor, Server, Globe } from 'lucide-react';
import { useOrder } from '@/context/OrderContext';

const operatingSystems = [
  { id: 'win10', name: 'Windows 10', icon: Monitor, category: 'Windows' },
  { id: 'win2022', name: 'Server 2022', icon: Server, category: 'Windows' },
  { id: 'ubuntu', name: 'Ubuntu 22.04', icon: Server, category: 'Linux' },
  { id: 'centos', name: 'CentOS 8', icon: Server, category: 'Linux' },
];

const locations = [
  { id: 'europe', name: 'Europe', flag: '🇪🇺' },
  { id: 'usa', name: 'USA', flag: '🇺🇸' },
  { id: 'asia', name: 'Asia', flag: '🇸🇬' },
];

const OSSelector = () => {
  const { selectedOS, setSelectedOS, selectedLocation, setSelectedLocation } = useOrder();

  const handleOSSelect = (osName: string) => {
    setSelectedOS(osName);
  };

  const handleLocationSelect = (locationName: string) => {
    setSelectedLocation(locationName);
  };

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient-demon">Configuration</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Full admin access on all operating systems. Instant installation included.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 space-y-8"
        >
          {/* OS Selection */}
          <div>
            <h3 className="font-space text-xl font-bold mb-4 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-primary" />
              Operating System
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {operatingSystems.map((os) => (
                <button
                  key={os.id}
                  onClick={() => handleOSSelect(os.name)}
                  className={`relative p-6 rounded-xl transition-all duration-300 ${
                    selectedOS === os.name
                      ? 'bg-primary/20 border-2 border-primary shadow-glow-sm'
                      : 'bg-muted/30 border-2 border-transparent hover:border-border'
                  }`}
                >
                  <os.icon
                    className={`w-10 h-10 mx-auto mb-3 ${
                      selectedOS === os.name ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                  <div className={`font-medium text-sm ${
                    selectedOS === os.name ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {os.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{os.category}</div>
                  
                  {selectedOS === os.name && (
                    <motion.div
                      layoutId="os-indicator"
                      className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Location Selection */}
          <div>
            <h3 className="font-space text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Server Location
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationSelect(location.name)}
                  className={`relative p-4 rounded-xl transition-all duration-300 ${
                    selectedLocation === location.name
                      ? 'bg-primary/20 border-2 border-primary shadow-glow-sm'
                      : 'bg-muted/30 border-2 border-transparent hover:border-border'
                  }`}
                >
                  <div className="text-3xl mb-2">{location.flag}</div>
                  <div className={`font-medium text-sm ${
                    selectedLocation === location.name ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {location.name}
                  </div>
                  
                  {selectedLocation === location.name && (
                    <motion.div
                      layoutId="location-indicator"
                      className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                All OS pre-installed
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Custom ISO available
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Reinstall anytime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OSSelector;
