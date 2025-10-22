import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'id'],
  localePrefix: 'as-needed',
  defaultLocale: 'en',
});

export const config = {
  matcher: [
    '/',
    '/(en|id)/:path*',
    '/((?!api|_next|_vercel|media|assets|.*\\..*).*)',
  ],
};
