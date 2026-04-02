import {motion} from 'motion/react';
import type React from 'react';

export function AnimatedHeroC({children}: {children: React.ReactNode}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-dark">
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(180, 0, 255, 0.5)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(180, 0, 255, 0.5)" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M0 ${200 + i * 100} Q ${window.innerWidth / 4} ${150 + i * 50}, ${
              window.innerWidth / 2
            } ${200 + i * 100} T ${window.innerWidth} ${200 + i * 100} V ${window.innerHeight} H 0 Z`}
            fill="url(#waveGradient)"
            animate={{
              d: [
                `M0 ${200 + i * 100} Q ${window.innerWidth / 4} ${150 + i * 50} ${window.innerWidth / 2} ${200 + i * 100} T ${window.innerWidth} ${200 + i * 100} V ${window.innerHeight} H 0 Z`,
                `M0 ${220 + i * 100} Q ${window.innerWidth / 4} ${170 + i * 50} ${window.innerWidth / 2} ${220 + i * 100} T ${window.innerWidth} ${220 + i * 100} V ${window.innerHeight} H 0 Z`,
                `M0 ${200 + i * 100} Q ${window.innerWidth / 4} ${150 + i * 50} ${window.innerWidth / 2} ${200 + i * 100} T ${window.innerWidth} ${200 + i * 100} V ${window.innerHeight} H 0 Z`,
              ],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8}}
          className="text-center max-w-4xl mx-auto"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
