import { motion } from "framer-motion";

const DRAW = { duration: 1.1, ease: [0.65, 0, 0.35, 1] };

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      role="status"
      aria-label="Loading Ganga Construction"
    >
      <div className="loader-inner">
        <svg className="loader-arch" viewBox="0 0 78 96" fill="none" aria-hidden="true">
          <motion.path
            d="M6 92V38a33 33 0 0 1 66 0v54"
            stroke="#C9A8FF"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={DRAW}
          />
          <motion.path
            d="M26 92V44a13 13 0 0 1 26 0v48Z"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...DRAW, delay: 0.25 }}
          />
          <motion.path
            d="M0 92h78"
            stroke="#C9A8FF"
            strokeOpacity="0.6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...DRAW, delay: 0.1 }}
          />
        </svg>
        <motion.div
          className="loader-word"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Ganga Construction
        </motion.div>
        <motion.div className="loader-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Trichy
        </motion.div>
        <div className="loader-bar" aria-hidden="true">
          <motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }} />
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
