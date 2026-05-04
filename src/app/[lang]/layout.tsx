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
