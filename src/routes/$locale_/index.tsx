import {Button} from '@mantine/core';
import {createFileRoute, Link} from '@tanstack/react-router';
import {ContactForm} from '@/components/Contact/ContactForm';
import {FeaturedProjects} from '@/components/FeaturedProjects';
import {
  AnimatedHeroA,
  HeroActions,
  HeroSubtitle,
  HeroTitle,
} from '@/components/Hero/AnimatedHeroA';

export const Route = createFileRoute('/$locale_/')({
  component: HomeRoute,
});

function HomeRoute() {
  return (
    <main className="min-h-screen">
      <AnimatedHeroA>
        <HeroTitle>Djoni&apos;s Den</HeroTitle>
        <HeroSubtitle>
          A digital space where thoughts meet code, creativity meets technology,
          and ideas turn into reality.
        </HeroSubtitle>
        <HeroActions>
          <Link to="/$locale/projects" params={{locale: 'en'}}>
            <Button
              size="lg"
              className="bg-gradient-neon text-white font-semibold px-8 py-3 rounded-lg hover:shadow-neon-purple-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </Link>
          <Link to="/$locale/about" params={{locale: 'en'}}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-neon-purple dark:border-neon-cyan text-neon-purple dark:text-neon-cyan px-8 py-3 rounded-lg hover:bg-neon-purple/10 dark:hover:bg-neon-cyan/10 transition-all duration-300"
            >
              About Me
            </Button>
          </Link>
        </HeroActions>
      </AnimatedHeroA>

      <FeaturedProjects />

      <ContactForm />
    </main>
  );
}
