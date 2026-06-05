import { Icon } from "./Icons";
import { coverage } from "../data/content";

export default function Coverage() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Where We Drive</span>
          <h2 className="section-title">
            Coverage Across <span className="text-silver">Paris & Beyond</span>
          </h2>
          <p className="section-sub">
            Based in Paris, available everywhere — from local transfers to
            cross-Europe journeys.
          </p>
        </div>

        <div className="coverage__grid">
          {coverage.map((c) => (
            <div className="coverage__item reveal" key={c}>
              <Icon name="pin" size={18} />
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
