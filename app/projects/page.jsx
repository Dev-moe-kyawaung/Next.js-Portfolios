export async function generateMetadata() {
  return {
    title: "Projects",
    description:
      "GitHub account collections, organizations, and featured Android projects by Moe Kyaw Aung.",
    alternates: {
      canonical: "/projects"
    },
    openGraph: {
      title: "Projects | Moe-Kyaw-Aung-Portfolio V02",
      description: "GitHub collections and featured project showcase.",
      url: "/projects",
      type: "website"
    }
  };
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Repository 01",
      desc: "Reusable Android UI toolkit."
    },
    {
      title: "Repository 02",
      desc: "Compose patterns and architecture samples."
    },
    {
      title: "Organization Section",
      desc: "Team delivery, standards, and scalable collaboration."
    },
    {
      title: "Play Store Collection",
      desc: "Published and release-ready mobile products."
    },
    {
      title: "Open Source Utilities",
      desc: "Small tools and helpers for everyday Android workflows."
    },
    {
      title: "Performance Lab",
      desc: "Experiments focused on UI, memory, and startup optimization."
    }
  ];

  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">GitHub Account Collections</h1>
        <p className="section-subtitle reveal">
          Curated repositories, organizations, and product work presented in a clean grid.
        </p>

        <div className="row g-4 mt-1">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 reveal" key={project.title}>
              <div className="card-glass p-4 h-100">
                <h2 className="h5">{project.title}</h2>
                <p className="mb-0">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
