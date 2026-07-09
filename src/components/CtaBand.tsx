import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { company } from "../data/content";
import { useT } from "../i18n/LanguageContext";

export default function CtaBand() {
  const t = useT();
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div className="reveal">
          <h2>
            {t.ctaBand.titleLead}{" "}
            <span className="text-silver">{t.ctaBand.titleAccent}</span>
          </h2>
          <p>{t.ctaBand.sub}</p>
        </div>
        <div className="cta-band__actions reveal">
          <Link to="/book" className="btn btn--primary">
            {t.ctaBand.book} <Icon name="arrow" size={18} />
          </Link>
          <a href={`tel:${company.phoneRaw}`} className="btn btn--light">
            <Icon name="phone" size={18} /> {t.ctaBand.call}
          </a>
        </div>
      </div>
    </section>
  );
}
