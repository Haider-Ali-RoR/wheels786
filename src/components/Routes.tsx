import { Icon } from "./Icons";
import { useContent, useT } from "../i18n/LanguageContext";

export default function Routes() {
  const { routes } = useContent();
  const t = useT();
  return (
    <section id="pricing" className="section section--alt routes">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.travelPoints.eyebrow}</span>
          <h2 className="section-title">
            {t.travelPoints.titleLead}{" "}
            <span className="text-silver">{t.travelPoints.titleAccent}</span>
          </h2>
          <p className="section-sub">{t.travelPoints.sub}</p>
        </div>

        <div className="routes__grid">
          {routes.map((r, i) => (
            <article
              className={`route-card reveal ${r.popular ? "route-card--popular" : ""}`}
              key={i}
            >
              {r.popular && (
                <span className="route-card__flag">
                  <Icon name="star" size={12} /> {t.travelPoints.mostPopular}
                </span>
              )}

              <div className="route-card__route">
                <div className="route-card__stop">
                  <span className="route-card__dot route-card__dot--from">
                    <Icon name="pin" size={13} />
                  </span>
                  <div className="route-card__place">
                    <span className="route-card__label">{t.travelPoints.from}</span>
                    <span className="route-card__city">{r.from}</span>
                  </div>
                </div>

                <span className="route-card__line" />

                <div className="route-card__stop">
                  <span className="route-card__dot route-card__dot--to">
                    <Icon name="pin" size={13} />
                  </span>
                  <div className="route-card__place">
                    <span className="route-card__label">{t.travelPoints.to}</span>
                    <span className="route-card__city">{r.to}</span>
                  </div>
                </div>
              </div>

              <div className="route-card__foot">
                <span className="route-card__time">
                  <Icon name="clock" size={14} /> {r.duration}
                </span>
                <a href="#contact" className="btn btn--primary route-card__btn">
                  {t.travelPoints.enquire} <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="routes__note reveal">
          {t.travelPoints.note}{" "}
          <a href="#fleet">{t.travelPoints.viewAll}</a>
        </p>
      </div>
    </section>
  );
}
