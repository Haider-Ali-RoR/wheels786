import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "./Icons";
import { company, serviceOptions } from "../data/content";

const initial = {
  name: "",
  phone: "",
  service: serviceOptions[0],
  pickup: "",
  dropoff: "",
  date: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `New booking request — ${company.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Pickup: ${form.pickup}`,
      `Drop-off: ${form.dropoff}`,
      `Date/Time: ${form.date}`,
      form.message ? `Notes: ${form.message}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${company.whatsappRaw}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Book Your Ride</span>
          <h2 className="section-title">
            Request a <span className="text-silver">Free Quote</span>
          </h2>
          <p className="section-sub">
            Tell us about your journey and we'll get back to you with a fixed
            price — fast.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a className="contact__row" href={`tel:${company.phoneRaw}`}>
              <span className="contact__row-icon">
                <Icon name="phone" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Call / WhatsApp</span>
                <br />
                <span className="contact__row-value">{company.phoneDisplay}</span>
              </span>
            </a>
            <a className="contact__row" href={`mailto:${company.email}`}>
              <span className="contact__row-icon">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Email</span>
                <br />
                <span className="contact__row-value">{company.email}</span>
              </span>
            </a>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="pin" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Address</span>
                <br />
                <span className="contact__row-value">{company.address}</span>
              </span>
            </div>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="clock" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Hours</span>
                <br />
                <span className="contact__row-value">{company.hours}</span>
              </span>
            </div>
          </div>

          <div className="form reveal">
            {sent ? (
              <div className="form__success">
                <div className="form__success-icon">
                  <Icon name="check" size={32} />
                </div>
                <h3>Request Ready!</h3>
                <p className="section-sub">
                  Your booking details have opened in WhatsApp. Just hit send and
                  we'll confirm your ride shortly.
                </p>
                <button
                  className="btn btn--ghost"
                  style={{ marginTop: 18 }}
                  onClick={() => {
                    setForm(initial);
                    setSent(false);
                  }}
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" required value={form.name} onChange={update("name")} placeholder="John Doe" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" required value={form.phone} onChange={update("phone")} placeholder="+33 ..." />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select id="service" value={form.service} onChange={update("service")}>
                    {serviceOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="pickup">Pickup Location</label>
                    <input id="pickup" required value={form.pickup} onChange={update("pickup")} placeholder="e.g. CDG Airport" />
                  </div>
                  <div className="field">
                    <label htmlFor="dropoff">Drop-off Location</label>
                    <input id="dropoff" required value={form.dropoff} onChange={update("dropoff")} placeholder="e.g. Paris 18" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="date">Date & Time</label>
                  <input id="date" type="datetime-local" value={form.date} onChange={update("date")} />
                </div>

                <div className="field">
                  <label htmlFor="message">Additional Notes</label>
                  <textarea id="message" value={form.message} onChange={update("message")} placeholder="Number of passengers, luggage, flight number..." />
                </div>

                <button type="submit" className="btn btn--primary">
                  <Icon name="whatsapp" size={20} /> Send via WhatsApp
                </button>
                <p className="form__note">
                  No payment required to request a quote.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
