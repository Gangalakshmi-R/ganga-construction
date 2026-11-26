import { useEffect, useState } from "react";
import axios from "axios";
import CountUpModule from "react-countup";

// react-countup ships CommonJS; unwrap the default so Vite builds never get a module object.
const CountUp = CountUpModule.default ?? CountUpModule;
import { AnimatePresence, motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Reveal, SplitHeading } from "../Reveal";
import { ArrowUpRight, Check, Phone, WhatsApp } from "../Icons";

const PILLS = [
  "Free cost estimate",
  "No hidden charges",
  "Expert consultation",
  "Response within 24 hours",
];

const BUILDING_TYPES = [
  ["RESIDENTIAL", "Residential"],
  ["COMMERCIAL", "Commercial"],
];
const QUALITY = [
  ["STANDARD", "Standard"],
  ["PREMIUM", "Premium"],
  ["LUXURY", "Luxury"],
];

function Segmented({ name, label, options, value, onChange }) {
  return (
    <div className="field" role="radiogroup" aria-label={label}>
      <span className="label">{label}</span>
      <div className="seg">
        {options.map(([val, text]) => (
          <button
            key={val}
            type="button"
            role="radio"
            aria-checked={value === val}
            className={value === val ? "on" : ""}
            onClick={() => onChange({ target: { name, value: val } })}
          >
            {value === val && (
              <motion.i
                layoutId={`seg-${name}`}
                className="seg-bg"
                transition={{ type: "spring", stiffness: 450, damping: 36 }}
              />
            )}
            <span>{text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function CostEstimatorSection() {
  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    buildingType: "RESIDENTIAL",
    areaSqft: "",
    floors: 1,
    qualityType: "STANDARD",
  });
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [lastArea, setLastArea] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // The hero's quick-estimate bar pre-fills this form.
  useEffect(() => {
    const onPrefill = (e) => {
      const { buildingType, areaSqft } = e.detail || {};
      setFormData((f) => ({
        ...f,
        buildingType: buildingType || f.buildingType,
        areaSqft: areaSqft || f.areaSqft,
      }));
    };
    window.addEventListener("ganga:estimate", onPrefill);
    return () => window.removeEventListener("ganga:estimate", onPrefill);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const API = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${API}/api/cost-estimations`, formData);
      setLastArea(Number(formData.areaSqft) || 0);
      setEstimatedCost(response.data.estimatedCost);
    } catch (err) {
      console.error(err);
      setError("We could not calculate your estimate. Check your details and try again.");
      enqueueSnackbar("Estimate failed. Please try again.", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const rate = estimatedCost && lastArea ? Math.round(Number(estimatedCost) / lastArea) : null;

  return (
    <section id="cost-estimation" className="sheet sheet-mist">
      <div className="wrap est-grid">
        <div className="est-side">
          <SplitHeading text="Know your building cost before you start." className="h2" />
          <Reveal delay={0.1}>
            <p className="lead">
              Enter your plot details and get an approximate cost in seconds. A site visit confirms
              the final figure.
            </p>
          </Reveal>
          <ul className="pills">
            {PILLS.map((p) => (
              <li key={p}>
                <Check />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <Reveal kind="slide" x={30}>
          <div className="card">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-2">
                <div className="field">
                  <label htmlFor="ce-name">Full name</label>
                  <input id="ce-name" className="input" name="fullName" value={formData.fullName} onChange={handleChange} required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="ce-phone">Phone</label>
                  <input id="ce-phone" className="input" name="phone" type="tel" value={formData.phone} onChange={handleChange} required autoComplete="tel" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="ce-email">Email</label>
                <input id="ce-email" className="input" name="email" type="email" value={formData.email} onChange={handleChange} required autoComplete="email" />
              </div>

              <Segmented name="buildingType" label="Building type" options={BUILDING_TYPES} value={formData.buildingType} onChange={handleChange} />

              <div className="form-2">
                <div className="field">
                  <label htmlFor="ce-area">Built-up area (sq.ft)</label>
                  <input id="ce-area" className="input" name="areaSqft" type="number" min="100" inputMode="numeric" placeholder="e.g. 1500" value={formData.areaSqft} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="ce-floors">Floors</label>
                  <input id="ce-floors" className="input" name="floors" type="number" min="1" max="20" value={formData.floors} onChange={handleChange} required />
                </div>
              </div>

              <Segmented name="qualityType" label="Finish quality" options={QUALITY} value={formData.qualityType} onChange={handleChange} />

              {error && <p className="form-error" role="alert">{error}</p>}

              <div>
                <button className="btn" type="submit" disabled={loading}>
                  {loading ? "Calculating…" : "Calculate my estimate"}
                  <span className="btn-dot">
                    <ArrowUpRight />
                  </span>
                </button>
              </div>
            </form>

            <AnimatePresence>
              {estimatedCost && (
                <motion.div
                  className="result on-dark"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 28 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  aria-live="polite"
                >
                  <small>Your approximate cost</small>
                  <div className="amount">
                    <CountUp key={String(estimatedCost) + lastArea} end={Number(estimatedCost)} duration={1.8} formattingFn={(n) => "₹" + n.toLocaleString("en-IN")} />
                  </div>
                  {rate && <div className="rate">About ₹{rate.toLocaleString("en-IN")} per sq.ft</div>}
                  <small>
                    This is a guide. The final cost depends on your site, design and materials.
                  </small>
                  <div className="acts">
                    <a className="btn btn-light" href="tel:+919943042474">
                      Talk to us
                      <span className="btn-dot"><Phone /></span>
                    </a>
                    <a className="btn-ghost" href="https://wa.me/919943042474" target="_blank" rel="noreferrer">
                      <WhatsApp /> WhatsApp
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CostEstimatorSection;
