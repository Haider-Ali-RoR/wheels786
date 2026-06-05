import { company, navLinks, services } from "../data/content";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <img src={logo} alt="786 Transport logo" />
              <strong>{company.name}</strong>
            </div>
            <p className="footer__about">{company.description}</p>
          </div>

          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.address}</li>
              <li>{company.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © 2024–2026 {company.name}. All rights reserved.
          </span>
          <span>Premium VTC &amp; Private Transport · Paris, France</span>
        </div>
      </div>
    </footer>
  );
}
