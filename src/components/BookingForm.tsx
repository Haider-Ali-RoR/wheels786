import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { company } from "../data/content";
import type { Lang } from "../data/content";
import { useContent, useLang, useT } from "../i18n/LanguageContext";
import cclass from "../assets/cclass.jpeg";
import eclass from "../assets/mercedes-front.jpeg";
import vclass from "../assets/vclass.jpeg";
import sclass from "../assets/sclass.jpeg";

const vehicleImages: Record<string, string> = { cclass, eclass, vclass, sclass };

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

/**
 * Format a 24h "HH:MM" value for display. English uses a 12h clock
 * ("9:00 AM"); French uses the 24h clock ("09:00").
 */
function formatTime(t: string, lang: Lang) {
  if (!t) return "";
  const [h, m] = t.split(":").map(Number);
  if (lang === "fr") return `${pad(h)}:${pad(m)}`;
  const ap = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${pad(m)} ${ap}`;
}

const MINUTES = [0, 15, 30, 45];

/** All selectable time values as 24h "HH:MM", in chronological order. */
const TIME_VALUES = (() => {
  const vals: string[] = [];
  for (const ap of ["AM", "PM"]) {
    for (const h12 of [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
      for (const m of MINUTES) {
        let h = h12 % 12;
        if (ap === "PM") h += 12;
        vals.push(`${pad(h)}:${pad(m)}`);
      }
    }
  }
  return vals;
})();

/** Single-dropdown time picker; labels follow the active language's clock. */
function TimeSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const { lang } = useLang();
  const t = useT();
  return (
    <select
      className="time-select"
      aria-label={t.booking.timeAria}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {TIME_VALUES.map((v) => (
        <option key={v} value={v}>{formatTime(v, lang)}</option>
      ))}
    </select>
  );
}

export default function BookingForm() {
  const { fleet, companyText } = useContent();
  const { lang } = useLang();
  const t = useT();
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
      ? t.msg.tripHourly
      : isDays
      ? t.msg.tripDaily
      : t.msg.tripDistance;
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
      `${t.msg.heading} ${company.name}`,
      `${t.msg.tripType}: ${tripLabel}`,
      `${t.msg.vehicle}: ${vehicle.name} (${vehicle.tier})`,
      `${t.msg.passengers} ${vehicle.seats}`,
      `${t.msg.pickup}: ${form.pickup}`,
      isHourly
        ? `${t.msg.duration}: ${form.hours} ${t.msg.hoursUnit}`
        : `${t.msg.dropoff}: ${form.dropoff}`,
      `${isDays ? t.msg.start : t.msg.date}: ${form.date}  ${t.msg.timeLabel}: ${formatTime(form.time, lang)}`,
      isDays ? `${t.msg.end}: ${form.endDate}  ${t.msg.timeLabel}: ${formatTime(form.endTime, lang)}` : "",
      isDays ? `${t.msg.duration}: ${dayCount} ${t.msg.daysUnit}` : "",
      `${t.msg.name}: ${form.name}`,
      `${t.msg.phone}: ${form.phone}`,
      form.message ? `${t.msg.notes}: ${form.message}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${company.whatsappRaw}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="book" className="section">
      <div className="container">
        <div className="section-head reveal">
          <Link to="/" className="back-link">
            <Icon name="arrow" size={16} /> {t.booking.back}
          </Link>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title">
            {t.contact.titleLead}{" "}
            <span className="text-silver">{t.contact.titleAccent}</span>
          </h2>
          <p className="section-sub">{t.contact.sub}</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a className="contact__row" href={`tel:${company.phoneRaw}`}>
              <span className="contact__row-icon">
                <Icon name="phone" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.callLabel}</span>
                <br />
                <span className="contact__row-value">{company.phoneDisplay}</span>
              </span>
            </a>
            <a className="contact__row" href={`mailto:${company.email}`}>
              <span className="contact__row-icon">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.emailLabel}</span>
                <br />
                <span className="contact__row-value">{company.email}</span>
              </span>
            </a>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="pin" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.addressLabel}</span>
                <br />
                <span className="contact__row-value">{company.address}</span>
              </span>
            </div>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="clock" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.hoursLabel}</span>
                <br />
                <span className="contact__row-value">{companyText.hours}</span>
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
                <h3>{t.booking.successTitle}</h3>
                <p className="section-sub">{t.booking.successText}</p>
                <button
                  className="btn btn--ghost"
                  style={{ marginTop: 18 }}
                  onClick={() => {
                    setForm(initial);
                    setSent(false);
                  }}
                >
                  {t.booking.newRequest}
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
                    <Icon name="pin" size={16} /> {t.booking.tripDistance}
                  </button>
                  <button
                    type="button"
                    className={form.tripType === "days" ? "active" : ""}
                    onClick={() => set({ tripType: "days" })}
                  >
                    <Icon name="calendar" size={16} /> {t.booking.tripDays}
                  </button>
                  <button
                    type="button"
                    className={form.tripType === "hourly" ? "active" : ""}
                    onClick={() => set({ tripType: "hourly" })}
                  >
                    <Icon name="clock" size={16} /> {t.booking.tripHourly}
                  </button>
                </div>

                <div className="field">
                  <label htmlFor="pickup">{t.booking.pickupLabel}</label>
                  <input
                    id="pickup"
                    value={form.pickup}
                    onChange={update("pickup")}
                    placeholder={t.booking.pickupPlaceholder}
                    required
                  />
                </div>

                {form.tripType === "hourly" ? (
                  <div className="field">
                    <label htmlFor="hours">{t.booking.durationLabel}</label>
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
                    <label htmlFor="dropoff">{t.booking.dropoffLabel}</label>
                    <input
                      id="dropoff"
                      value={form.dropoff}
                      onChange={update("dropoff")}
                      placeholder={t.booking.dropoffPlaceholder}
                      required
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="vehicle">{t.booking.vehicleLabel}</label>
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
                    <span className="vehicle-summary__val">
                      {t.booking.upTo} {vehicle.seats} {t.booking.paxUnit}
                    </span>
                  </span>
                  <span className="vehicle-summary__item">
                    <Icon name="luggage" size={15} />
                    <span className="vehicle-summary__val">
                      {vehicle.luggage} {t.booking.bagsUnit}
                    </span>
                  </span>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="date">{form.tripType === "days" ? t.booking.startDate : t.booking.date}</label>
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
                    <label>{form.tripType === "days" ? t.booking.startTime : t.booking.time}</label>
                    <TimeSelect value={form.time} onChange={(v) => set({ time: v })} />
                  </div>
                </div>

                {form.tripType === "days" && (
                  <div className="form__row">
                    <div className="field">
                      <label htmlFor="endDate">{t.booking.endDate}</label>
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
                      <label>{t.booking.endTime}</label>
                      <TimeSelect value={form.endTime} onChange={(v) => set({ endTime: v })} />
                    </div>
                  </div>
                )}

                <div className="form__row">
                  <div className="field">
                    <label htmlFor="name">{t.booking.fullName}</label>
                    <input id="name" required value={form.name} onChange={update("name")} placeholder={t.booking.namePlaceholder} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">{t.booking.phone}</label>
                    <input id="phone" required value={form.phone} onChange={update("phone")} placeholder={t.booking.phonePlaceholder} />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">{t.booking.notes}</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder={t.booking.notesPlaceholder}
                  />
                </div>

                <button type="submit" className="btn btn--primary">
                  <Icon name="whatsapp" size={20} /> {t.booking.submit}
                </button>
                <p className="form__note">{t.contact.note}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
