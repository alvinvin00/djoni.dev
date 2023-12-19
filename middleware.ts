import {NextRequest} from "next/server";

const supportedLocales = [
    'en-US',
    'id'
]

const getLocale = (request: NextRequest) => {
    const {pathname} = request.nextUrl;
    const pathnameHasLocale = supportedLocales.some((locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`);

    if (pathnameHasLocale) {
        return pathname.split('/')[1];
    }

    return 'en-US';
}

export const middleware = (request: NextRequest) => {
    const {pathname} = request.nextUrl;
    const pathnameHasLocale = supportedLocales.some((locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`);

    if (pathnameHasLocale) {
        return;
    }

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return Response.redirect(`${request.nextUrl}`)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        '/'
    ],
}
