import {NextRequest} from "next/server";
import Negotiator from "negotiator";
import {match} from "@formatjs/intl-localematcher";

const supportedLocales = [
    'en-US',
    'id'
]

const headers = {'accept-language': 'en-US,en;q=0.5'}

const getLocale = (request: NextRequest) => {
    const negotiator = new Negotiator({headers});

    return match(negotiator.languages(), supportedLocales, 'en-US')
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
