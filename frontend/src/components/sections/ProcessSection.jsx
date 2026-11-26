import { motion } from "framer-motion";
import { SplitHeading } from "../Reveal";

const STEPS = [
  {
    title: "Share your plot and plan",
    text: "Tell us what you want to build and where. We review the site and your requirements.",
  },
  {
    title: "Plan and estimate",
    text: "You get floor plans, elevations and a clear cost estimate before any work begins.",
  },
  {
    title: "Build under supervision",
    text: "Site engineers and supervisors run the work day to day, with quality checks at each stage.",
  },
  {
    title: "Handover on time",
    text: "We finish, inspect and hand over a home or building that is ready to use.",
  },
];

function ProcessSection() {
  return (
    <section className="sheet sheet-white">
      <div className="wrap">
        <div className="sec-head">
          <SplitHeading text="How a project runs with us." className="h2" />
        </div>

        <ol className="proc" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              className="step"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ staggerChildren: 0.12, delayChildren: i * 0.22 }}
            >
              <motion.span
                className="step-line"
                variants={{
                  hidden: { scaleX: 0 },
                  show: { scaleX: 1, transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } },
                }}
              />
              <motion.span
                className="step-n"
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>
              <motion.h3
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              >
                {s.title}
              </motion.h3>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              >
                {s.text}
              </motion.p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProcessSection;
