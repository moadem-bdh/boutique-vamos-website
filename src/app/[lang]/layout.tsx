import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/pages/NavBar";
import Footer from "@/pages/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SplashScreen from "@/components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  en: {
    title: "Boutique Vamos",
    description:
      "Discover football jerseys from top clubs, national teams, vintage classics, and streetwear.",
  },
  fr: {
    title: "Boutique Vamos",
    description:
      "Découvrez des maillots de football des meilleurs clubs, équipes nationales, classiques vintage et streetwear.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "fr" ? "fr" : "en";
  const { title, description } = metadata[lang];
  const ogLocale = lang === "fr" ? "fr_FR" : "en_US";
  const altLocale = lang === "fr" ? "en_US" : "fr_FR";
  const siteUrl =
    lang === "fr"
      ? "https://boutique-vamos.vercel.app/fr"
      : "https://boutique-vamos.vercel.app/en";

  return {
    metadataBase: new URL("https://boutique-vamos.vercel.app"),
    title,
    description,
    icons: {
      icon: [{ url: "/assets/logoDark.svg", type: "image/svg+xml" }],
      shortcut: "/assets/logoDark.svg",
      apple: [
        { url: "/assets/appleIcon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    
    manifest: "/manifest.json",
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Boutique Vamos",
      images: [
        {
          url: "https://boutique-vamos.vercel.app/assets/Thumbnail.png",
          secureUrl: "https://boutique-vamos.vercel.app/assets/Thumbnail.png",
          width: 1200,
          height: 630,
          alt: "Boutique Vamos - Football Jerseys",
          type: "image/png",
        },
      ],
      type: "website",
      locale: ogLocale,
      alternateLocale: [altLocale],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://boutique-vamos.vercel.app/assets/Thumbnail.png"],
    },

    other: {
      "og:image:secure_url":
        "https://boutique-vamos.vercel.app/assets/Thumbnail.png",
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === "fr" ? "fr" : "en") as "fr" | "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider initialLanguage={lang}>
          <SplashScreen>
            <NavBar lang={lang} />
            {children}
            <Footer lang={lang} />
          </SplashScreen>
        </LanguageProvider>
      </body>
    </html>
  );
}
