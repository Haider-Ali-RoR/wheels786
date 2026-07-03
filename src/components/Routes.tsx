import { Icon } from "./Icons";
import { routes } from "../data/content";

export default function Routes() {
  return (
    <section id="pricing" className="section section--alt routes">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Where We Travel</span>
          <h2 className="section-title">
            Popular <span className="text-silver">Travel Points</span>
          </h2>
          <p className="section-sub">
            Door-to-door between Paris, the airports, and beyond. Contact us for
            a tailored quote on any journey.
          </p>
        </div>

        <div className="routes__grid">
          {routes.map((r) => (
            <article
              className={`route-card reveal ${r.popular ? "route-card--popular" : ""}`}
              key={`${r.from}-${r.to}`}
            >
              {r.popular && (
                <span className="route-card__flag">
                  <Icon name="star" size={12} /> Most Popular
                </span>
              )}

              <div className="route-card__route">
                <div className="route-card__stop">
                  <span className="route-card__dot route-card__dot--from">
                    <Icon name="pin" size={13} />
                  </span>
                  <div className="route-card__place">
                    <span className="route-card__label">From</span>
                    <span className="route-card__city">{r.from}</span>
                  </div>
                </div>

                <span className="route-card__line" />

                <div className="route-card__stop">
                  <span className="route-card__dot route-card__dot--to">
                    <Icon name="pin" size={13} />
                  </span>
                  <div className="route-card__place">
                    <span className="route-card__label">To</span>
                    <span className="route-card__city">{r.to}</span>
                  </div>
                </div>
              </div>

              <div className="route-card__foot">
                <span className="route-card__time">
                  <Icon name="clock" size={14} /> {r.duration}
                </span>
                <a href="#contact" className="btn btn--primary route-card__btn">
                  Enquire <Icon name="arrow" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="routes__note reveal">
          Every transfer is door-to-door with tolls, parking, and meet &amp;
          greet included. Van (up to 7 pax) and S-Class also available.{" "}
          <a href="#fleet">View all vehicles →</a>
        </p>
      </div>
    </section>
  );
}
