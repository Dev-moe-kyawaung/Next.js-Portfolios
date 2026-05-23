export default function FAQ() {
  return (
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#q1">What do you specialize in?</button>
        </h2>
        <div id="q1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
          <div className="accordion-body">Android, Kotlin, Compose, Firebase, and clean architecture.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#q2">Do you take freelance work?</button>
        </h2>
        <div id="q2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">Yes, project-based and long-term collaboration.</div>
        </div>
      </div>
    </div>
  );
}
