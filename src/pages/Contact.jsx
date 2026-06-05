import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = form;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:daniel.lloyd.hughes@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ padding: "25px" }}>
      <div className="page page--top">
        <h1 className="page-title">Contact</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-field">
            <span className="contact-label">Full name</span>
            <input
              className="contact-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">Email</span>
            <input
              className="contact-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">Message</span>
            <textarea
              className="contact-input contact-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={6}
              required
            />
          </label>
          <button className="hero-button contact-submit" type="submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
