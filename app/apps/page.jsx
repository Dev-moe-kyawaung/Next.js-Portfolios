export const metadata = { title: "Apps" };

const apps = [
  { title: "Secure Finance App", desc: "Offline-first budgeting with encryption.", img: "https://picsum.photos/seed/appa/900/650" },
  { title: "Field Service App", desc: "Fast workflows with maps and sync.", img: "https://picsum.photos/seed/appb/900/800" },
  { title: "Learning Companion", desc: "Compose UI, notifications, and analytics.", img: "https://picsum.photos/seed/appc/900/720" }
];

export default function AppsPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">My Create App Collection</h1>
        <div className="row g-4 mt-1">
          {apps.map((app) => (
            <div className="col-md-6 col-lg-4 reveal" key={app.title}>
              <div className="card-glass p-3">
                <img src={app.img} alt={app.title} className="rounded-4 mb-3" />
                <h2 className="h5">{app.title}</h2>
                <p>{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
