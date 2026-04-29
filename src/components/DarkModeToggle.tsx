import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const dark = !isDark;
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle color scheme"
        className="relative overflow-hidden rounded-full border-2 border-neon-purple/50 dark:border-neon-cyan/50 p-2 opacity-50"
      >
        <Sun className="w-5 h-5 text-neon-purple" />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color scheme"
      className="relative overflow-hidden rounded-full border-2 border-neon-purple/50 dark:border-neon-cyan/50 transition-all duration-300 hover:border-neon-purple dark:hover:border-neon-cyan hover:shadow-neon-purple dark:hover:shadow-neon-cyan group p-2"
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-neon-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 text-neon-purple transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
      )}
      <span className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full" />
    </button>
  );
}
