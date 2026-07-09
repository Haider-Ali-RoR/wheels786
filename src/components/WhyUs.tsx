import { Icon } from "./Icons";
import { useContent, useT } from "../i18n/LanguageContext";
import img from "../assets/mercedes-rear.jpeg";

export default function WhyUs() {
  const { features } = useContent();
  const t = useT();
  return (
    <section id="why" className="section">
      <div className="container why__grid">
        <div className="why__media reveal">
          <img src={img} alt={t.why.imgAlt} />
        </div>

        <div className="reveal">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2 className="section-title">
            {t.why.titleLead}{" "}
            <span className="text-silver">{t.why.titleAccent}</span>
            {t.why.titleTrail ? ` ${t.why.titleTrail}` : ""}
          </h2>
          <p className="section-sub">{t.why.sub}</p>

          <div className="why__list">
            {features.map((f) => (
              <div className="why__item" key={f.title}>
                <div className="why__item-icon">
                  <Icon name={f.icon} size={22} />
                </div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
