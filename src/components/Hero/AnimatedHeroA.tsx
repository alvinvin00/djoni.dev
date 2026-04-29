import {motion} from 'motion/react';
import type React from 'react';

function seedRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function AnimatedHeroA({children}: {children: React.ReactNode}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(180, 0, 255, 0.3) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 100, 50, 0],
            y: [0, 50, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
            right: '15%',
            top: '30%',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -80, -40, 0],
            y: [0, 80, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(180, 0, 255, 0.2) 0%, transparent 70%)',
            left: '50%',
            bottom: '20%',
            filter: 'blur(50px)',
          }}
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -60, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const rand1 = seedRandom(i * 3 + 1);
          const rand2 = seedRandom(i * 3 + 2);
          const rand3 = seedRandom(i * 3 + 3);
          const rand4 = seedRandom(i * 3 + 4);
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: rand1 * 4 + 2,
                height: rand2 * 4 + 2,
                left: `${rand3 * 100}%`,
                top: `${rand4 * 100}%`,
                backgroundColor:
                  i % 2 === 0
                    ? 'rgba(180, 0, 255, 0.3)'
                    : 'rgba(0, 240, 255, 0.3)',
                borderRadius: '50%',
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: seedRandom(i * 5 + 1) * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: seedRandom(i * 5 + 2) * 2,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => {
          const rand1 = seedRandom(i * 7 + 1);
          const rand2 = seedRandom(i * 7 + 2);
          const rand3 = seedRandom(i * 7 + 3);
          const rand4 = seedRandom(i * 7 + 4);
          const rand5 = seedRandom(i * 7 + 5);
          return (
            <motion.div
              key={`triangle-${i}`}
              className="absolute"
              style={{
                left: `${rand1 * 100}%`,
                top: `${rand2 * 100}%`,
                width: 0,
                height: 0,
                borderLeft: `${rand3 * 30 + 20}px solid transparent`,
                borderRight: `${rand4 * 30 + 20}px solid transparent`,
                borderBottom: `${rand5 * 35 + 25}px solid ${
                  i % 2 === 0
                    ? 'rgba(180, 0, 255, 0.2)'
                    : 'rgba(0, 240, 255, 0.2)'
                }`,
              }}
              animate={{
                x: [0, seedRandom(i * 7 + 6) * 100 - 50, 0],
                y: [0, seedRandom(i * 7 + 7) * 100 - 50, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: seedRandom(i * 11 + 1) * 20 + 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
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

export function HeroTitle({children}: {children: React.ReactNode}) {
  return (
    <motion.h1
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.2, duration: 0.6}}
      className="group text-5xl md:text-7xl font-extrabold mb-6"
    >
      <span className="relative inline-block">
        <span className="bg-gradient-neon bg-clip-text text-transparent">
          {children}
        </span>
        <span className="absolute inset-0 bg-gradient-neon bg-clip-text text-transparent filter blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300">
          {children}
        </span>
      </span>
    </motion.h1>
  );
}

export function HeroSubtitle({children}: {children: React.ReactNode}) {
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

export function HeroActions({children}: {children: React.ReactNode}) {
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
