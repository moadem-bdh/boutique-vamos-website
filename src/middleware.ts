import { NextResponse, NextRequest } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!hasLocale) {
    
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const browserLang = acceptLanguage.startsWith("fr") ? "fr" : defaultLocale;
    return NextResponse.redirect(
      new URL(`/${browserLang}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: [
    "/((?!_next|assets|fonsts|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|ico|css|js|woff|woff2|ttf|otf)).*)",
  ],
};
