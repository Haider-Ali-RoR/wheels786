import { Icon } from "./Icons";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title">
            Tailored <span className="text-silver">Transport Services</span>
          </h2>
          <p className="section-sub">
            From airport runs to bespoke tours, every journey is handled with
            professionalism, punctuality, and discretion.
          </p>
        </div>

        <div className="grid-3">
          {services.map((s) => (
            <article className="card reveal" key={s.title}>
              <div className="card__icon">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
