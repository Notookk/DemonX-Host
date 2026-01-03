import { motion } from 'framer-motion';
import { Check, Cpu, HardDrive, Wifi, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOrder } from '@/context/OrderContext';

const TELEGRAM_USERNAME = 'WerewolfDemon';

const plans = [
  {
    name: 'Bronze',
    price: 5,
    badge: null,
    type: 'VPS',
    specs: {
      cpu: '4 vCPU Intel Xeon',
      ram: '6 GB DDR4',
      storage: '32 GB NVMe',
      bandwidth: '2 TB',
    },
    features: ['99.9% Uptime SLA', 'Basic DDoS Protection', 'Windows/Linux OS', '24/7 Support'],
  },
  {
    name: 'Silver',
    price: 10,
    badge: 'Most Popular',
    badgeClass: 'badge-popular',
    type: 'VPS',
    specs: {
      cpu: '4 vCPU Intel Xeon',
      ram: '8 GB DDR4',
      storage: '64 GB NVMe',
      bandwidth: '5 TB',
    },
    features: ['99.9% Uptime SLA', 'Enhanced DDoS Protection', 'Windows/Linux OS', 'Priority Support', 'Daily Backups'],
  },
  {
    name: 'Gold',
    price: 15,
    badge: 'Best for Gaming',
    badgeClass: 'badge-gaming',
    type: 'VPS',
    specs: {
      cpu: '6 vCPU AMD EPYC',
      ram: '16 GB DDR5',
      storage: '64 GB NVMe',
      bandwidth: '10 TB',
    },
    features: ['99.99% Uptime SLA', 'Advanced DDoS Protection', 'Windows/Linux OS', 'Priority Support', 'Daily Backups', 'Dedicated IP'],
  },
  {
    name: 'Demon',
    price: 25,
    badge: 'DDoS Protected',
    badgeClass: 'badge-ddos',
    featured: true,
    type: 'VPS',
    specs: {
      cpu: '8 vCPU AMD EPYC',
      ram: '16 GB DDR5',
      storage: '128 GB NVMe',
      bandwidth: 'Unlimited',
    },
    features: [
      '99.99% Uptime SLA',
      'Enterprise DDoS Protection',
      'Windows/Linux OS',
      'VIP 24/7 Support',
      'Hourly Backups',
      'Dedicated IP',
      'Custom Configurations',
    ],
  },
];

const PricingCards = () => {
  const { selectedOS, selectedLocation } = useOrder();

  const generateOrderMessage = (plan: typeof plans[0]) => {
    const message = `Hi! I would like to order the ${plan.name} plan.

📋 Order Details:
━━━━━━━━━━━━━━━━━
💰 Plan: ${plan.name} ($${plan.price}/mo)
🖥️ RAM: ${plan.specs.ram}
⚡ Cores: ${plan.specs.cpu}
💾 Storage: ${plan.specs.storage}
🌐 OS: ${selectedOS}
📍 Location: ${selectedLocation}
📦 Type: ${plan.type}
━━━━━━━━━━━━━━━━━

Please let me know the payment details!`;
    
    return encodeURIComponent(message);
  };

  const getTelegramLink = (plan: typeof plans[0]) => {
    return `https://t.me/${TELEGRAM_USERNAME}?text=${generateOrderMessage(plan)}`;
  };

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient-demon">Power Level</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade VPS & RDP with instant provisioning. All plans include full root access.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 flex flex-col ${
                plan.featured ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="mb-4">
                  <span className={plan.badgeClass}>{plan.badge}</span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="font-space text-2xl font-bold mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">${plan.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>

              {/* Specs */}
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-3 text-sm">
                  <Cpu className="h-4 w-4 text-primary" />
                  <span>{plan.specs.cpu}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Server className="h-4 w-4 text-primary" />
                  <span>{plan.specs.ram}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <HardDrive className="h-4 w-4 text-primary" />
                  <span>{plan.specs.storage}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Wifi className="h-4 w-4 text-primary" />
                  <span>{plan.specs.bandwidth} Bandwidth</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.featured
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground pulse-glow'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
                asChild
              >
                <a href={getTelegramLink(plan)} target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
