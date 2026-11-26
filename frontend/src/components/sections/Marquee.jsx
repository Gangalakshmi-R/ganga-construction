import { Diamond } from "../Icons";

const ITEMS = [
  "Residential",
  "Commercial",
  "Villas",
  "Renovations",
  "DCE & DTCP approved",
  "On-time delivery",
  "Serving all of Tamil Nadu",
];

function Marquee() {
  const row = (
    <div className="marquee-item" aria-hidden="true">
      {ITEMS.map((t) => (
        <span key={t} style={{ display: "contents" }}>
          <span>{t}</span>
          <Diamond />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee" role="presentation">
      <span className="sr-only">{ITEMS.join(", ")}</span>
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}

export default Marquee;
