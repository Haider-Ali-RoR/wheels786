import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "./Icons";
import { company, bookingLocations, vehicleClasses } from "../data/content";

type TripType = "distance" | "hourly";

const initial = {
  tripType: "distance" as TripType,
  pickup: bookingLocations[0],
  dropoff: bookingLocations[1],
  hours: "3",
  vehicle: vehicleClasses[0],
  date: "",
  time: "",
  passengers: "1",
  name: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const set = (patch: Partial<typeof initial>) =>
    setForm((f) => ({ ...f, ...patch }));

  const update =
    (key: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      set({ [key]: e.target.value } as Partial<typeof initial>);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isHourly = form.tripType === "hourly";
    const lines = [
      `New booking request — ${company.name}`,
      `Trip type: ${isHourly ? "Hourly hire" : "Transfer (distance)"}`,
      `Vehicle: ${form.vehicle}`,
      `Pickup: ${form.pickup}`,
      isHourly ? `Duration: ${form.hours} hour(s)` : `Drop-off: ${form.dropoff}`,
      `Date: ${form.date}  Time: ${form.time}`,
      `Passengers: ${form.passengers}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
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
            Reserve in <span className="text-silver">Three Steps</span>
          </h2>
          <p className="section-sub">
            Tell us about your journey and get a fixed, all-inclusive quote — fast.
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
                <div className="toggle">
                  <button
                    type="button"
                    className={form.tripType === "distance" ? "active" : ""}
                    onClick={() => set({ tripType: "distance" })}
                  >
                    <Icon name="pin" size={16} /> Distance
                  </button>
                  <button
                    type="button"
                    className={form.tripType === "hourly" ? "active" : ""}
                    onClick={() => set({ tripType: "hourly" })}
                  >
                    <Icon name="clock" size={16} /> Hourly
                  </button>
                </div>

                <div className="field">
                  <label htmlFor="pickup">Pick-Up Location</label>
                  <select id="pickup" value={form.pickup} onChange={update("pickup")}>
                    {bookingLocations.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {form.tripType === "distance" ? (
                  <div className="field">
                    <label htmlFor="dropoff">Drop-Off Location</label>
                    <select id="dropoff" value={form.dropoff} onChange={update("dropoff")}>
                      {bookingLocations.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div className="field">
                    <label htmlFor="hours">Duration (hours)</label>
                    <input
                      id="hours"
                      type="number"
                      min="1"
                      max="24"
                      value={form.hours}
                      onChange={update("hours")}
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="vehicle">Vehicle Class</label>
                  <select id="vehicle" value={form.vehicle} onChange={update("vehicle")}>
                    {vehicleClasses.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" value={form.date} onChange={update("date")} required />
                  </div>
                  <div className="field">
                    <label htmlFor="time">Time</label>
                    <input id="time" type="time" value={form.time} onChange={update("time")} required />
                  </div>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="passengers">Passengers</label>
                    <input
                      id="passengers"
                      type="number"
                      min="1"
                      max="7"
                      value={form.passengers}
                      onChange={update("passengers")}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" required value={form.name} onChange={update("name")} placeholder="John Doe" />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" required value={form.phone} onChange={update("phone")} placeholder="+33 ..." />
                </div>

                <div className="field">
                  <label htmlFor="message">Additional Notes</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Flight number, luggage, child seat..."
                  />
                </div>

                <button type="submit" className="btn btn--primary">
                  <Icon name="whatsapp" size={20} /> Get My Quote
                </button>
                <p className="form__note">
                  Free quote · No payment required · Free cancellation
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
