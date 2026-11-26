import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Surfaces that catch a soft light following the pointer.
const LIT = ".card, .quote-box, .contact-list a";

const MainLayout = ({ children }) => {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = e.target.closest?.(LIT);
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
