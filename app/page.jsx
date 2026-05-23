import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PortfolioGrid from "@/components/PortfolioGrid";
import PageSection from "@/components/PageSection";

export async function generateMetadata() {
  return {
    title: "Home",
    description:
      "Moe Kyaw Aung portfolio homepage — Android Senior Developer with nearly 12 years of experience in Kotlin, Jetpack Compose, Firebase, and clean architecture.",
    alternates: {
      canonical: "/"
    },
    openGraph: {
      title: "Moe-Kyaw-Aung-Portfolio V02",
      description:
        "Professional Android Senior Developer portfolio with glasspunk design.",
      url: "/",
      type: "website"
    }
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PageSection
        title="Featured collections"
        subtitle="Certificates, GitHub collections, apps, organizations, and Burmese support in a compact premium layout."
      >
        <PortfolioGrid />
      </PageSection>
    </>
  );
}
