import {motion} from 'motion/react';
import type React from 'react';

function seedRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function AnimatedHeroD({children}: {children: React.ReactNode}) {
  const nodes = Array.from({length: 20}, (_, i) => ({
    id: i,
    x: seedRandom(i * 3 + 1) * 100,
    y: seedRandom(i * 3 + 2) * 100,
  }));

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-dark">
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradientD" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(180, 0, 255, 0.6)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(180, 0, 255, 0.6)" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="url(#lineGradientD)"
              strokeWidth="1"
              initial={{opacity: 0}}
              animate={{opacity: [0.2, 0.6, 0.2]}}
              transition={{
                duration: 2 + seedRandom(i * 7 + 1) * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          );
        })}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill={
              i % 2 === 0 ? 'rgba(180, 0, 255, 0.8)' : 'rgba(0, 240, 255, 0.8)'
            }
            initial={{scale: 0}}
            animate={{scale: [1, 1.5, 1]}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-neon-purple dark:bg-neon-cyan rounded-full"
            style={{
              left: `${seedRandom(i * 3 + 100) * 100}%`,
              top: `${seedRandom(i * 3 + 101) * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + seedRandom(i * 5 + 100) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: seedRandom(i * 5 + 101) * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8}}
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

export function HeroTitleD({children}: {children: React.ReactNode}) {
  return (
    <motion.h1
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2, duration: 0.6}}
      className="text-5xl md:text-7xl font-extrabold mb-6"
    >
      <span className="bg-gradient-neon bg-clip-text text-transparent">
        {children}
      </span>
    </motion.h1>
  );
}

export function HeroSubtitleD({children}: {children: React.ReactNode}) {
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

export function HeroActionsD({children}: {children: React.ReactNode}) {
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
