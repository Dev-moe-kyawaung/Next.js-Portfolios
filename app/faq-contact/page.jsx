import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "FAQ / Contact" };

export default function FaqContactPage() {
  return (
    <main className="section" style={{ paddingTop: "110px" }}>
      <div className="container-max">
        <div className="row g-4">
          <div className="col-lg-6 reveal">
            <h1 className="section-title">FAQ</h1>
            <FAQ />
          </div>
          <div className="col-lg-6 reveal">
            <h2 className="section-title">Contact</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
