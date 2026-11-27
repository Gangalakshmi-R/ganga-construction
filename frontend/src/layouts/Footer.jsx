import { BrandMark } from "../components/Icons";
import { goTo } from "./Navbar";

const QUICK = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Reviews", "reviews"],
  ["Contact", "contact"],
];

const SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Architectural Planning",
  "Renovation & Remodeling",
  "Interior Design",
  "Structural Engineering",
];

function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-about">
            <div className="brand">
              <BrandMark />
              <span>
                Ganga Construction, Trichy
              </span>
            </div>
            <p>
              Durable, modern homes and buildings, planned carefully and built with hands-on
              supervision across Tamil Nadu.
            </p>
          </div>

          <div>
            <h3>Quick links</h3>
            <ul>
              {QUICK.map(([label, id]) => (
                <li key={id}>
                  <button onClick={() => goTo(id)}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="tel:+919943042474">+91 99430 42474</a>
              </li>
              <li>
                <a href="https://wa.me/919943042474" target="_blank" rel="noreferrer">
                  WhatsApp us
                </a>
              </li>
              <li>Trichy, Tamil Nadu</li>
              <li>
                <a href="https://www.google.com/maps?q=10.80752,78.65429" target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Ganga Construction. All rights reserved.</span>
          <span>Founded by Raja L.</span>
        </div>
      </div>
      <div className="foot-word" aria-hidden="true">
        Ganga Construction
      </div>
    </footer>
  );
}

export default Footer;
