import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { company } from "../data/content";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div className="reveal">
          <h2>
            Ready to <span className="text-silver">ride in comfort?</span>
          </h2>
          <p>Book your premium chauffeur in Paris — available 24/7.</p>
        </div>
        <div className="cta-band__actions reveal">
          <Link to="/book" className="btn btn--primary">
            Book Your Ride <Icon name="arrow" size={18} />
          </Link>
          <a href={`tel:${company.phoneRaw}`} className="btn btn--light">
            <Icon name="phone" size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
