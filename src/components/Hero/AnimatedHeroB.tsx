import {motion} from 'motion/react';
import type React from 'react';

export function AnimatedHeroB({children}: {children: React.ReactNode}) {
  const gridLines = Array.from({length: 20}, (_, i) => i);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(180, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180, 0, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {gridLines.slice(0, 10).map((index) => (
          <motion.div
            key={`vertical-${index}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-neon-purple to-transparent"
            style={{
              left: `${(index + 1) * 10}%`,
              top: 0,
              bottom: 0,
              opacity: 0.3,
            }}
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.1,
            }}
          />
        ))}
        {gridLines.slice(0, 10).map((index) => (
          <motion.div
            key={`horizontal-${index}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
            style={{
              top: `${(index + 1) * 10}%`,
              left: 0,
              right: 0,
              opacity: 0.3,
            }}
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.15,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {gridLines.map((index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-1 h-1 bg-neon-purple dark:bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{opacity: 0, scale: 0.95}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8, ease: 'easeOut'}}
          className="text-center max-w-4xl mx-auto"
        >
          {children}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{y: [0, 10, 0]}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          className="w-8 h-8 text-neon-purple dark:text-neon-cyan opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function HeroTitleB({children}: {children: React.ReactNode}) {
  return (
    <motion.h1
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2, duration: 0.6}}
      className="text-5xl md:text-7xl font-extrabold mb-6"
    >
      <span className="bg-gradient-neon bg-clip-text text-transparent filter drop-shadow-lg">
        {children}
      </span>
    </motion.h1>
  );
}

export function HeroSubtitleB({children}: {children: React.ReactNode}) {
  return (
    <motion.p
      initial={{opacity: 0, y: -10}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.4, duration: 0.6}}
      className="text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-8"
    >
      {children}
    </motion.p>
  );
}

export function HeroActionsB({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.6, duration: 0.6}}
      className="flex flex-wrap gap-4 justify-center"
    >
      {children}
    </motion.div>
  );
}
