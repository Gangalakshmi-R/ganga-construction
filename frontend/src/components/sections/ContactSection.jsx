import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Reveal, SplitHeading } from "../Reveal";
import { ArrowUpRight, Phone, Pin, WhatsApp } from "../Icons";

const EMPTY = { name: "", email: "", phone: "", place: "", landDetails: "" };

function ContactSection() {
  const [formData, setFormData] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const isFormValid = Object.values(formData).every((v) => v.trim());

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, formData);
      enqueueSnackbar("Enquiry sent. We will get back to you soon.", { variant: "success" });
      setFormData(EMPTY);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Could not send your enquiry. Please try again or call us.", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="sheet sheet-deep on-dark" style={{ paddingBottom: "calc(clamp(5.5rem, 10vw, 9rem) + 44px)" }}>
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <SplitHeading text="Tell us what you plan to build." className="h2" />
          <Reveal delay={0.1}>
            <p className="lead">
              Share your location and requirements. We will call you back to discuss your plot, plan
              and budget.
            </p>
          </Reveal>

          <ul className="contact-list">
            {[
              {
                href: "tel:+919943042474",
                icon: <Phone />,
                title: "+91 99430 42474",
                sub: "Call us directly",
              },
              {
                href: "https://wa.me/919943042474",
                icon: <WhatsApp />,
                title: "Message on WhatsApp",
                sub: "Quick replies on chat",
                ext: true,
              },
              {
                href: "https://www.google.com/maps?q=10.80752,78.65429",
                icon: <Pin />,
                title: "Trichy, Tamil Nadu",
                sub: "Open our head office in Google Maps",
                ext: true,
              },
            ].map((c, i) => (
              <Reveal as="li" key={c.title} kind="slide" x={-24} delay={0.1 + i * 0.1}>
                <a href={c.href} {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}>
                  <span className="ico">{c.icon}</span>
                  <span>
                    <b>{c.title}</b>
                    <span>{c.sub}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal kind="slide" x={30}>
          <div className="card">
            <h3>Request a call back</h3>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-2">
                <div className="field">
                  <label htmlFor="c-name">Full name</label>
                  <input id="c-name" className="input" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="c-phone">Phone</label>
                  <input id="c-phone" className="input" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
                </div>
              </div>
              <div className="form-2">
                <div className="field">
                  <label htmlFor="c-email">Email</label>
                  <input id="c-email" className="input" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                </div>
                <div className="field">
                  <label htmlFor="c-place">Project location</label>
                  <input id="c-place" className="input" name="place" value={formData.place} onChange={handleChange} required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-req">Project requirements</label>
                <textarea id="c-req" className="input" name="landDetails" placeholder="Plot size, type of building, budget, timeline…" value={formData.landDetails} onChange={handleChange} required />
              </div>
              <div>
                <button className="btn" type="submit" disabled={!isFormValid || loading}>
                  {loading ? "Sending…" : "Send enquiry"}
                  <span className="btn-dot">
                    <ArrowUpRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
