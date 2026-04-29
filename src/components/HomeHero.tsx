import {
  AnimatedHeroA,
  HeroActions,
  HeroSubtitle,
  HeroTitle,
} from './Hero/AnimatedHeroA';

export function HomeHero({locale}: {locale: string}) {
  return (
    <AnimatedHeroA>
      <HeroTitle>Djoni&apos;s Den</HeroTitle>
      <HeroSubtitle>
        A digital space where thoughts meet code, creativity meets technology,
        and ideas turn into reality.
      </HeroSubtitle>
      <HeroActions>
        <a
          href={`/${locale}/projects`}
          className="bg-gradient-neon text-white font-semibold px-8 py-3 rounded-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105 inline-block"
        >
          View Projects
        </a>
        <a
          href={`/${locale}/about`}
          className="border-2 border-neon-purple dark:border-neon-cyan text-neon-purple dark:text-neon-cyan px-8 py-3 rounded-lg hover:bg-neon-purple/10 dark:hover:bg-neon-cyan/10 transition-all duration-300 inline-block"
        >
          About Me
        </a>
      </HeroActions>
    </AnimatedHeroA>
  );
}
