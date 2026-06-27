import { Icon } from "./Icons";
import { routes } from "../data/content";

export default function Routes() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Fixed Prices</span>
          <h2 className="section-title">
            Popular <span className="text-silver">Routes & Fares</span>
          </h2>
          <p className="section-sub">
            All-inclusive prices — tolls, parking and taxes included. No surge
            pricing, no meters, no surprises. From-prices shown for our E-Class.
          </p>
        </div>

        <div className="routes__grid">
          {routes.map((r) => (
            <article className="route reveal" key={`${r.from}-${r.to}`}>
              {r.popular && <span className="route__tag">Popular</span>}
              <div className="route__path">
                <span className="route__city">{r.from}</span>
                <span className="route__arrow">
                  <Icon name="arrow" size={18} />
                </span>
                <span className="route__city">{r.to}</span>
              </div>
              <div className="route__foot">
                <span className="route__price">
                  <span className="route__from">from</span> €{r.price}
                </span>
                <a href="#contact" className="route__book">
                  Book <Icon name="arrow" size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="routes__note reveal">
          Need a custom route or a different vehicle class?{" "}
          <a href="#contact">Request a free quote</a> — we cover all of France &
          Europe.
        </p>
      </div>
    </section>
  );
}
