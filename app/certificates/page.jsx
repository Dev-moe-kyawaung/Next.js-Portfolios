export async function generateMetadata() {
  return {
    title: "Certificates",
    description:
      "Certificates collection for Moe Kyaw Aung including Android, architecture, and cloud-related achievements.",
    alternates: { canonical: "/certificates" },
    openGraph: {
      title: "Certificates | Moe-Kyaw-Aung-Portfolio V02",
      description: "Professional certificate collection.",
      url: "/certificates",
      type: "website"
    }
  };
}

export default function CertificatesPage() {
  const certificates = [
    { title: "Android Architecture", desc: "Clean architecture, modularization, and production delivery." },
    { title: "Firebase Integration", desc: "Cloud sync, auth flows, analytics, and release-safe configuration." },
    { title: "Performance Engineering", desc: "Startup, UI, and memory optimization across real-world apps." },
    { title: "Security Practices", desc: "Secure storage, network safety, and resilient app design." }
  ];

  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Certificates Collection</h1>
        <p className="section-subtitle reveal">
          Training, specialization, and professional growth highlights.
        </p>

        <div className="row g-4 mt-1">
          {certificates.map((item, index) => (
            <div className="col-md-6 col-lg-3 reveal" key={index}>
              <div className="card-glass p-4 h-100">
                <img
                  src={`https://picsum.photos/seed/cert-${index + 1}/900/650`}
                  alt={item.title}
                  className="rounded-4 mb-3"
                />
                <h2 className="h5">{item.title}</h2>
                <p className="mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
