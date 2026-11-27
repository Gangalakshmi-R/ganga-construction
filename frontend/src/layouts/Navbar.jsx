
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  ArrowUpRight,
  BrandMark,
  Close,
  Menu,
  Phone,
} from "../components/Icons";

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

  const top =
    id === "home"
      ? 0
      : el.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Active navigation section detection
  useEffect(() => {
    const sectionIds = [
      ...NAV_ITEMS.map((item) => item.to),
      "cost-estimation",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          const currentSection = visibleSections[0].target.id;

          setActive(
            currentSection === "cost-estimation"
              ? "contact"
              : currentSection
          );
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Mobile menu scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Navigation click
  const jump = (id) => {
    setOpen(false);

    // Update active state immediately
    setActive(
      id === "cost-estimation" ? "contact" : id
    );

    setTimeout(() => {
      goTo(id);
    }, open ? 350 : 0);
  };

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {/* Main navbar */}
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-pill">

          {/* Brand */}
          <button
            className="brand"
            onClick={() => jump("home")}
            aria-label="Ganga Construction, back to top"
          >
            <BrandMark />

            <span>
              <big>Ganga Construction</big>
            </span>
          </button>

          {/* Desktop navigation */}
          <nav aria-label="Main">
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.to;

                return (
                  <li key={item.to}>
                    <button
                      type="button"
                      className={isActive ? "is-active" : ""}
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      onClick={() => jump(item.to)}
                    >
                      {/* Animated white active background */}
                      {isActive && (
                        <motion.i
                          layoutId="nav-active"
                          className="active-bg"
                          aria-hidden="true"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 36,
                          }}
                        />
                      )}

                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Estimate button */}
          <button
            className="btn nav-cta"
            onClick={() => jump("cost-estimation")}
          >
            Get an estimate

            <span className="btn-dot">
              <ArrowUpRight />
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
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
            <button
              className="menu-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <Close />
            </button>

            <ul>
              {[
                ...NAV_ITEMS,
                { label: "Cost estimate", to: "cost-estimation" },
              ].map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.04,
                    duration: 0.4,
                  }}
                >
                  <button
                    onClick={() => jump(item.to)}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="menu-foot">
              <a
                className="btn btn-light"
                href="tel:+919943042474"
              >
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
