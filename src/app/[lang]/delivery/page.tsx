import type { Metadata } from "next";
import DeliverySection from "./DeliverySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "fr" | "en" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Boutique Vamos - Livraison" : "Boutique Vamos - Delivery",
    description: lang === "fr" ? "Livraison Boutique Vamos" : "Boutique Vamos Delivery",
    keywords: ["Boutique", "Vamos", "livraison"],
  };
}

export default function DeliveryPage() {
  return <DeliverySection />;
}