export default function FAQ() {
  return (
    <div className="accordion" id="faqAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#q1"
            aria-expanded="true"
            aria-controls="q1"
          >
            What do you specialize in?
          </button>
        </h2>
        <div
          id="q1"
          className="accordion-collapse collapse show"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Android, Kotlin, Compose, Firebase, and clean architecture.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#q2"
            aria-expanded="false"
            aria-controls="q2"
          >
            Do you take freelance work?
          </button>
        </h2>
        <div
          id="q2"
          className="accordion-collapse collapse"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Yes, project-based and long-term collaboration are both possible.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#q3"
            aria-expanded="false"
            aria-controls="q3"
          >
            Do you support Burmese language content?
          </button>
        </h2>
        <div
          id="q3"
          className="accordion-collapse collapse"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Yes, the portfolio includes a Burmese language page and bilingual-ready structure.
          </div>
        </div>
      </div>
    </div>
  );
}
