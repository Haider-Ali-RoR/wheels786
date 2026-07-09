import { Icon } from "./Icons";
import { useContent, useT } from "../i18n/LanguageContext";

export default function Services() {
  const { services } = useContent();
  const t = useT();
  return (
    <section id="services" className="section section--alt services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="section-title">
            {t.services.titleLead}{" "}
            <span className="text-silver">{t.services.titleAccent}</span>
          </h2>
          <p className="section-sub">{t.services.sub}</p>
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
                {t.services.cardMore} <Icon name="arrow" size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
