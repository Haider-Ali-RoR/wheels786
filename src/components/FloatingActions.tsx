import { Icon } from "./Icons";
import { company } from "../data/content";

export default function FloatingActions() {
  return (
    <div className="fab">
      <a
        className="fab__wa"
        href={`https://wa.me/${company.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
      <a className="fab__call" href={`tel:${company.phoneRaw}`} aria-label="Call us">
        <Icon name="phone" size={24} />
      </a>
    </div>
  );
}
