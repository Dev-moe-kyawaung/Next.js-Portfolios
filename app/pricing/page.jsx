export async function generateMetadata() {
  return {
    title: "Pricing",
    description:
      "Pricing plans for Android development services by Moe Kyaw Aung.",
    alternates: { canonical: "/pricing" },
    openGraph: {
      title: "Pricing | Moe-Kyaw-Aung-Portfolio V02",
      description: "Service pricing and engagement tiers.",
      url: "/pricing",
      type: "website"
    }
  };
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      items: ["UI cleanup", "Bug fixes", "Minor polish", "1 delivery cycle"]
    },
    {
      name: "Pro",
      price: "$1,499",
      items: ["Feature build", "API integration", "Performance tuning", "2 delivery cycles"],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      items: ["Architecture planning", "Team support", "Release hardening", "Ongoing delivery"]
    }
  ];

  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Pricing</h1>
        <p className="section-subtitle reveal">
          Flexible engagement options for product teams, founders, and long-term collaborations.
        </p>

        <div className="row g-4 mt-1">
          {plans.map((plan) => (
            <div className="col-md-4 reveal" key={plan.name}>
              <div className={`card-glass p-4 h-100 ${plan.featured ? "border border-success" : ""}`}>
                <h2 className="h4">{plan.name}</h2>
                <p className="display-6 fw-bold mb-3">{plan.price}</p>
                <ul className="list-unstyled mb-0">
                  {plan.items.map((item) => (
                    <li key={item} className="mb-2">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
