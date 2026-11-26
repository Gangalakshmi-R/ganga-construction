import { motion } from "framer-motion";
import { WhatsApp } from "../Icons";

function FloatingWhatsapp() {
  return (
    <motion.a
      className="fab"
      href="https://wa.me/919943042474"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Ganga Construction on WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <i>
        <WhatsApp />
      </i>
      <em style={{ fontStyle: "normal" }}>Chat on WhatsApp</em>
    </motion.a>
  );
}

export default FloatingWhatsapp;
