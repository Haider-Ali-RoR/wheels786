import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icons";
import { fleet } from "../data/content";
import eclass from "../assets/mercedes-front.jpeg";
import vclass from "../assets/vclass.jpeg";
import sclass from "../assets/sclass.jpeg";

const images: Record<string, string> = { eclass, vclass, sclass };

type Vehicle = (typeof fleet)[number];

export default function Fleet() {
  const [active, setActive] = useState<Vehicle | null>(null);

  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="fleet" className="section fleet">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">The Fleet</span>
          <h2 className="section-title">
            Our <span className="text-silver">Premium Fleet</span>
          </h2>
          <p className="section-sub">
            A curated Mercedes-Benz collection, for every journey.
          </p>
        </div>

        <div className="fleet__grid">
          {fleet.map((v) => (
            <button
              type="button"
              className="fleet-card reveal"
              key={v.name}
              onClick={() => setActive(v)}
            >
              <div className="fleet-card__media">
                <img src={images[v.image]} alt={`${v.name} — ${v.tier}`} />
                <span className="fleet-card__shade" />
                {v.badge && <span className="fleet-card__badge">{v.badge}</span>}
              </div>

              <div className="fleet-card__body">
                <span className="fleet-card__tier">{v.tier}</span>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
                <div className="fleet-card__specs">
                  <span className="fleet-card__spec">
                    <Icon name="users" size={17} /> {v.seats} Pax
                  </span>
                  <span className="fleet-card__spec">
                    <Icon name="luggage" size={17} /> {v.luggage} Bags
                  </span>
                </div>
                <span className="fleet-card__rates">
                  View class details <Icon name="arrow" size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <FleetModal vehicle={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}

function FleetModal({ vehicle, onClose }: { vehicle: Vehicle; onClose: () => void }) {
  // Render at document.body so the fixed overlay escapes any ancestor
  // stacking/transform context and always covers the full viewport.
  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" aria-label="Close" onClick={onClose}>
          <Icon name="close" size={20} />
        </button>

        <div className="modal__media">
          <img src={images[vehicle.image]} alt={vehicle.name} />
          <div className="modal__media-info">
            <span className="fleet-card__tier">{vehicle.tier}</span>
            <h3>{vehicle.name}</h3>
            <div className="fleet-card__specs">
              <span className="fleet-card__spec">
                <Icon name="users" size={16} /> {vehicle.seats} Pax
              </span>
              <span className="fleet-card__spec">
                <Icon name="luggage" size={16} /> {vehicle.luggage} Bags
              </span>
            </div>
          </div>
        </div>

        <div className="modal__rates">
          <div className="modal__rates-head">
            <h4>Class Highlights</h4>
            <span className="modal__rates-note">{vehicle.tier}</span>
          </div>

          <ul className="spec-list">
            {vehicle.features.map((f) => (
              <li key={f}>
                <Icon name="check" size={16} /> {f}
              </li>
            ))}
          </ul>

          <div className="modal__specs-grid">
            <div className="modal__specs-item">
              <Icon name="users" size={18} />
              <span className="modal__specs-val">{vehicle.seats}</span>
              <span className="modal__specs-key">Passengers</span>
            </div>
            <div className="modal__specs-item">
              <Icon name="luggage" size={18} />
              <span className="modal__specs-val">{vehicle.luggage}</span>
              <span className="modal__specs-key">Luggage</span>
            </div>
          </div>

          <a href="#contact" className="btn btn--primary modal__cta" onClick={onClose}>
            Enquire About This Class <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
