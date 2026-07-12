import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { useContent, useT } from "../i18n/LanguageContext";

export default function FixedRates() {
  const { fixedRates } = useContent();
  const t = useT();
  return (
    <section id="pricing" className="section rates">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.fixedRates.eyebrow}</span>
          <h2 className="section-title">
            {t.fixedRates.titleLead}{" "}
            <span className="text-silver">{t.fixedRates.titleAccent}</span>
          </h2>
          <p className="section-sub">{t.fixedRates.sub}</p>
        </div>

        <div className="rates__grid">
          {fixedRates.map((r, i) => (
            <article
              className={`rate-card reveal ${r.popular ? "rate-card--popular" : ""}`}
              key={i}
            >
              {r.popular && (
                <span className="rate-card__badge">
                  <Icon name="star" size={11} /> {t.fixedRates.mostPopular}
                </span>
              )}

              <div className="rate-card__route">
                <div className="rate-card__stop">
                  <span className="rate-card__icon">
                    <Icon name={r.fromIcon} size={16} />
                  </span>
                  <span className="rate-card__city">{r.from}</span>
                </div>
                <span className="rate-card__line" />
                <div className="rate-card__stop">
                  <span className="rate-card__icon">
                    <Icon name={r.toIcon} size={16} />
                  </span>
                  <span className="rate-card__city">{r.to}</span>
                </div>
              </div>

              <div className="rate-card__foot">
                <div className="rate-card__pricing">
                  <span className="rate-card__from">{t.fixedRates.from}</span>
                  <span className="rate-card__price">
                    {r.price}
                    <span className="rate-card__cur">€</span>
                  </span>
                </div>
                <Link to="/book" className="btn btn--primary rate-card__book">
                  {t.fixedRates.book} <Icon name="arrow" size={16} />
                </Link>
              </div>

              <span className="rate-card__vehicle">{t.fixedRates.vehicleNote}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
