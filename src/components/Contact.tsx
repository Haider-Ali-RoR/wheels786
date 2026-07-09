import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { company } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Book Your Ride</span>
          <h2 className="section-title">
            Reserve in <span className="text-silver">Minutes</span>
          </h2>
          <p className="section-sub">
            Tell us about your journey and get a fixed, all-inclusive quote — fast.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info reveal">
            <a className="contact__row" href={`tel:${company.phoneRaw}`}>
              <span className="contact__row-icon">
                <Icon name="phone" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Call / WhatsApp</span>
                <br />
                <span className="contact__row-value">{company.phoneDisplay}</span>
              </span>
            </a>
            <a className="contact__row" href={`mailto:${company.email}`}>
              <span className="contact__row-icon">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Email</span>
                <br />
                <span className="contact__row-value">{company.email}</span>
              </span>
            </a>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="pin" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Address</span>
                <br />
                <span className="contact__row-value">{company.address}</span>
              </span>
            </div>
            <div className="contact__row">
              <span className="contact__row-icon">
                <Icon name="clock" size={20} />
              </span>
              <span>
                <span className="contact__row-label">Hours</span>
                <br />
                <span className="contact__row-value">{company.hours}</span>
              </span>
            </div>
          </div>

          <div className="form contact__cta reveal">
            <div className="contact__cta-icon">
              <Icon name="car" size={30} />
            </div>
            <h3>Ready when you are</h3>
            <p className="section-sub">
              Get a fixed, all-inclusive quote in under a minute — no payment
              required.
            </p>
            <Link to="/book" className="btn btn--primary">
              <Icon name="arrow" size={18} /> Book Your Ride
            </Link>
            <p className="form__note">
              Free quote · No payment required · 100% refund if cancelled 12h+
              before pickup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
