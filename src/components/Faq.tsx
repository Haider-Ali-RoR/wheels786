import { useState } from "react";
import { Icon } from "./Icons";
import { faqs } from "../data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section section--alt">
      <div className="container container--narrow">
        <div className="section-head reveal">
          <span className="eyebrow">Good to Know</span>
          <h2 className="section-title">
            Frequently Asked <span className="text-silver">Questions</span>
          </h2>
        </div>

        <div className="faq reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq__item ${isOpen ? "open" : ""}`} key={f.q}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq__icon">
                    <Icon name="chevron" size={20} />
                  </span>
                </button>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
