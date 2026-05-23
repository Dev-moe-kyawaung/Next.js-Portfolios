export default function Stats() {
  const stats = [
    ["10+", "Years"],
    ["3000+", "Apps"],
    ["122", "Repos"],
    ["100%", "Satisfaction"]
  ];

  return (
    <section className="section-tight">
      <div className="container-max">
        <div className="row g-3">
          {stats.map(([value, label]) => (
            <div className="col-6 col-lg-3" key={label}>
              <div className="card-glass p-4 text-center">
                <p className="display-6 fw-bold mb-1">{value}</p>
                <p className="mb-0">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
