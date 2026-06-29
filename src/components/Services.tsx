import { Icon } from "./Icons";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="section section--alt services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title">
            Our <span className="text-silver">Services</span>
          </h2>
          <p className="section-sub">Tailor-made travel, just for you.</p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <a href="#contact" className="service-card reveal" key={s.title}>
              <span className="service-card__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="service-card__icon">
                <Icon name={s.icon} size={26} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="service-card__more">
                Book this service <Icon name="arrow" size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
