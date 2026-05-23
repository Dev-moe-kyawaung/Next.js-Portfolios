export default function PageSection({ title, subtitle, children }) {
  return (
    <section className="section">
      <div className="container-max">
        <div className="mb-4">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
