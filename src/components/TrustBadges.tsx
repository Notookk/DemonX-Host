import { motion } from 'framer-motion';
import { Shield, Zap, Clock, Headphones } from 'lucide-react';

const badges = [
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Guaranteed availability with enterprise-grade infrastructure and redundant systems',
  },
  {
    icon: Shield,
    title: 'Anti-DDoS Protection',
    description: 'Enterprise-grade DDoS mitigation protecting your servers from all attack vectors',
  },
  {
    icon: Zap,
    title: '60-Second Provisioning',
    description: 'Instant deployment with automated systems. Your server ready in under a minute',
  },
  {
    icon: Headphones,
    title: '24/7 Priority Support',
    description: 'Round-the-clock expert support via Telegram. We respond in minutes, not hours',
  },
];

const TrustBadges = () => {
  return (
    <section id="features" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient-demon">Demon VPS</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for performance, secured for peace of mind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-space text-xl font-bold mb-3">{badge.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
