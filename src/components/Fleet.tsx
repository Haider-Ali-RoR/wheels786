import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icons";
import { useContent, useT } from "../i18n/LanguageContext";
import type { ContentBundle } from "../data/content";
import eclass from "../assets/mercedes-front.jpeg";
import vclass from "../assets/vclass.jpeg";
import sclass from "../assets/sclass.jpeg";

const images: Record<string, string> = { eclass, vclass, sclass };

type Vehicle = ContentBundle["fleet"][number];

export default function Fleet() {
  const { fleet } = useContent();
  const t = useT();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + fleet.length) % fleet.length)),
    [fleet.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % fleet.length)),
    [fleet.length]
  );

  // Close on Escape, navigate with arrow keys, and lock body scroll while open.
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="fleet" className="section fleet">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t.fleet.eyebrow}</span>
          <h2 className="section-title">
            {t.fleet.titleLead}{" "}
            <span className="text-silver">{t.fleet.titleAccent}</span>
          </h2>
          <p className="section-sub">{t.fleet.sub}</p>
        </div>

        <div className="fleet__grid">
          {fleet.map((v, i) => (
            <button
              type="button"
              className="fleet-card reveal"
              key={v.image}
              onClick={() => setActiveIndex(i)}
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
                    <Icon name="users" size={17} /> {v.seats} {t.fleet.pax}
                  </span>
                  <span className="fleet-card__spec">
                    <Icon name="luggage" size={17} /> {v.luggage} {t.fleet.bags}
                  </span>
                </div>
                <span className="fleet-card__rates">
                  {t.fleet.cardDetails} <Icon name="arrow" size={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <FleetModal
          vehicle={fleet[activeIndex]}
          onClose={close}
          onPrev={showPrev}
          onNext={showNext}
          showNav={fleet.length > 1}
        />
      )}
    </section>
  );
}

function FleetModal({
  vehicle,
  onClose,
  onPrev,
  onNext,
  showNav,
}: {
  vehicle: Vehicle;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  showNav: boolean;
}) {
  const t = useT();
  // Render at document.body so the fixed overlay escapes any ancestor
  // stacking/transform context and always covers the full viewport.
  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" aria-label={t.fleet.close} onClick={onClose}>
          <Icon name="close" size={20} />
        </button>

        {showNav && (
          <>
            <button
              className="modal__nav modal__nav--prev"
              aria-label={t.fleet.prev}
              onClick={onPrev}
            >
              <Icon name="arrow" size={20} />
            </button>
            <button
              className="modal__nav modal__nav--next"
              aria-label={t.fleet.next}
              onClick={onNext}
            >
              <Icon name="arrow" size={20} />
            </button>
          </>
        )}

        <div className="modal__media">
          <img src={images[vehicle.image]} alt={vehicle.name} />
          <div className="modal__media-info">
            <span className="fleet-card__tier">{vehicle.tier}</span>
            <h3>{vehicle.name}</h3>
            <div className="fleet-card__specs">
              <span className="fleet-card__spec">
                <Icon name="users" size={16} /> {vehicle.seats} {t.fleet.pax}
              </span>
              <span className="fleet-card__spec">
                <Icon name="luggage" size={16} /> {vehicle.luggage} {t.fleet.bags}
              </span>
            </div>
          </div>
        </div>

        <div className="modal__rates">
          <div className="modal__rates-head">
            <h4>{t.fleet.modalHead}</h4>
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
              <span className="modal__specs-key">{t.fleet.passengers}</span>
            </div>
            <div className="modal__specs-item">
              <Icon name="luggage" size={18} />
              <span className="modal__specs-val">{vehicle.luggage}</span>
              <span className="modal__specs-key">{t.fleet.luggage}</span>
            </div>
          </div>

          <a href="#contact" className="btn btn--primary modal__cta" onClick={onClose}>
            {t.fleet.enquire} <Icon name="arrow" size={17} />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
