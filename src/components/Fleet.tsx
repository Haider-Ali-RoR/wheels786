import { Icon } from "./Icons";
import { fleet } from "../data/content";
import eclass from "../assets/mercedes-front.jpeg";
import vclass from "../assets/vclass.jpeg";
import sclass from "../assets/sclass.jpeg";

const images: Record<string, string> = { eclass, vclass, sclass };

export default function Fleet() {
  return (
    <section id="fleet" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Fleet</span>
          <h2 className="section-title">
            Choose Your <span className="text-silver">Mercedes Class</span>
          </h2>
          <p className="section-sub">
            From executive sedans to spacious vans and first-class limousines —
            every vehicle is immaculately maintained for your comfort.
          </p>
        </div>

        <div className="grid-3">
          {fleet.map((v) => (
            <article className="fleet__card reveal" key={v.name}>
              <div className="fleet__media">
                <img src={images[v.image]} alt={`${v.name} — ${v.tier}`} />
                <span className="fleet__type">{v.tier}</span>
                {v.badge && <span className="fleet__badge">{v.badge}</span>}
              </div>
              <div className="fleet__body">
                <h3>{v.name}</h3>
                <div className="fleet__specs">
                  <span className="fleet__spec">
                    <Icon name="users" size={18} /> {v.seats} pax
                  </span>
                  <span className="fleet__spec">
                    <Icon name="luggage" size={18} /> {v.luggage} bags
                  </span>
                </div>
                <p>{v.text}</p>
                <ul className="fleet__features">
                  {v.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="fleet__footer">
                  <span className="fleet__price">
                    <span className="fleet__price-from">from</span> €{v.priceFrom}
                  </span>
                  <a href="#contact" className="btn btn--primary">
                    Book <Icon name="arrow" size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
