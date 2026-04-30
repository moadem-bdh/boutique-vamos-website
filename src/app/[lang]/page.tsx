import AllSections from "@/pages/AllSections";

export const metadata = {
  title: "Boutique Vamos",
  description: "Boutique Vamos",
  keywords: ["Boutique", "Vamos"],
};

export default async function Home({ params }: {params: Promise<{ lang: "fr" | "en" }>}) {
  const { lang } = await params;
  return <AllSections lang={lang} />;
}
