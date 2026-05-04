import { NextResponse, NextRequest } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Allow social media crawlers (no accept-language, bot user agents) to see content directly
  const userAgent = request.headers.get("user-agent") ?? "";
  const isCrawler = /facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Slackbot|Discordbot|instagram/i.test(userAgent);

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (!hasLocale) {
    const acceptLanguage = request.headers.get("accept-language") ?? "";
    const browserLang = acceptLanguage.startsWith("fr") ? "fr" : defaultLocale;
    const targetUrl = new URL(`/${browserLang}${pathname}`, request.url);

    // Use rewrite for crawlers so they get full HTML with OG tags (no redirect)
    // Use redirect for regular browsers so the URL updates in the address bar
    if (isCrawler) {
      return NextResponse.rewrite(targetUrl);
    }
    return NextResponse.redirect(targetUrl);
  }
}

export const config = {
  matcher: [
    "/((?!_next|assets|fonts|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|ico|css|js|woff|woff2|ttf|otf)).*)",
  ],
};
