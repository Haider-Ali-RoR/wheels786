import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "./Icons";
import { company, fleet } from "../data/content";
import eclass from "../assets/mercedes-front.jpeg";
import vclass from "../assets/vclass.jpeg";
import sclass from "../assets/sclass.jpeg";

const vehicleImages: Record<string, string> = { eclass, vclass, sclass };

type TripType = "distance" | "days" | "hourly";

const initial = {
  tripType: "distance" as TripType,
  pickup: "",
  dropoff: "",
  hours: "3",
  vehicleIdx: "0",
  date: "",
  time: "09:00",
  endDate: "",
  endTime: "10:00",
  name: "",
  phone: "",
  message: "",
};

const pad = (n: number) => String(n).padStart(2, "0");

/** Today as an ISO yyyy-mm-dd string (for date input `min`). */
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Format a 24h "HH:MM" value as a friendly 12h string (e.g. "9:00 AM"). */
function fmtTime(t: string) {
  if (!t) return "";
  const [h, m] = t.split(":").map(Number);
  const ap = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${pad(m)} ${ap}`;
}

const MINUTES = [0, 15, 30, 45];

/**
 * All selectable times as a single list — hours 1–12, minutes in 10-min steps,
 * AM/PM. `value` is 24h "HH:MM", `label` is the friendly "9:00 AM" form.
 */
const TIME_OPTIONS = (() => {
  const opts: { value: string; label: string }[] = [];
  for (const ap of ["AM", "PM"]) {
    for (const h12 of [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
      for (const m of MINUTES) {
        let h = h12 % 12;
        if (ap === "PM") h += 12;
        opts.push({ value: `${pad(h)}:${pad(m)}`, label: `${h12}:${pad(m)} ${ap}` });
      }
    }
  }
  return opts;
})();

/** Single-dropdown 12-hour time picker. */
function TimeSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select
      className="time-select"
      aria-label="Time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {TIME_OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);
  const today = todayISO();

  const vehicle = fleet[Number(form.vehicleIdx)] ?? fleet[0];

  const set = (patch: Partial<typeof initial>) =>
    setForm((f) => ({ ...f, ...patch }));

  const update =
    (key: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      set({ [key]: e.target.value } as Partial<typeof initial>);

  // Keep the end date on or after the start date.
  const onStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setForm((f) => ({
      ...f,
      date,
      endDate: f.endDate && f.endDate < date ? date : f.endDate,
    }));
  };

  // Open the native picker whether the icon or the field body is clicked.
  const openPicker = (e: React.MouseEvent<HTMLInputElement>) => {
    try {
      (e.currentTarget as HTMLInputElement & { showPicker?: () => void }).showPicker?.();
    } catch {
      /* not supported — the icon still works */
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isHourly = form.tripType === "hourly";
    const isDays = form.tripType === "days";
    const tripLabel = isHourly
      ? "Hourly hire"
      : isDays
      ? "Daily hire (as directed)"
      : "Transfer (distance)";
    // Inclusive number of calendar days between start and end date.
    const dayCount =
      isDays && form.date && form.endDate
        ? Math.max(
            1,
            Math.round(
              (new Date(form.endDate).getTime() - new Date(form.date).getTime()) / 86_400_000
            ) + 1
          )
        : 0;
    const lines = [
      `New booking request — ${company.name}`,
      `Trip type: ${tripLabel}`,
      `Vehicle: ${vehicle.name} (${vehicle.tier})`,
      `Passengers: up to ${vehicle.seats}`,
      `Pickup: ${form.pickup}`,
      isHourly ? `Duration: ${form.hours} hour(s)` : `Drop-off: ${form.dropoff}`,
      `${isDays ? "Start" : "Date"}: ${form.date}  Time: ${fmtTime(form.time)}`,
      isDays ? `End: ${form.endDate}  Time: ${fmtTime(form.endTime)}` : "",
      isDays ? `Duration: ${dayCount} day(s)` : "",
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
            Reserve in <span className="text-silver">Minutes</span>
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

            <figure className="contact__vehicle">
              <img src={vehicleImages[vehicle.image]} alt={vehicle.name} />
              <figcaption>
                <span className="contact__vehicle-tier">{vehicle.tier}</span>
                <strong>{vehicle.name}</strong>
              </figcaption>
            </figure>
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
                    className={form.tripType === "days" ? "active" : ""}
                    onClick={() => set({ tripType: "days" })}
                  >
                    <Icon name="calendar" size={16} /> Days
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
                  <input
                    id="pickup"
                    value={form.pickup}
                    onChange={update("pickup")}
                    placeholder="Enter pick-up location (e.g. CDG Airport, Terminal 2E)"
                    required
                  />
                </div>

                {form.tripType === "hourly" ? (
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
                ) : (
                  <div className="field">
                    <label htmlFor="dropoff">Drop-Off / Destination</label>
                    <input
                      id="dropoff"
                      value={form.dropoff}
                      onChange={update("dropoff")}
                      placeholder="Enter drop-off / destination (e.g. Paris, 8th arrondissement)"
                      required
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="vehicle">Vehicle Class</label>
                  <select id="vehicle" value={form.vehicleIdx} onChange={update("vehicleIdx")}>
                    {fleet.map((v, i) => (
                      <option key={v.name} value={i}>
                        {v.name} — {v.tier}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="vehicle-summary">
                  <span className="vehicle-summary__item">
                    <Icon name="car" size={15} />
                    <span className="vehicle-summary__val">{vehicle.tier}</span>
                  </span>
                  <span className="vehicle-summary__item">
                    <Icon name="users" size={15} />
                    <span className="vehicle-summary__val">Up to {vehicle.seats} pax</span>
                  </span>
                  <span className="vehicle-summary__item">
                    <Icon name="luggage" size={15} />
                    <span className="vehicle-summary__val">{vehicle.luggage} bags</span>
                  </span>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="date">{form.tripType === "days" ? "Start Date" : "Date"}</label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={onStartDate}
                      onClick={openPicker}
                      required
                    />
                  </div>
                  <div className="field">
                    <label>{form.tripType === "days" ? "Start Time" : "Time"}</label>
                    <TimeSelect value={form.time} onChange={(v) => set({ time: v })} />
                  </div>
                </div>

                {form.tripType === "days" && (
                  <div className="form__row">
                    <div className="field">
                      <label htmlFor="endDate">End Date</label>
                      <input
                        id="endDate"
                        type="date"
                        min={form.date || today}
                        value={form.endDate}
                        onChange={update("endDate")}
                        onClick={openPicker}
                        required
                      />
                    </div>
                    <div className="field">
                      <label>End Time</label>
                      <TimeSelect value={form.endTime} onChange={(v) => set({ endTime: v })} />
                    </div>
                  </div>
                )}

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
                  Free quote · No payment required · 100% refund if cancelled 12h+ before pickup
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
