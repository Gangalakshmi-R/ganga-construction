import { motion } from "framer-motion";
import { Phone, WhatsApp } from "../Icons";

const EASE = [0.22, 1, 0.36, 1];

function FloatingWhatsapp() {
  return (
    <>
      {/* One-tap call button, shown on phones only (see .fab-call in global.css) */}
      <motion.a
        className="fab fab-call"
        href="tel:+919943042474"
        aria-label="Call Ganga Construction on +91 99430 42474"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: EASE }}
      >
        <i>
          <Phone />
        </i>
        <em style={{ fontStyle: "normal" }}>Call us</em>
      </motion.a>

      <motion.a
        className="fab"
        href="https://wa.me/919943042474"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Ganga Construction on WhatsApp (opens in a new tab)"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6, ease: EASE }}
      >
        <i>
          <WhatsApp />
        </i>
        <em style={{ fontStyle: "normal" }}>Chat on WhatsApp</em>
      </motion.a>
    </>
  );
}

export default FloatingWhatsapp;
