import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SplitHeading } from "../Reveal";
import { Blueprint, Building, House, Plus, Wrench } from "../Icons";

const SERVICES = [
  {
    title: "Residential construction",
    icon: House,
    text: "Custom homes, independent houses and luxury villas built with quality materials, expert workmanship and long-lasting durability.",
    tags: ["Independent houses", "Villas", "Custom homes"],
  },
  {
    title: "Commercial construction",
    icon: Building,
    text: "Office buildings, showrooms and commercial developments delivered with professional supervision, quality standards and on-time handover.",
    tags: ["Offices", "Showrooms", "Developments"],
  },
  {
    title: "Architectural planning",
    icon: Blueprint,
    text: "Detailed floor plans, 3D elevations, site layouts and project planning that turn your ideas into buildable designs.",
    tags: ["Floor plans", "3D elevations", "Site layouts"],
  },
  {
    title: "Renovation and remodeling",
    icon: Wrench,
    text: "Upgrade existing homes and commercial spaces with modern finishes, structural improvements and careful detailing.",
    tags: ["Home upgrades", "Structural work", "Finishing"],
  },
];

function ServicesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="sheet sheet-mist">
      <div className="wrap svc-grid">
        <div className="svc-side">
          <SplitHeading text="Everything from plan to keys." className="h2" />
          <Reveal delay={0.1}>
            <p className="lead">
              Pick a service to see what is included. Each one is planned, supervised and delivered by
              the same team.
            </p>
          </Reveal>
        </div>

        <ul className="svc-list">
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            const Icon = s.icon;
            return (
              <motion.li
                key={s.title}
                className={`svc-row ${isOpen ? "is-open" : ""}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 style={{ margin: 0 }}>
                  <button
                    className="svc-btn"
                    aria-expanded={isOpen}
                    aria-controls={`svc-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="svc-ico">
                      <Icon />
                    </span>
                    <span className="svc-title">{s.title}</span>
                    <span className="svc-plus">
                      <Plus />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`svc-${i}`}
                      className="svc-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="svc-panel-in">
                        <p>{s.text}</p>
                        <div className="chips">
                          {s.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServicesSection;
