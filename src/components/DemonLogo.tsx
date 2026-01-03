import { motion } from 'framer-motion';

const DemonLogo = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full animate-glow-pulse" />
      
      {/* Logo container */}
      <div className="relative">
        <svg
          viewBox="0 0 280 60"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glow filter */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF3333" />
              <stop offset="50%" stopColor="#FF0000" />
              <stop offset="100%" stopColor="#CC0000" />
            </linearGradient>
          </defs>
          
          {/* Demon horns icon */}
          <g filter="url(#strongGlow)">
            <path
              d="M8 48 L18 12 L30 38 L42 12 L52 48"
              fill="none"
              stroke="url(#redGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Small inner accent */}
            <circle cx="30" cy="48" r="3" fill="url(#redGradient)" />
          </g>
          
          {/* DEMON text */}
          <text
            x="65"
            y="42"
            fill="url(#redGradient)"
            fontSize="34"
            fontWeight="700"
            fontFamily="Space Grotesk, sans-serif"
            letterSpacing="2"
            filter="url(#glow)"
          >
            DEMON
          </text>
          
          {/* VPS text */}
          <text
            x="200"
            y="42"
            fill="#F2F2F2"
            fontSize="28"
            fontWeight="500"
            fontFamily="Space Grotesk, sans-serif"
            letterSpacing="1"
          >
            VPS
          </text>
        </svg>
      </div>
    </motion.div>
  );
};

export default DemonLogo;
