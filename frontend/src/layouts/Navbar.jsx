import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, BrandMark, Close, Menu, Phone } from "../components/Icons";

export const NAV_ITEMS = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Reviews", to: "reviews" },
  { label: "Contact", to: "contact" },
];

export const goTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = id === "home" ? 0 : el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: "smooth" });
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...NAV_ITEMS.map((n) => n.to), "cost-estimation"];
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.intersectionRatio));
        let best = null;
        let bestRatio = 0;
        seen.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        });
        if (best) setActive(best === "cost-estimation" ? "contact" : best);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.2, 0.5, 0.8, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const jump = (id) => {
    setOpen(false);
    setTimeout(() => goTo(id), open ? 350 : 0);
  };

  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />

      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-pill">
          <button className="brand" onClick={() => jump("home")} aria-label="Ganga Construction, back to top">
            <BrandMark />
            <span>
              <big>Ganga Construction</big>
            </span>
          </button>

          <nav aria-label="Main">
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <button
                    className={active === item.to ? "is-active" : ""}
                    aria-current={active === item.to ? "true" : undefined}
                    onClick={() => jump(item.to)}
                  >
                    {active === item.to && (
                      <motion.i
                        layoutId="nav-active"
                        className="active-bg"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    )}
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button className="btn nav-cta" onClick={() => jump("cost-estimation")}>
            Get an estimate
            <span className="btn-dot">
              <ArrowUpRight />
            </span>
          </button>

          <button className="nav-burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu on-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <Close />
            </button>
            <ul>
              {[...NAV_ITEMS, { label: "Cost estimate", to: "cost-estimation" }].map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
                >
                  <button onClick={() => jump(item.to)}>{item.label}</button>
                </motion.li>
              ))}
            </ul>
            <div className="menu-foot">
              <a className="btn btn-light" href="tel:+919943042474">
                Call +91 99430 42474
                <span className="btn-dot">
                  <Phone />
                </span>
              </a>
              <span>Trichy, Tamil Nadu</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
