import { Icon } from "./Icons";
import { company } from "../data/content";
import heroImg from "../assets/hero-paris.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${heroImg})` }} />
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <h1>
          Travel Paris in <span className="text-silver">Timeless Luxury</span>
        </h1>

        <p>
          Premium Mercedes-Benz chauffeur service. Fixed rates, professional
          drivers — available 24/7.
        </p>

        <span className="hero__badge">
          <span className="stars">★★★★★</span>
          {company.rating} / 5 · {company.reviewCount}+ reviews
        </span>

        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary">
            Get a Free Quote <Icon name="arrow" size={18} />
          </a>
          <a href={`tel:${company.phoneRaw}`} className="btn btn--ghost">
            <Icon name="phone" size={18} /> {company.phoneDisplay}
          </a>
        </div>
      </div>

      <a href="#stats" className="hero__scroll" aria-label="Scroll down">
        <Icon name="mouse" size={26} />
        <Icon name="chevron" size={20} />
      </a>
    </section>
  );
}
