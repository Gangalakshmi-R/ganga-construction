import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import {
  useState,
} from "react";

import axios from "axios";

import {
  useSnackbar,
} from "notistack";

function ContactSection() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      place: "",
      landDetails: "",
    });

  const [loading, setLoading] =
    useState(false);

  const { enqueueSnackbar } = useSnackbar();

  // 1. Add form validation variable
  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.place.trim() &&
    formData.landDetails.trim();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        formData
      );

      enqueueSnackbar("Enquiry Sent Successfully", {
        variant: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        place: "",
        landDetails: "",
      });

    } catch (error) {
      console.error(error);
      enqueueSnackbar("Failed to send enquiry", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      data-aos="fade-up"
      sx={{
        py: 6,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#ffffff",
        backgroundImage: `
          linear-gradient(to right, rgba(20,184,166,0.08) 1.2px, transparent 1.2px),
          linear-gradient(to bottom, rgba(20,184,166,0.08) 1.2px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundPosition: "0 0",
      }}
    >

      {/* AMBIENT GLOW */}
      <Box
        sx={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(20,184,166,0.10)",
          filter: "blur(120px)",
          top: "-120px",
          right: "-100px",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 2 }}
      >

        {/* TOP */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "850px",
            mx: "auto",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              color: "#14b8a6",
              letterSpacing: "4px",
              fontWeight: 700,
              fontSize: { xs: "2.1rem", md: "2.1rem" },
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            Contact Us
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.1rem", md: "1.7rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "black",
              mb: 3,
            }}
          >
            Start Your Construction Journey Today
          </Typography>

          <Typography
            sx={{
              color: "rgba(0,0,0,0.72)",
              lineHeight: 1.9,
              fontSize: "1rem",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Contact Ganga Construction for premium residential,
            commercial, and modern construction solutions
            tailored to your vision.
          </Typography>
        </Box>

        {/* CONTACT INFO CARDS */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            mb: 3,
            width: "100%",
            maxWidth: "1050px",
            mx: "auto",
          }}
        >

          {/* PHONE */}
          <Box sx={infoCardStyles("4s")}>
            <Typography sx={cardLabelStyles}>Phone</Typography>
            <Typography sx={cardValueStyles}>
              +91 99430 42474
            </Typography>
          </Box>

          {/* EMAIL */}
          <Box sx={infoCardStyles("4.5s")}>
            <Typography sx={cardLabelStyles}>Email</Typography>
            <Typography sx={cardValueStyles}>
              tlr.engineer@gmail.com
            </Typography>
          </Box>

          {/* LOCATION */}
          <Box sx={infoCardStyles("5s")}>
            <Typography sx={cardLabelStyles}>Location</Typography>
            <Typography sx={cardValueStyles}>
              Trichy, Tamil Nadu
            </Typography>

            {/* VIEW ON GOOGLE MAPS BUTTON */}
            <Button
              href="https://www.google.com/maps/search/Trichy,+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              }
              sx={{
                mt: 1.5,
                color: "#14b8a6",
                border: "1px solid rgba(20,184,166,0.45)",
                borderRadius: "10px",
                px: 2,
                py: 0.6,
                fontSize: "0.78rem",
                fontWeight: 600,
                textTransform: "none",
                background: "rgba(20,184,166,0.06)",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                "&:hover": {
                  background: "rgba(20,184,166,0.14)",
                  border: "1px solid #14b8a6",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(20,184,166,0.18)",
                },
              }}
            >
              View Office Location
            </Button>
          </Box>

          {/* BUSINESS HOURS — NEW CARD */}
          <Box sx={infoCardStyles("5.5s")}>
            <Typography sx={cardLabelStyles}>Business Hours</Typography>
            <Typography sx={cardValueStyles}>
              Mon – Sat
            </Typography>
            <Typography
              sx={{
                color: "#0f172a",
                fontWeight: 500,
                fontSize: "0.92rem",
                mt: 0.3,
              }}
            >
              9:00 AM – 7:00 PM
            </Typography>
          </Box>

        </Stack>

        {/* RESPONSE PROMISE BADGES */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 5,
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          {[
            "Free Consultation",
            "Site Visit Available",
            "Response Within 24 Hours",
          ].map((badge, i) => (
            <Box
              key={badge}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,

                px: 2.5,
                py: 0.9,

                borderRadius: "50px",

                background: "rgba(212,226,233,0.65)",

                backdropFilter: "blur(12px)",

                border: "1px solid rgba(20,184,166,0.22)",

                boxShadow:
                  "0 6px 20px rgba(15,23,42,0.05)",

                animation: `floatBadge ${
                  3.5 + i * 0.5
                }s ease-in-out infinite`,

                "@keyframes floatBadge": {
                  "0%": {
                    transform: "translateY(0px)",
                  },

                  "50%": {
                    transform: "translateY(-5px)",
                  },

                  "100%": {
                    transform: "translateY(0px)",
                  },
                },

                transition:
                  "all 0.4s cubic-bezier(0.22,1,0.36,1)",

                "&:hover": {
                  transform:
                    "translateY(-6px) scale(1.04)",

                  boxShadow:
                    "0 14px 32px rgba(20,184,166,0.18)",

                  border:
                    "1px solid #14b8a6",

                  background:
                    "rgba(20,184,166,0.10)",
                },
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,

                  borderRadius: "50%",

                  background:
                    "linear-gradient(135deg,#14b8a6,#0f766e)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  ✓
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#0f172a",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  whiteSpace: "nowrap",
                }}
              >
                {badge}
              </Typography>
            </Box>
          ))}
        </Box>
        
        {/* CTA BUTTONS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            mb: 4,
            width: "100%",
            maxWidth: "380px",
            mx: "auto",
          }}
        >

          {/* CALL BUTTON */}
          <Button
            href="tel:+919943042474"
            sx={{
              background: "linear-gradient(135deg,#14b8a6,#0f766e)",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "14px",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 15px 35px rgba(20,184,166,0.18)",
              transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 22px 45px rgba(20,184,166,0.32)",
                background: "linear-gradient(135deg,#0fb8a6,#0e6560)",
              },
            }}
          >
            Call Now
          </Button>

          {/* WHATSAPP BUTTON — updated label */}
          <Button
            href="https://wa.me/919943042474"
            target="_blank"
            sx={{
              background: "#25D366",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: "14px",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 15px 35px rgba(37,211,102,0.18)",
              transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 22px 45px rgba(37,211,102,0.34)",
                background: "#1ebe5a",
              },
            }}
          >
            Chat on WhatsApp
          </Button>

        </Stack>

        {/* FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            maxWidth: "480px",
            mx: "auto",
            background: "linear-gradient(135deg,#129287,#0f766e)",
            border: "1px solid rgba(20,184,166,0.18)",
            backdropFilter: "blur(20px)",
            p: { xs: 2.5, md: 3 },
            borderRadius: "32px",
            boxShadow: "0 25px 60px rgba(15,23,42,0.12)",
            transition: "0.45s",
            animation: "fadeUp 1s ease",
            "@keyframes fadeUp": {
              from: { opacity: 0, transform: "translateY(40px)" },
              to: { opacity: 1, transform: "translateY(0px)" },
            },
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 35px 80px rgba(15,23,42,0.18)",
            },
          }}
        >

          {/* FORM HEADING */}
          <Box sx={{ mb: 3.5, textAlign: "center" }}>
            <Typography
              sx={{
                color: "#d1fae5",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Book Online Appointment
            </Typography>

            <Typography
              sx={{
                color: "white",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Schedule Consultation
            </Typography>
          </Box>

          {/* FORM FIELDS */}
          <Stack spacing={1.6}>

            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ffffff" } }}
              sx={fieldStyles}
            />

            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ffffff" } }}
              sx={fieldStyles}
            />

            {/* UPDATED LABEL: Place → Project Location */}
            <TextField
              fullWidth
              label="Project Location"
              name="place"
              value={formData.place}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ffffff" } }}
              sx={fieldStyles}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ffffff" } }}
              sx={fieldStyles}
            />

            {/* UPDATED LABEL: Land / Project Details → Project Requirements */}
            <TextField
              fullWidth
              label="Project Requirements"
              name="landDetails"
              multiline
              rows={2}
              value={formData.landDetails}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#ffffff" } }}
              sx={fieldStyles}
            />

            {/* CONSULTATION NOTE */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "0.82rem",
                textAlign: "center",
                lineHeight: 1.6,
                mt: 0.5,
                mb: -0.5,
                fontStyle: "italic",
              }}
            >
              Tell us about your project and our team will contact you shortly.
            </Typography>

            {/* 4. Add helpful message above button */}
            {!isFormValid && (
              <Typography
                sx={{
                  color: "#fde68a",
                  fontSize: "0.82rem",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                Please fill all fields to submit your enquiry.
              </Typography>
            )}

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              variant="contained"
              // 2. Update Submit Button disabled attribute
              disabled={loading || !isFormValid}
              fullWidth
              sx={{
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg,#14b8a6,#0f766e)",
                py: 2,
                borderRadius: "14px",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                mt: 1,
                transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                "&:hover": {
                  background: "linear-gradient(135deg,#0f766e,#115e59)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-120%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to right,transparent,rgba(255,255,255,0.22),transparent)",
                  transition: "0.8s",
                },
                "&:hover::before": {
                  left: "120%",
                },
                // 3. Add disabled styling
                "&.Mui-disabled": {
                  background: "rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.55)",
                  cursor: "not-allowed",
                },
              }}
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </Button>

            {/* PRIVACY ASSURANCE */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.58)",
                fontSize: "0.78rem",
                textAlign: "center",
                lineHeight: 1.6,
                mt: 0.5,
              }}
            >
              🔒 Your information is kept private and used only for project consultation.
            </Typography>

          </Stack>
        </Box>

      </Container>
    </Box>
  );
}

/* ─── Shared card styles ─── */
const infoCardStyles = (animDuration) => ({
  minWidth: "220px",
  height: "150px",

  textAlign: "center",

  p: 3,

  borderRadius: "24px",

  background: "rgba(212, 226, 233, 0.72)",

  backdropFilter: "blur(14px)",

  border: "1px solid rgba(20,184,166,0.18)",

  boxShadow: "0 12px 35px rgba(15,23,42,0.06)",

  display: "flex",

  flexDirection: "column",

  justifyContent: "center",

  alignItems: "center",

  transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",

  animation: `floatCard ${animDuration} ease-in-out infinite`,

  "@keyframes floatCard": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-8px)" },
    "100%": { transform: "translateY(0px)" },
  },

  "&:hover": {
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 25px 50px rgba(20,184,166,0.16)",
    border: "1px solid #14b8a6",
  },
});

const cardLabelStyles = {
  color: "#14b8a6",
  fontWeight: 700,
  mb: 1,
  letterSpacing: "1px",
};

const cardValueStyles = {
  color: "#0f172a",
  fontWeight: 500,

  textAlign: "center",

  width: "100%",

  display: "flex",

  justifyContent: "center",

  alignItems: "center",
};

/* ─── Form field styles ─── */
const fieldStyles = {
  input: { color: "white" },
  textarea: { color: "white" },
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    transition: "all 0.35s ease",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    "& fieldset": { borderColor: "rgba(255,255,255,0.55)" },
    "&:hover": { transform: "translateY(-2px)" },
    "&:hover fieldset": { borderColor: "#ffffff" },
    "&.Mui-focused fieldset": { borderColor: "#ffffff" },
  },
};

export default ContactSection;