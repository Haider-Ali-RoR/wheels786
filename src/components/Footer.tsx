import { company } from "../data/content";
import { useContent, useT } from "../i18n/LanguageContext";
import logo from "../assets/logo.jpeg";

export default function Footer() {
  const { navLinks, services, companyText } = useContent();
  const t = useT();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <img src={logo} alt="786 Transport logo" />
              <strong>{company.name}</strong>
            </div>
            <p className="footer__about">{companyText.description}</p>
          </div>

          <div className="footer__col">
            <h4>{t.footer.navigation}</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t.footer.services}</h4>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t.footer.contact}</h4>
            <ul>
              <li>
                <a href={`tel:${company.phoneRaw}`}>{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>{company.address}</li>
              <li>{companyText.hours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © 2024–2026 {company.name}. {t.footer.rights}
          </span>
          <span>
            {company.legalName} · {t.footer.siren} {company.siren} · {t.footer.vat} {company.vat}
          </span>
        </div>
      </div>
    </footer>
  );
}
