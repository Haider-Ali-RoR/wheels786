import { Icon } from "./Icons";
import { fleet } from "../data/content";
import front from "../assets/mercedes-front.jpeg";
import rear from "../assets/mercedes-rear.jpeg";

const images: Record<string, string> = { front, rear };

export default function Fleet() {
  return (
    <section id="fleet" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Vehicles</span>
          <h2 className="section-title">
            A <span className="text-silver">Premium Fleet</span> at Your Service
          </h2>
          <p className="section-sub">
            Travel in immaculately maintained Mercedes-Benz vehicles, equipped
            for comfort on every journey.
          </p>
        </div>

        <div className="fleet__grid">
          {fleet.map((v, i) => (
            <article className="fleet__card reveal" key={i}>
              <div className="fleet__media">
                <img src={images[v.image]} alt={`${v.name} — ${v.type}`} />
                <span className="fleet__type">{v.type}</span>
              </div>
              <div className="fleet__body">
                <h3>{v.name}</h3>
                <p>{v.text}</p>
                <div className="fleet__specs">
                  <span className="fleet__spec">
                    <Icon name="users" size={18} /> {v.seats} passengers
                  </span>
                  <span className="fleet__spec">
                    <Icon name="luggage" size={18} /> {v.luggage} bags
                  </span>
                </div>
                <ul className="fleet__features">
                  {v.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
