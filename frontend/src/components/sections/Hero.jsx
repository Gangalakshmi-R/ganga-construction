import { useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SplitHeading } from "../Reveal";
import { ArrowUpRight, Phone } from "../Icons";
import { goTo } from "../../layouts/Navbar";

import archImage from "../../assets/about.png";
import houseImage from "../../assets/h1.png";

const EASE = [0.22, 1, 0.36, 1];

function Hero() {

  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const driftCard = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -70]);
  const driftBadge = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 50]);

  const [quick, setQuick] = useState({ buildingType: "RESIDENTIAL", areaSqft: "" });

  const submitQuick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("ganga:estimate", { detail: quick }));
    goTo("cost-estimation");
  };

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <SplitHeading
            as="h1"
            className="h1"
            text="From the first blueprint to the final landmark."
            immediate
            delay={0.15}
          />

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
          >
            We build homes, villas, commercial spaces and renovations across Tamil Nadu, with hands-on
            supervision from our Trichy head office.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
          >
            <button className="btn" onClick={() => goTo("projects")}>
              See our projects
              <span className="btn-dot">
                <ArrowUpRight />
              </span>
            </button>
            <a className="btn-ghost" href="tel:+919943042474">
              <Phone /> Call +91 99430 42474
            </a>
          </motion.div>

          <motion.form
            className="quick"
            onSubmit={submitQuick}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
            aria-label="Quick cost estimate"
          >
            <label>
              <span>I want to build</span>
              <select
                value={quick.buildingType}
                onChange={(e) => setQuick({ ...quick, buildingType: e.target.value })}
              >
                <option value="RESIDENTIAL">A home</option>
                <option value="COMMERCIAL">A commercial space</option>
              </select>
            </label>
            <label>
              <span>Built-up area (sq.ft)</span>
              <input
                type="number"
                min="100"
                inputMode="numeric"
                placeholder="e.g. 1500"
                value={quick.areaSqft}
                onChange={(e) => setQuick({ ...quick, areaSqft: e.target.value })}
              />
            </label>
            <button className="btn" type="submit">
              Get estimate
              <span className="btn-dot">
                <ArrowUpRight />
              </span>
            </button>
          </motion.form>
        </div>

        <div className="hero-art">
          <motion.div
            className="arch-ring"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: EASE }}
            aria-hidden="true"
          />
          <motion.div
            className="arch"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
          >
            <motion.img
              src={archImage}
              alt="A modern two-storey house built by Ganga Construction, lit at dusk"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 1.4, ease: EASE }}
            />
          </motion.div>

          <motion.div
            className="hero-card"
            style={{ y: driftCard }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
          >
            <img src={houseImage} alt="Teal and white villa with a balcony and open porch" />
          </motion.div>

          <motion.div
            className="hero-badge"
            style={{ y: driftBadge }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
          >
            <b>35+</b>
            <span>
              years building
              <br />
              across Tamil Nadu
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
