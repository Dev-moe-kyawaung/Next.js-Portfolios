export async function generateMetadata() {
  return {
    title: "Blog",
    description:
      "Articles and notes from Moe Kyaw Aung on Android, Kotlin, Compose, Firebase, and performance.",
    alternates: { canonical: "/blog" },
    openGraph: {
      title: "Blog | Moe-Kyaw-Aung-Portfolio V02",
      description: "Android engineering articles and notes.",
      url: "/blog",
      type: "website"
    }
  };
}

export default function BlogPage() {
  const posts = [
    {
      title: "Compose performance habits",
      desc: "Practical ways to keep UI smooth and responsive."
    },
    {
      title: "Secure API design",
      desc: "Patterns for safer mobile networking and token handling."
    },
    {
      title: "Release readiness",
      desc: "How to move from development to production with confidence."
    },
    {
      title: "Offline-first architecture",
      desc: "Caching and sync strategies for dependable Android apps."
    }
  ];

  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Blog</h1>
        <p className="section-subtitle reveal">
          Short engineering notes, implementation ideas, and shipping lessons.
        </p>

        <div className="row g-4 mt-1">
          {posts.map((post, index) => (
            <div className="col-lg-3 col-md-6 reveal" key={post.title}>
              <article className="card-glass p-3 h-100">
                <img
                  src={`https://picsum.photos/seed/blog-${index + 1}/900/650`}
                  alt={post.title}
                  className="rounded-4 mb-3"
                />
                <h2 className="h5">{post.title}</h2>
                <p className="mb-0">{post.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
