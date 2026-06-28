import { Icon } from "./Icons";
import { routes, routeVehicleNote } from "../data/content";

export default function Routes() {
  return (
    <section id="pricing" className="section section--alt routes">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Fixed Prices</span>
          <h2 className="section-title">
            Popular <span className="text-silver">Routes &amp; Fares</span>
          </h2>
          <p className="section-sub">
            All-inclusive prices — tolls, parking and taxes included. No surge
            pricing, no meters, no surprises. From-prices shown for our E-Class.
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

              <div className="route-card__journey">
                <span className="route-card__city">{r.from}</span>
                <span className="route-card__connector" />
                <span className="route-card__city">{r.to}</span>
              </div>

              <div className="route-card__foot">
                <div className="route-card__pricewrap">
                  <span className="route-card__from">From</span>
                  <span className="route-card__price">€{r.price}</span>
                </div>
                <a href="#contact" className="btn btn--primary route-card__btn">
                  Book <Icon name="arrow" size={16} />
                </a>
              </div>

              <div className="route-card__note">
                <span>{routeVehicleNote}</span>
                <span className="route-card__time">
                  <Icon name="clock" size={13} /> {r.duration}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="routes__note reveal">
          Prices include all tolls, parking, and meet &amp; greet. Van (up to 7
          pax) and S-Class available at higher rates.{" "}
          <a href="#fleet">View all vehicles →</a>
        </p>
      </div>
    </section>
  );
}
