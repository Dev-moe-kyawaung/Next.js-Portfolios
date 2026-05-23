export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">GitHub Account Collections</h1>
        <div className="row g-4">
          <div className="col-md-4 reveal"><div className="card-glass p-4"><h2 className="h5">Repository 01</h2><p>Reusable Android UI toolkit.</p></div></div>
          <div className="col-md-4 reveal"><div className="card-glass p-4"><h2 className="h5">Repository 02</h2><p>Compose patterns and architecture samples.</p></div></div>
          <div className="col-md-4 reveal"><div className="card-glass p-4"><h2 className="h5">Organization Section</h2><p>Team delivery, standards, and scalable collaboration.</p></div></div>
        </div>
      </div>
    </main>
  );
}
