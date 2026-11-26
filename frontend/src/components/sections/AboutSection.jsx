import CountUpModule from "react-countup";

// react-countup ships CommonJS; unwrap the default so Vite builds never get a module object.
const CountUp = CountUpModule.default ?? CountUpModule;
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal, SplitHeading } from "../Reveal";
import { Check, Clipboard, Engineer, Shield, Team, Blueprint } from "../Icons";

import engImage from "../../assets/eng.jpeg";

const TEAM = [
  { text: "Experienced site engineers", icon: Engineer },
  { text: "Project supervisors", icon: Team },
  { text: "Quality control specialists", icon: Shield },
  { text: "Planning and execution experts", icon: Clipboard },
];

function AboutSection() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: "-10% 0px" });

  return (
    <section id="about" className="sheet sheet-white">
      <div className="wrap about-grid">
        <Reveal kind="wipe">
          <div className="portrait">
            <img src={engImage} alt="Raja L., founder and managing director of Ganga Construction" />
            <div className="portrait-tag">
              <div>
                <b>Er. Raja.L DCE</b>
                <span>Founder and Managing Director</span>
              </div>
              <Blueprint />
            </div>
          </div>
        </Reveal>

        <div className="about-copy">
          <SplitHeading text="Hands-on supervision on every site." className="h2" />

          <Reveal delay={0.1}>
            <p>
              Based in our <strong>Trichy head office</strong>, Mr. Raja oversees residential,
              commercial, villa and renovation projects himself. His commitment to sound workmanship,
              durability and customer satisfaction has earned Ganga Construction trust across{" "}
              <strong>Tamil Nadu</strong>.
            </p>
          </Reveal>

          <div className="stats" ref={statsRef}>
            <div className="stat">
              <b>{inView ? <CountUp end={35} duration={2.2} suffix="+" /> : "0"}</b>
              <span>Years of experience</span>
            </div>
            <div className="stat">
              <b>{inView ? <CountUp end={100} duration={2.4} suffix="+" /> : "0"}</b>
              <span>Projects delivered</span>
            </div>
            <div className="stat">
              <b>TN</b>
              <span>Clients across Tamil Nadu</span>
            </div>
          </div>

          <ul className="team">
            {TEAM.map(({ text, icon: Icon }) => (
              <li key={text}>
                <Icon />
                {text}
              </li>
            ))}
          </ul>

          <div className="approved" aria-label="Credentials">
            <span>DCE and DTCP approved</span>
            <span>Quality construction</span>
            <span>On-time delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
