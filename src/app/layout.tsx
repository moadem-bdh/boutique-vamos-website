import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://boutique-vamos.vercel.app"),
  title: "Boutique Vamos",
  description: "Discover football jerseys from top clubs, national teams, vintage classics, and streetwear.",
  icons: {
    icon: "/assets/logoDark.svg",
  },
  openGraph: {
    title: "Boutique Vamos",
    description: "Discover football jerseys from top clubs, national teams, vintage classics, and streetwear.",
    url: "https://boutique-vamos.vercel.app",
    siteName: "Boutique Vamos",
    images: [
      {
        url: "https://boutique-vamos.vercel.app/assets/Thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Boutique Vamos - Football Jerseys",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Vamos",
    description: "Discover football jerseys from top clubs, national teams, vintage classics, and streetwear.",
    images: ["https://boutique-vamos.vercel.app/assets/Thumbnail.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}