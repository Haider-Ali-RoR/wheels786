import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Client Reviews</span>
          <h2 className="section-title">
            Trusted by <span className="text-silver">Travellers</span>
          </h2>
          <p className="section-sub">
            Rated 5/5 by thousands of satisfied passengers across Paris and
            beyond.
          </p>
        </div>

        <div className="reviews__grid">
          {testimonials.map((t) => (
            <article className="review reveal" key={t.name}>
              <div className="review__stars">{"★".repeat(t.rating)}</div>
              <p className="review__text">“{t.text}”</p>
              <div className="review__author">
                <div className="review__avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="review__name">{t.name}</div>
                  <div className="review__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
