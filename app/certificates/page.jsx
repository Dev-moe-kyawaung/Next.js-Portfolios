export const metadata = { title: "Certificates" };

export default function CertificatesPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Certificates Collection</h1>
        <div className="row g-4">
          {["c1","c2","c3"].map((seed, i) => (
            <div className="col-md-6 col-lg-4 reveal" key={seed}>
              <div className="card-glass p-3">
                <img src={`https://picsum.photos/seed/${seed}/900/700`} alt={`Certificate ${i + 1}`} className="rounded-4 mb-3" />
                <p className="mb-0">Certificate {i + 1}: Professional Android growth milestone.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
