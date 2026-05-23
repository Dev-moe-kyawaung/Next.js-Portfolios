export default function ContactForm() {
  return (
    <form className="glass p-4" onSubmit={(e) => e.preventDefault()}>
      <input className="form-control mb-3" type="text" placeholder="Full name" required />
      <input className="form-control mb-3" type="email" placeholder="Email" required />
      <textarea className="form-control mb-3" rows="5" placeholder="Project details" required />
      <button className="btn btn-success" type="submit">Send Message</button>
    </form>
  );
}
