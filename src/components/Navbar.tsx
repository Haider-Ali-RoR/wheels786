import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icons";
import { company } from "../data/content";
import { useContent, useLang, useT } from "../i18n/LanguageContext";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const { navLinks } = useContent();
  const { lang, setLang } = useLang();
  const t = useT();

  // On the home page, section links are in-page hashes (smooth scroll).
  // On other pages, prefix with "/" so they navigate home first, then anchor.
  const sectionHref = (href: string) => (onHome ? href : `/${href}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when clicking anywhere outside the navbar.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const brandInner = (
    <>
      <img src={logo} alt="786 Transport logo" className="nav__logo" />
      <span className="nav__brand-text">
        <span className="nav__brand-name">{company.name}</span>
        <span className="nav__brand-tag">{t.nav.brandTag}</span>
      </span>
    </>
  );

  return (
    <header ref={headerRef} className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        {onHome ? (
          <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
            {brandInner}
          </a>
        ) : (
          <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
            {brandInner}
          </Link>
        )}

        <nav>
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={sectionHref(l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <div className="lang-switch" role="group" aria-label={t.nav.language}>
            <button
              type="button"
              className={`lang-switch__btn ${lang === "fr" ? "active" : ""}`}
              aria-pressed={lang === "fr"}
              onClick={() => setLang("fr")}
            >
              FR
            </button>
            <button
              type="button"
              className={`lang-switch__btn ${lang === "en" ? "active" : ""}`}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
          <a href={`tel:${company.phoneRaw}`} className="nav__phone">
            <Icon name="phone" size={18} />
            {company.phoneDisplay}
          </a>
          <Link to="/book" className="btn btn--primary" onClick={() => setOpen(false)}>
            {t.nav.book}
          </Link>
          <button
            className="nav__toggle"
            aria-label={t.nav.toggleMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "open" : ""}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={sectionHref(l.href)} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <Link to="/book" className="btn btn--primary" onClick={() => setOpen(false)}>
          {t.nav.book}
        </Link>
      </div>
    </header>
  );
}
