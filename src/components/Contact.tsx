import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { company } from "../data/content";
import { useContent, useT } from "../i18n/LanguageContext";

export default function Contact() {
  const { companyText } = useContent();
  const t = useT();
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section-title">
            {t.contact.titleLead}{" "}
            <span className="text-silver">{t.contact.titleAccent}</span>
          </h2>
          <p className="section-sub">{t.contact.sub}</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a className="contact__row" href={`tel:${company.phoneRaw}`}>
              <span className="contact__row-icon">
                <Icon name="phone" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.callLabel}</span>
                <br />
                <span className="contact__row-value">{company.phoneDisplay}</span>
              </span>
            </a>
            <a className="contact__row" href={`mailto:${company.email}`}>
              <span className="contact__row-icon">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.emailLabel}</span>
                <br />
                <span className="contact__row-value">{company.email}</span>
              </span>
            </a>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="pin" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.addressLabel}</span>
                <br />
                <span className="contact__row-value">{company.address}</span>
              </span>
            </div>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="clock" size={20} />
              </span>
              <span>
                <span className="contact__row-label">{t.contact.hoursLabel}</span>
                <br />
                <span className="contact__row-value">{companyText.hours}</span>
              </span>
            </div>
          </div>

          <div className="form contact__cta reveal">
            <div className="contact__cta-icon">
              <Icon name="car" size={30} />
            </div>
            <h3>{t.contact.ctaTitle}</h3>
            <p className="section-sub">{t.contact.ctaSub}</p>
            <Link to="/book" className="btn btn--primary">
              <Icon name="arrow" size={18} /> {t.contact.ctaButton}
            </Link>
            <p className="form__note">{t.contact.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
