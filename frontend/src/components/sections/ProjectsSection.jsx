import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getAllProjects } from "../../api/projectApi";
import { SplitHeading } from "../Reveal";
import { ArrowLeft, ArrowRight, ArrowUpRight, Close, Pin } from "../Icons";

const EASE = [0.22, 1, 0.36, 1];

function Lightbox({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const year = project.completionDate ? new Date(project.completionDate).getFullYear() : null;

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.projectName}
    >
      <button className="lb-close" onClick={onClose} aria-label="Close project">
        <Close />
      </button>
      <motion.div
        className="lb-card"
        initial={{ y: 60, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.thumbnailUrl} alt={project.projectName} />
        <div className="lb-body">
          <div className="lb-facts">
            {project.category && <span>{project.category}</span>}
            {project.status && <span>{project.status}</span>}
            {year && <span>{year}</span>}
            {project.areaSqft && <span>{project.areaSqft} sq.ft</span>}
          </div>
          <h3>{project.projectName}</h3>
          {project.location && (
            <p>
              <Pin style={{ width: 16, height: 16, verticalAlign: -3, marginRight: 6 }} />
              {project.location}
            </p>
          )}
          {project.description && <p>{project.description}</p>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [selected, setSelected] = useState(null);
  const track = useRef(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getAllProjects();
        if (alive) setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        if (alive) setFailed(true);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const scrollBy = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector(".proj-card");
    const step = (card ? card.getBoundingClientRect().width : 400) + 24;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="sheet sheet-night on-dark" style={{ paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
      <div className="wrap proj-head">
        <SplitHeading text="Homes and buildings we have delivered." className="h2" />
        {projects.length > 1 && (
          <div className="arrows">
            <button className="arrow" onClick={() => scrollBy(-1)} aria-label="Previous project">
              <ArrowLeft />
            </button>
            <button className="arrow" onClick={() => scrollBy(1)} aria-label="Next project">
              <ArrowRight />
            </button>
          </div>
        )}
      </div>

      {loading && (
        <div className="proj-track" aria-busy="true">
          {[0, 1, 2].map((i) => (
            <div key={i} className="proj-card skeleton" />
          ))}
        </div>
      )}

      {!loading && projects.length > 0 && (
        <motion.div
          className="proj-track"
          ref={track}
          tabIndex={0}
          aria-label="Project gallery, scroll sideways"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {projects.map((p, i) => (
            <button
              key={p.id ?? i}
              className="proj-card"
              onClick={() => setSelected(p)}
              aria-label={`Open ${p.projectName}`}
            >
              <img src={p.thumbnailUrl} alt={p.projectName} loading="lazy" />
              <span className="proj-open">
                <ArrowUpRight />
              </span>
              <span className="proj-meta">
                {p.category && <span className="proj-cat">{p.category}</span>}
                <h3>{p.projectName}</h3>
                <p>
                  {p.location && (
                    <span>
                      <Pin />
                      {p.location}
                    </span>
                  )}
                  {p.areaSqft && <span>{p.areaSqft} sq.ft</span>}
                  {p.status && <span>{p.status}</span>}
                </p>
              </span>
            </button>
          ))}
        </motion.div>
      )}

      {!loading && projects.length === 0 && (
        <div className="wrap">
          <div className="empty">
            {failed
              ? "We could not load our projects right now. Please refresh the page, or call us to see recent work."
              : "New projects are being added. Call us to see recent work in your area."}
          </div>
        </div>
      )}

      <AnimatePresence>{selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
