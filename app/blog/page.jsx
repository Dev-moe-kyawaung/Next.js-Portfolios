export const metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Blog</h1>
        <div className="row g-4">
          {["b1","b2","b3"].map((seed, i) => (
            <div className="col-lg-4 reveal" key={seed}>
              <article className="card-glass p-3">
                <img src={`https://picsum.photos/seed/${seed}/900/650`} alt={`Article ${i + 1}`} className="rounded-4 mb-3" />
                <h2 className="h5">Article {i + 1}</h2>
                <p>Practical Android engineering notes and portfolio insights.</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
