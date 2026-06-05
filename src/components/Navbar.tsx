import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { company, navLinks } from "../data/content";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="786 Transport logo" className="nav__logo" />
          <span className="nav__brand-text">
            <span className="nav__brand-name">{company.name}</span>
            <span className="nav__brand-tag">Paris · VTC</span>
          </span>
        </a>

        <nav>
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a href={`tel:${company.phoneRaw}`} className="nav__phone">
            <Icon name="phone" size={18} />
            {company.phoneDisplay}
          </a>
          <a href="#contact" className="btn btn--primary">
            Book Now
          </a>
          <button
            className="nav__toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={`tel:${company.phoneRaw}`}
          className="btn btn--ghost"
          onClick={() => setOpen(false)}
        >
          <Icon name="phone" size={18} /> {company.phoneDisplay}
        </a>
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
          Book Now
        </a>
      </div>
    </header>
  );
}
