export async function generateMetadata() {
  return {
    title: "Testimonials",
    description: "Testimonials and feedback for Moe Kyaw Aung.",
    alternates: { canonical: "/testimonials" },
    openGraph: {
      title: "Testimonials | Moe-Kyaw-Aung-Portfolio V02",
      description: "Client feedback and endorsements.",
      url: "/testimonials",
      type: "website"
    }
  };
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Strong engineering discipline and excellent delivery.",
      name: "Product Lead"
    },
    {
      quote: "Clear architecture and reliable communication.",
      name: "Engineering Manager"
    },
    {
      quote: "Polished Android work with great attention to detail.",
      name: "Startup Founder"
    }
  ];

  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Testimonials</h1>
        <p className="section-subtitle reveal">
          A few samples of feedback and collaboration style.
        </p>

        <div
          id="testimonialCarousel"
          className="carousel slide reveal mt-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner card-glass p-4">
            {testimonials.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={item.name}>
                <div className="text-center py-4">
                  <p className="fs-5 fst-italic">“{item.quote}”</p>
                  <p className="mb-0 fw-semibold">{item.name}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
}
