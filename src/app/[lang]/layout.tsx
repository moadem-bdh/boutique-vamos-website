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

export const metadata: Metadata = {
  metadataBase: new URL("https://boutique-vamos.vercel.app"),
  title: "Boutique Vamos",
  description: "Discover football jerseys from top clubs, national teams, vintage classics, and streetwear.",

  // Icons (browser tab, iOS & Android home screen) 
  icons: {
    icon: [
      { url: "/assets/logoDark.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/logoDark.svg",
    // iOS "Add to Home Screen" icon
    apple: [
      { url: "/assets/appleIcon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Android "Add to Home Screen" icon — reads from /manifest.json
  manifest: "/manifest.json",

  // Open Graph
  openGraph: {
    title: "Boutique Vamos",
    description: "Discover football jerseys from top clubs, national teams, vintage classics, and streetwear.",
    url: "https://boutique-vamos.vercel.app",
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
    locale: "en_US",
  },

  //  Twitter / X   
  twitter: {
    card: "summary_large_image",
    title: "Boutique Vamos",
    description: "Discover football jerseys from top clubs, national teams, vintage classics, and streetwear.",
    images: ["https://boutique-vamos.vercel.app/assets/Thumbnail.png"],
  },

  // in whatsapp to make it work I have to addt eh scure URL
  other: {
    "og:image:secure_url": "https://boutique-vamos.vercel.app/assets/Thumbnail.png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
  },
};

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
