import type {NextRequest} from 'next/server'
import {NextResponse} from "next/server";
import Negotiator from "negotiator";
import {match} from "@formatjs/intl-localematcher";

const supportedLocales = [
    'en',
    'id'
]

const getLocale = (request: NextRequest) => {
    const headers: Record<string, string> = {};

    request.headers.forEach((value, key) => (headers[key] = value))

    const negotiator = new Negotiator({headers})

    const requestedLocales = negotiator.languages();

    return match(requestedLocales, supportedLocales, 'en')
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
    return NextResponse.redirect(`${request.nextUrl}`)
}

export const config = {
    matcher: ['/', '/((?!_next).*)'],
}
