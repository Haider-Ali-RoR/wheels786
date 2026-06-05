import { Icon } from "./Icons";
import { features } from "../data/content";
import img from "../assets/mercedes-rear.jpeg";

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="container why__grid">
        <div className="why__media reveal">
          <img src={img} alt="786 Transport Mercedes in Paris" />
        </div>

        <div className="reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">
            The <span className="text-silver">786 Transport</span> Difference
          </h2>
          <p className="section-sub">
            We combine the elegance of a premium fleet with reliable,
            customer-first service — so every ride feels effortless.
          </p>

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
