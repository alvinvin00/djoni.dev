import {createFileRoute, redirect} from '@tanstack/react-router';
import locales from '@/config/locale';

// Helper function to get a cookie by name
function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined; // Ensure document is defined
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return undefined;
}

// Helper function to set a cookie
function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return; // Ensure document is defined
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

export const Route = createFileRoute('/')({
  loader: () => {
    let localePreference = getCookie('locale_preference');

    if (!localePreference) {
      const browserLanguage = navigator.language.split('-')[0];
      if (locales.includes(browserLanguage)) {
        localePreference = browserLanguage;
      } else {
        localePreference = 'en'; // Default to English if browser language not supported
      }
      setCookie('locale_preference', localePreference, 365); // Store for 1 year
    }

    throw redirect({
      to: `/${localePreference}`,
    });
  },
});
