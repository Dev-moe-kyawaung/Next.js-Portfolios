"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setStatus("Thanks! Your message is ready to send.");
    form.reset();
  };

  return (
    <form className="glass p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">Full name</label>
        <input className="form-control" id="name" name="name" type="text" placeholder="Your full name" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-control" id="email" name="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="message">Project details</label>
        <textarea className="form-control" id="message" name="message" rows="5" placeholder="Tell me about your project"></textarea>
      </div>

      <button className="btn btn-success" type="submit">
        Send Message
      </button>

      {status ? <p className="mt-3 mb-0">{status}</p> : null}
    </form>
  );
}
