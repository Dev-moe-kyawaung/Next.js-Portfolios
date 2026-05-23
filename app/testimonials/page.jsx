export const metadata = { title: "Testimonials" };

export default function TestimonialsPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <h1 className="section-title reveal">Testimonials</h1>
        <div id="testimonialCarousel" className="carousel slide reveal" data-bs-ride="carousel">
          <div className="carousel-inner card-glass p-4">
            <div className="carousel-item active"><p>“Strong engineering discipline and excellent delivery.”</p></div>
            <div className="carousel-item"><p>“Clear architecture and reliable communication.”</p></div>
            <div className="carousel-item"><p>“Polished Android work with great attention to detail.”</p></div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev"><span className="carousel-control-prev-icon" /></button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next"><span className="carousel-control-next-icon" /></button>
        </div>
      </div>
    </main>
  );
}
