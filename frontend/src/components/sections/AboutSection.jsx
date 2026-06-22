import { useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Stack,
  Card,
  Divider,
} from "@mui/material";

// Icons for Team Metrics & Expertise
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import EscalatorWarningRoundedIcon from "@mui/icons-material/EscalatorWarningRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import engImage from "../../assets/eng.jpeg";

function AboutSection() {
  const containerRef = useRef(null);

  const teamSpecialties = [
    { text: "Experienced Site Engineers", icon: <EngineeringRoundedIcon sx={{ color: "#5eead4" }} /> },
    { text: "Project Supervisors", icon: <EscalatorWarningRoundedIcon sx={{ color: "#5eead4" }} /> },
    { text: "Quality Control Specialists", icon: <VerifiedUserRoundedIcon sx={{ color: "#5eead4" }} /> },
    { text: "Planning & Execution Experts", icon: <AssignmentTurnedInRoundedIcon sx={{ color: "#5eead4" }} /> },
  ];

  const credibilityHighlights = [
    "35+ Years Experience",
    "DCE & DHCP Approved",
    "Tamil Nadu Coverage",
    "Quality Construction",
    "On-Time Delivery"
  ];

  return (
    <Box
      id="about-us"
      ref={containerRef}
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 7,
        backgroundColor: "#0f4f48",
        backgroundImage: `
          radial-gradient(circle at center, rgba(45,212,191,0.08), transparent 45%),
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "auto, 42px 42px, 42px 42px",
        backgroundPosition: "center, center, center center",
      }}
    >
      {/* Subtle Glow Accent behind Cards */}
      <Box
        sx={{
          position: "absolute",
          width: "600px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(94,234,212,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          pointerEvents: "none",
          
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Heading Structure */}
        <Stack alignItems="center" spacing={1} sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            data-aos="fade-up"
            sx={{
              color: "#5eead4",
              fontWeight: 700,
              fontSize: { xs: "2.4rem", md: "2.4rem" },
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            About Us
          </Typography>
         
        </Stack>

        <Grid container spacing={5} alignItems="stretch">
          {/* PRIMARY CARD: FOUNDER & MANAGING DIRECTOR PROFILE */}
          <Grid item xs={12} md={6} data-aos="fade-right" data-aos-delay="100">
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                p: "1.0px",
                background: "linear-gradient(135deg, rgba(94,234,212,0.4), rgba(255,255,255,0.05) 40%, rgba(20,184,166,0.25))",
                boxShadow: "0 24px 50px rgba(0,0,0,0.3)",
                transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.6s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
                  borderColor: "rgba(94,234,212,0.5)",
                },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderRadius: "22.5px",
                  background: "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(15,79,72,0.65))",
                  backdropFilter: "blur(20px) saturate(140%)",
                  WebkitBackdropFilter: "blur(20px) saturate(140%)",
                  p: { xs: 3, sm: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  {/* Scaled Down Executive Image Frame */}
                  <Grid item xs={12} sm={3.5} sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "2px solid rgba(94,234,212,0.4)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                        background: "rgba(15,79,72,0.9)",
                      }}
                    >
                      <Box
                        component="img"
                        src={engImage}
                        alt="Mr. Raja L. - Founder"
                        sx={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          objectFit: "cover",
                          transition: "transform 0.8s ease",
                          "&:hover": { transform: "scale(1.08)" },
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Founder Profile Core Metadata */}
                  <Grid item xs={12} sm={8.5} sx={{ textAlign: { xs: "center", sm: "left" } }}>
                    <Typography
                      sx={{
                        color: "#5eead4",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        mb: 0.5,
                      }}
                    >
                      Founder & Managing Director
                    </Typography>

                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "2rem",
                        fontWeight: 800,
                        letterSpacing: "-0.5px",
                      }}
                    >
                      Raja L.
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        mt: 1,
                      }}
                    >
                      DCE & DHCP Approved Professional
                    </Typography>

                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mt: 2, justifyContent: { xs: "center", sm: "flex-start" } }}
                    >
                      <ArchitectureRoundedIcon sx={{ color: "#5eead4", fontSize: "1.2rem" }} />
                      <Typography sx={{ color: "white", fontSize: "0.95rem", fontWeight: 700 }}>
                        35+ Years of Construction Excellence
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mt: 2, justifyContent: { xs: "center", sm: "flex-start" } }}
                    >
                      <ArchitectureRoundedIcon sx={{ color: "#5eead4", fontSize: "1.2rem" }} />
                      <Typography sx={{ color: "white", fontSize: "0.95rem", fontWeight: 700 }}>
                        Serving Clients Across Tamil Nadu
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mt: 2, justifyContent: { xs: "center", sm: "flex-start" } }}
                    >
                      <ArchitectureRoundedIcon sx={{ color: "#5eead4", fontSize: "1.2rem" }} />
                      <Typography sx={{ color: "white", fontSize: "0.95rem", fontWeight: 700 }}>
                        100+ Projects Delivered
                      </Typography>
                    </Stack>

                    <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />
                    <Typography sx={{ color: "#161b1a", fontSize: "1rem", fontWeight: 700 }}>
                      Residential • Commercial • Villas • Renovations
                    </Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.78)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  Based in our <strong>Trichy Head Office</strong>, Mr. Raja provides hands-on supervision for residential, commercial, villa, and renovation projects. With a steadfast commitment to quality workmanship, durability, and customer satisfaction, he has successfully delivered trusted construction solutions across <strong>Tamil Nadu</strong>.
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* SECONDARY CARD: PRODUCTION & SITE ENGINEERING COMPOSITION */}
          <Grid item xs={12} md={6} data-aos="fade-left" data-aos-delay="200">
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                p: "1.5px",
                background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03) 50%, rgba(94,234,212,0.15))",
                boxShadow: "0 24px 50px rgba(0,0,0,0.3)",
                transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.6s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
                  borderColor: "rgba(94,234,212,0.4)",
                },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  borderRadius: "22.5px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(15,79,72,0.45))",
                  backdropFilter: "blur(20px) saturate(140%)",
                  WebkitBackdropFilter: "blur(20px) saturate(140%)",
                  p: { xs: 3, sm: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#5eead4",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      mb: 0.5,
                    }}
                  >
                    Professional Execution
                  </Typography>

                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      fontWeight: 800,
                      letterSpacing: "-0.5px",
                      mb: 2,
                    }}
                  >
                    Dedicated Project Team
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    Every project is executed with careful planning, strict quality checks, and professional supervision to ensure timely and reliable delivery. We prioritize transparent pricing and total customer satisfaction.
                  </Typography>
                </Box>

                {/* Specialties Dynamic Checklist Layout */}
                <Grid container spacing={6}>
                  {teamSpecialties.map((spec, idx) => (
                    <Grid item xs={11} sm={5} key={idx}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                          p: 2,
                          borderRadius: "14px",
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          transition: "all 0.4s ease",
                          "&:hover": {
                            background: "rgba(94,234,212,0.06)",
                            borderColor: "rgba(94,234,212,0.25)",
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            p: 1,
                            borderRadius: "10px",
                            background: "rgba(15,79,72,0.8)",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          }}
                        >
                          {spec.icon}
                        </Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                          }}
                        >
                          {spec.text}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* CREDIBILITY STRIP */}
        <Box
          data-aos="fade-up"
          data-aos-delay="300"
          sx={{
            mt: 5,
            borderRadius: "16px",
            p: { xs: 3, md: 2.5 },
            background: "linear-gradient(90deg, rgba(20,184,166,0.05), rgba(255,255,255,0.03), rgba(20,184,166,0.05))",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(94,234,212,0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)"
          }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            sx={{ gap: { xs: 4.5, md: 10 } }}
          >
            {credibilityHighlights.map((text, idx) => (
              <Stack direction="row"
                alignItems="center"
                spacing={3}
                key={idx}>
                <CheckCircleOutlineRoundedIcon
                  sx={{
                    color: "#5eead4",
                    fontSize: "1.4rem"
                  }} />
                <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.5px" }}>
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutSection;