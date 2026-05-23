export default function PortfolioGrid() {
  const items = [
    ["Certificates Collection", "Professional training, Android specialization, architecture, and cloud integration milestones."],
    ["GitHub Account Collection", "Repository highlights, open-source contributions, and reusable engineering patterns."],
    ["My App Collection", "Play Store-ready apps, internal tools, and polished mobile experiences."],
    ["Organization Section", "Collaborative engineering, delivery standards, and scalable teamwork."],
    ["Burmese Language Support", "Localized content and bilingual experience for stronger accessibility."]
  ];

  return (
    <div className="row g-4">
      {items.map(([title, desc]) => (
        <div className="col-md-6 col-lg-4 reveal" key={title}>
          <div className="card-glass p-4 h-100">
            <h3 className="h5">{title}</h3>
            <p className="mb-0">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
