import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { company } from "../data/content";
import { useT } from "../i18n/LanguageContext";
import heroImg from "../assets/hero-paris.jpeg";

export default function Hero() {
  const t = useT();
  return (
    <section id="home" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <span className="hero__badge">
          <span className="stars">★★★★★</span>
          {company.rating} / 5 · {company.reviewCount}+ {t.hero.reviews}
        </span>

        <h1>
          {t.hero.titleLead}{" "}
          <span className="text-silver">{t.hero.titleAccent}</span>
        </h1>

        <p>{t.hero.subtitle}</p>

        <div className="hero__cta">
          <Link to="/book" className="btn btn--primary">
            {t.hero.quote} <Icon name="arrow" size={18} />
          </Link>
          <a href={`tel:${company.phoneRaw}`} className="btn btn--ghost">
            <Icon name="phone" size={18} /> {company.phoneDisplay}
          </a>
        </div>
      </div>

      <a href="#stats" className="hero__scroll" aria-label={t.hero.scroll}>
        <Icon name="mouse" size={26} />
        <Icon name="chevron" size={20} />
      </a>
    </section>
  );
}
