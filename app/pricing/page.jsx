export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Pricing</h1>
        <div className="row g-4">
          <div className="col-md-4 reveal"><div className="card-glass p-4"><h2 className="h4">Starter</h2><p className="display-6">$499</p><p>UI cleanup and small enhancements.</p></div></div>
          <div className="col-md-4 reveal"><div className="card-glass p-4 border border-success"><h2 className="h4">Pro</h2><p className="display-6">$1,499</p><p>Feature delivery, API integration, and polish.</p></div></div>
          <div className="col-md-4 reveal"><div className="card-glass p-4"><h2 className="h4">Enterprise</h2><p className="display-6">Custom</p><p>Architecture, scaling, and team support.</p></div></div>
        </div>
      </div>
    </main>
  );
}
