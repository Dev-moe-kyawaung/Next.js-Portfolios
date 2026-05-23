import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PortfolioGrid from "@/components/PortfolioGrid";
import PageSection from "@/components/PageSection";

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
