import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

import Reveal from "../../components/Reveal";
import CountUp from "react-countup";
import { Link } from "react-scroll";

import houseImage from "../../assets/h1.png";

function Hero() {
  return (
    <Box 
      id="home"
      data-aos="fade-up"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "92vh" },
        paddingTop: { xs: "120px", md: "140px" },
        paddingBottom: { xs: "80px", md: "100px" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        // Responsive background linear gradient for extreme clarity on mobile screens
        backgroundImage: {
          xs: `linear-gradient(
            to bottom,
            rgba(2,6,23,0.96) 0%,
            rgba(2,6,23,0.85) 60%,
            rgba(2,6,23,0.50) 100%
          ), url(${houseImage})`,
          md: `linear-gradient(
            to right,
            rgba(2,6,23,0.92) 15%,
            rgba(2,6,23,0.72) 50%,
            rgba(2,6,23,0.30) 82%,
            rgba(2,6,23,0.08) 100%
          ), url(${houseImage})`
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: { xs: "scroll", md: "fixed" }, // Fixed attachments cause lag and layout bugs on mobile devices
        isolation: "isolate",
        "@keyframes floatGlow": {
          "0%": {
            transform: "translate3d(0px, 0px, 0px) scale(1)",
            opacity: 0.7,
          },
          "50%": {
            transform: "translate3d(-20px, 30px, 0px) scale(1.08)",
            opacity: 1,
          },
          "100%": {
            transform: "translate3d(15px, -15px, 0px) scale(0.96)",
            opacity: 0.75,
          },
        },
      }}
    >
      {/* GRADIENT LIGHT */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "320px", md: "650px" },
          height: { xs: "320px", md: "650px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.25) 0%, rgba(20,184,166,0.08) 45%, transparent 75%)",
          filter: "blur(50px)",
          top: "-40px",
          right: { xs: "-50px", md: "180px" },
          zIndex: 1,
          animation: "floatGlow 7s ease-in-out infinite alternate",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: "820px",
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" }
          }}
        >
          {/* SMALL LABEL */}
          <Reveal delay={0.1}>
            <Typography
              sx={{
                color: "#2dd4bf",
                letterSpacing: { xs: "2px", md: "3px" },
                fontWeight: 700,
                fontSize: { xs: "0.8rem", md: "0.92rem" },
                textTransform: "uppercase",
                mb: { xs: 2, md: 3 },
                opacity: 0.92,
              }}
            >
              Crafting Elegance, Block by Block
            </Typography>
          </Reveal>

          {/* MAIN HEADING */}
          <Reveal delay={0.2}>
            <Typography
              sx={{
                color: "white",
                fontWeight: 800,
                lineHeight: { xs: 1.2, md: 1.1 },
                letterSpacing: "-0.5px",
                fontSize: { xs: "2.25rem", sm: "3rem", md: "4.2rem" },
                maxWidth: "940px",
                mb: { xs: 3, md: 5 },
                textShadow: "0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              From the First Blueprint to the Final Landmark
            </Typography>
          </Reveal>

          {/* DESCRIPTION */}
          <Reveal delay={0.3}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.76)",
                fontSize: { xs: "0.95rem", md: "1.08rem" },
                fontWeight: 400,
                lineHeight: { xs: 1.7, md: 1.95 },
                letterSpacing: "0.2px",
                maxWidth: "610px",
                mb: { xs: 4, md: 6 },
              }}
            >
              Building quality homes, villas, commercial spaces, and renovation projects across Tamil
              Nadu with expert craftsmanship, reliable execution, and lasting value.
            </Typography>
          </Reveal>

          {/* BUTTONS */}
          <Reveal delay={0.4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, md: 3 },
                width: { xs: "100%", sm: "auto" },
                justifyContent: "center",
                mt: 1,
              }}
            >
              {/* EXPLORE PROJECTS */}
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-90}
                style={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(135deg,#14b8a6,#0f766e)",
                    backdropFilter: "blur(10px)",
                    px: { xs: 3, md: 4.5 },
                    py: { xs: 1.6, md: 1.45 },
                    borderRadius: "16px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.3px",
                    boxShadow: "0 18px 40px rgba(20,184,166,0.30)",
                    transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                    "&:hover": {
                      transform: { md: "translateY(-4px)" },
                      boxShadow: "0 24px 55px rgba(20,184,166,0.42)",
                      background: "linear-gradient(135deg,#2dd4bf,#0f766e)",
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
                  }}
                >
                  View Completed Projects
                </Button>
              </Link>

              {/* COST ESTIMATION */}
              <Link
                to="cost-estimation"
                smooth={true}
                duration={500}
                offset={-90}
                style={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "white",
                    px: { xs: 3, md: 4.5 },
                    py: { xs: 1.6, md: 1.45 },
                    borderRadius: "16px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.3px",
                    transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                    "&:hover": {
                      transform: { md: "translateY(-4px)" },
                      background: "rgba(255,255,255,0.14)",
                      border: "1px solid rgba(255,255,255,0.24)",
                      boxShadow: "0 18px 45px rgba(255,255,255,0.08)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-120%",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(to right,transparent,rgba(255,255,255,0.18),transparent)",
                      transition: "0.8s",
                    },
                    "&:hover::before": {
                      left: "120%",
                    },
                  }}
                >
                  Get Free Cost Estimate
                </Button>
              </Link>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;