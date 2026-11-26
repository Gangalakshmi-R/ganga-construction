import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Headline whose words rise out of a mask.
 * One signature motion used for every section title.
 */
export function SplitHeading({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  immediate = false,
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={`h-display ${className}`}
      aria-label={text}
      initial="hidden"
      {...(immediate
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "-12% 0px" } })}
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="mask">
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: reduce ? 0 : "115%", rotate: reduce ? 0 : 5 },
                show: { y: 0, rotate: 0, transition: { duration: 0.8, ease: EASE } },
              }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </MotionTag>
  );
}

/**
 * Generic wrapper. `kind` picks the entrance so sections do not all
 * share the same fade-up.
 *  - wipe:  clip-path opens from the bottom (images)
 *  - slide: slides in sideways
 *  - fade:  opacity only
 */
export function Reveal({
  children,
  kind = "fade",
  delay = 0,
  x = 40,
  className,
  style,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const M = motion[as];

  const variants = {
    wipe: {
      hidden: { opacity: 0, clipPath: "inset(14% 10% 14% 10% round 40px)", y: 24 },
      show: { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 32px)", y: 0 },
    },
    slide: { hidden: { opacity: 0, x }, show: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  }[kind];

  if (reduce) {
    const Plain = as;
    return <Plain className={className} style={style}>{children}</Plain>;
  }

  return (
    <M
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}
