import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getAllReviews } from "../../api/reviewApi";
import { SplitHeading } from "../Reveal";
import { ArrowLeft, ArrowRight, Check, Quote, Star } from "../Icons";

const TRUST = [
  "35+ years of experience",
  "100+ projects delivered",
  "Serving all of Tamil Nadu",
  "Trusted by homeowners and businesses",
];

function Stars({ rating = 5 }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating || 5)));
  return (
    <div className="stars" role="img" aria-label={`${filled} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={i < filled ? "" : "off"} />
      ))}
    </div>
  );
}

function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getAllReviews();
        if (alive) setReviews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const n = reviews.length;
  const go = (d) => {
    setDir(d);
    setI((c) => (c + d + n) % n);
  };

  const r = reviews[i];

  return (
    <section id="reviews" className="sheet sheet-mist">
      <div className="wrap rev-grid">
        <div className="rev-side">
          <SplitHeading text="What our clients say." className="h2" />
          <ul className="trust">
            {TRUST.map((t) => (
              <li key={t}>
                <Check />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div>
          {loading && <div className="quote-box" aria-busy="true" />}

          {!loading && n === 0 && (
            <div className="empty">Client reviews will appear here once they are published.</div>
          )}

          {!loading && n > 0 && r && (
            <div className="quote-box">
              <Quote className="quote-mark" />
              <div style={{ position: "relative" }} aria-live="polite">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={r.id ?? i}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir * -30 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "grid", gap: 20 }}
                  >
                    <Stars rating={r.rating} />
                    <p className="quote-text">{r.review}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="quote-by">
                <div className="who">
                  <span className="avatar" aria-hidden="true">
                    {(r.name || "?").trim().charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <b>{r.name}</b>
                    <span>Ganga Construction client</span>
                  </div>
                </div>
                {n > 1 && (
                  <div className="rev-nav">
                    <button className="arrow" onClick={() => go(-1)} aria-label="Previous review">
                      <ArrowLeft />
                    </button>
                    <span className="rev-count">
                      {i + 1} / {n}
                    </span>
                    <button className="arrow" onClick={() => go(1)} aria-label="Next review">
                      <ArrowRight />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
