import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata() {
  return {
    title: "FAQ / Contact",
    description:
      "Frequently asked questions and contact details for Moe Kyaw Aung.",
    alternates: { canonical: "/faq-contact" },
    openGraph: {
      title: "FAQ / Contact | Moe-Kyaw-Aung-Portfolio V02",
      description: "FAQ and contact page.",
      url: "/faq-contact",
      type: "website"
    }
  };
}

export default function FaqContactPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <div className="row g-4">
          <div className="col-lg-6 reveal">
            <h1 className="section-title">FAQ</h1>
            <p className="section-subtitle">
              Common questions about services, delivery, and collaboration.
            </p>
            <div className="mt-4">
              <FAQ />
            </div>
          </div>

          <div className="col-lg-6 reveal">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Send a message with your project details and timeline.
            </p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
