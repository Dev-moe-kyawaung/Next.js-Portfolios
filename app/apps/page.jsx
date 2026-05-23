import PortfolioGrid from "@/components/PortfolioGrid";

export async function generateMetadata() {
  return {
    title: "Apps",
    description:
      "Explore Moe Kyaw Aung's Android app collection, Play Store-ready work, and product case studies.",
    alternates: {
      canonical: "/apps"
    },
    openGraph: {
      title: "Apps | Moe-Kyaw-Aung-Portfolio V02",
      description: "Android app collection and showcase.",
      url: "/apps",
      type: "website"
    }
  };
}

export default function AppsPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">My Create App Collection</h1>
        <p className="section-subtitle reveal">
          A compact showcase of Android apps, tools, and product ideas.
        </p>

        <div className="mt-4">
          <PortfolioGrid />
        </div>
      </div>
    </main>
  );
}
