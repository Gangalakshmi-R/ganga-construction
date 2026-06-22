import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Button,
} from "@mui/material";
import Reveal from "../../components/Reveal";
import { ArrowBackIosNew, ArrowForwardIos, Close } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { getAllProjects } from "../../api/projectApi";

const CARD_W = 480;
const GAP = 55;
const DEPTH = 260;
const INTERVAL = 4000;

function getSlotStyle(diff, n) {
  const signed = diff <= n / 2 ? diff : diff - n;
  const abs = Math.abs(signed);
  const sign = Math.sign(signed);

  if (abs === 0)
    return {
      tx: 0,
      tz: 0,
      ry: 0,
      scale: 1,
      opacity: 1,
      blur: 0,
      zIndex: 10,
      active: true,
    };

  if (abs === 1)
    return {
      tx: sign * (CARD_W * 0.62 + GAP),
      tz: -DEPTH * 0.5,
      ry: sign * -3,
      scale: 0.82,
      opacity: 0.65,
      blur: 1.5,
      zIndex: 5,
      active: false,
    };

  if (abs === 2)
    return {
      tx: sign * (CARD_W * 1.1 + GAP * 1.8),
      tz: -DEPTH * 1.2,
      ry: sign * -6,
      scale: 0.66,
      opacity: 0.28,
      blur: 2.5,
      zIndex: 2,
      active: false,
    };

  return {
    tx: sign * 9999,
    tz: 0,
    ry: 0,
    scale: 0.5,
    opacity: 0,
    blur: 0,
    zIndex: 0,
    active: false,
  };
}

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cur, setCur] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [lightboxProject, setLightboxProject] = useState(null);

  const autoRef = useRef(null);
  const touchRef = useRef(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await getAllProjects();
      setProjects(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const goTo = (idx) => {
    if (animating || !projects.length) return;
    const n = projects.length;
    setAnimating(true);
    setCur(((idx % n) + n) % n);
    setTimeout(() => setAnimating(false), 700);
  };

  const startAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCur((c) => (c + 1) % projects.length);
    }, INTERVAL);
  };

  useEffect(() => {
    if (!projects.length) return;
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [projects.length]);

  const handleNav = (dir) => {
    goTo(cur + dir);
    startAuto();
  };

  const handleCardClick = (i, active) => {
    if (active) {
      setLightboxProject(projects[i]);
    } else {
      goTo(i);
      startAuto();
    }
  };

  const n = projects.length;

  return (
    <Box
      id="projects"
      data-aos="fade-up"
      sx={{
        position: "relative",
        py: 10,
        overflow: "hidden",
        backgroundColor: "#0f4f48",
        backgroundImage: `
          radial-gradient(circle at top right, rgba(45,212,191,0.14), transparent 22%),
          radial-gradient(circle at bottom left, rgba(20,184,166,0.12), transparent 26%),
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "auto, auto, 42px 42px, 42px 42px",
        backgroundPosition: "center, center, center center, center center",
      }}
    >
      {/* AMBIENT GLOW */}
      <Box
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(150px)",
          top: "-180px",
          right: "-180px",
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* HEADING */}
        <Reveal delay={0.1}>
          <Stack
            spacing={1}
            mb={6}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#5eead4",
                letterSpacing: "2px",
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "2.1rem" }, // Increased font size here
                textTransform: "uppercase",
              }}
            >
              Our projects
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.8rem" }, // Decreased font size here
                fontWeight: 800,
                color: "#ffffff",
                maxWidth: "650px",
                lineHeight: 1.3,
              }}
            >
              Our Completed Construction Projects
            </Typography>
          </Stack>
        </Reveal>

        {/* STAGE WRAPPER */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1450px",
            margin: "0 auto",
          }}
        >
          {/* LEFT ARROW */}
          <IconButton
            onClick={() => handleNav(-1)}
            sx={{
              position: "absolute",
              left: { xs: "10px", md: "40px" },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 50,
              width: "60px",
              height: "60px",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              display: { xs: "none", sm: "flex" },
              "&:hover": {
                background: "rgba(255,255,255,0.15)",
                transform: "translateY(-50%) scale(1.05)",
              },
            }}
          >
            <ArrowBackIosNew />
          </IconButton>

          {/* 3D STAGE */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "420px", md: "520px" },
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: "1200px",
              overflow: "hidden",
              py: "50px",
            }}
            onTouchStart={(e) => {
              touchRef.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touchRef.current;
              if (Math.abs(dx) > 40) handleNav(dx < 0 ? 1 : -1);
            }}
          >
            {loading && (
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  textAlign: "center",
                  position: "absolute",
                }}
              >
                Loading Projects...
              </Typography>
            )}

            {!loading && projects.length === 0 && (
              <Typography
                sx={{
                  color: "white",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  textAlign: "center",
                  position: "absolute",
                }}
              >
                No Projects Available
              </Typography>
            )}

            {!loading &&
              projects.map((project, i) => {
                const diff = ((i - cur + n) % n);
                const { tx, tz, ry, scale, opacity, blur, zIndex, active } =
                  getSlotStyle(diff, n);

                return (
                  <Box
                    key={project.id}
                    onClick={() => handleCardClick(i, active)}
                    sx={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: { xs: "85vw", md: `${CARD_W}px` },
                      maxWidth: `${CARD_W}px`,
                      height: { xs: "380px", md: "460px" },
                      borderRadius: "24px",
                      overflow: "hidden",
                      cursor: "pointer",
                      transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                      opacity,
                      filter: blur > 0 ? `blur(${blur}px)` : "none",
                      zIndex,
                      transition: "all 0.75s cubic-bezier(0.22,1,0.36,1)",
                      willChange: "transform, opacity, filter",
                      boxShadow: active
                        ? "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(45,212,191,0.15)"
                        : "0 15px 35px rgba(0,0,0,0.3)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(120deg,rgba(255,255,255,0.1),transparent 30%,transparent 70%,rgba(255,255,255,0.05))",
                        zIndex: 3,
                        opacity: active ? 1 : 0.2,
                        pointerEvents: "none",
                        transition: "opacity 0.5s",
                      },
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      component="img"
                      src={project.thumbnailUrl}
                      alt={project.projectName}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 1.5s cubic-bezier(0.22,1,0.36,1)",
                        "&:hover": {
                          transform: active ? "scale(1.05)" : "scale(1)",
                        },
                      }}
                    />

                    {/* OVERLAY */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.4) 50%, transparent 100%)",
                      }}
                    />

                    {/* CONTENT */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        p: 4,
                        zIndex: 5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#5eead4",
                          fontWeight: 700,
                          letterSpacing: "1px",
                          mb: 1,
                          fontSize: "0.85rem",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.category}
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: active ? "1.8rem" : "1.4rem",
                          transition: "font-size 0.6s cubic-bezier(0.22,1,0.36,1)",
                          mb: 1,
                          lineHeight: 1.2,
                        }}
                      >
                        {project.projectName}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "0.95rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        📍 {project.location}
                      </Typography>

                      {/* PROJECT FACTS */}
                      {(project.areaSqft || project.status) && (
                        <Stack
                          direction="row"
                          spacing={1.5}
                          flexWrap="wrap"
                          sx={{ mt: 2 }}
                        >
                          {project.areaSqft && (
                            <Box
                              sx={{
                                px: 1.5,
                                py: 0.5,
                                borderRadius: "8px",
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(5px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }}
                            >
                              <Typography sx={{ color: "white", fontSize: "0.8rem", fontWeight: 600 }}>
                                {project.areaSqft} Sq.Ft
                              </Typography>
                            </Box>
                          )}
                          {project.status && (
                            <Box
                              sx={{
                                px: 1.5,
                                py: 0.5,
                                borderRadius: "8px",
                                background: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(5px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }}
                            >
                              <Typography
                                sx={{
                                  color: "white",
                                  fontSize: "0.8rem",
                                  fontWeight: 600,
                                }}
                              >
                                {project.status}
                                {project.completionDate &&
                                  ` • ${new Date(project.completionDate).getFullYear()}`}
                              </Typography>
                            </Box>
                          )}
                        </Stack>
                      )}
                    </Box>
                  </Box>
                );
              })}
          </Box>

          {/* RIGHT ARROW */}
          <IconButton
            onClick={() => handleNav(1)}
            sx={{
              position: "absolute",
              right: { xs: "10px", md: "40px" },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 50,
              width: "60px",
              height: "60px",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              display: { xs: "none", sm: "flex" },
              "&:hover": {
                background: "rgba(255,255,255,0.15)",
                transform: "translateY(-50%) scale(1.05)",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

          {/* CENTER DOT INDICATORS */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              position: "absolute",
              bottom: "-30px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
            }}
          >
            {projects.map((_, i) => (
              <Box
                key={i}
                onClick={() => goTo(i)}
                sx={{
                  width: i === cur ? "32px" : "12px",
                  height: "12px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  background: i === cur ? "#5eead4" : "rgba(255,255,255,0.2)",
                  transition: "all 0.4s ease",
                  "&:hover": { background: "#5eead4" },
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Centered text and CTA container layout */}
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 3, fontSize: "1.1rem" }}>
            Planning your dream home or commercial project?
          </Typography>
          <Button
            href="#contact"
            variant="contained"
            sx={{
              borderRadius: "8px",
              px: 5,
              py: 1.8,
              fontSize: "1rem",
              fontWeight: 700,
              background: "#14b8a6",
              boxShadow: "0 10px 30px rgba(20,184,166,0.3)",
              textTransform: "none",
              mx: "auto",
              "&:hover": { background: "#0d9488", transform: "translateY(-2px)" },
              transition: "all 0.2s ease",
            }}
          >
            Get Free Consultation
          </Button>
        </Box>
      </Container>

      {/* LIGHTBOX */}
      <Modal
        open={Boolean(lightboxProject)}
        onClose={() => setLightboxProject(null)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: { background: "rgba(2,6,23,0.95)", backdropFilter: "blur(10px)" },
          },
        }}
      >
        <Fade in={Boolean(lightboxProject)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
              p: { xs: 2, md: 6 },
            }}
          >
            <IconButton
              onClick={() => setLightboxProject(null)}
              sx={{
                position: "absolute",
                top: "30px",
                right: "30px",
                color: "white",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                zIndex: 100,
                "&:hover": { background: "rgba(255,255,255,0.2)", transform: "scale(1.1)" },
              }}
            >
              <Close sx={{ fontSize: "2rem" }} />
            </IconButton>

            {lightboxProject && (
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxHeight: "85vh",
                  maxWidth: "1200px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                }}
              >
                <Box
                  component="img"
                  src={lightboxProject.thumbnailUrl}
                  alt={lightboxProject.projectName}
                  sx={{
                    width: "100%",
                    height: "100%",
                    maxHeight: "85vh",
                    objectFit: "contain",
                    background: "transparent",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                  }}
                >
                  <Typography variant="h4" sx={{ color: "white", fontWeight: 700, mb: 1 }}>
                    {lightboxProject.projectName}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#5eead4",
                      fontWeight: 500,
                      mb: 2,
                    }}
                  >
                    📍 {lightboxProject.location}
                    {" • "}
                    {lightboxProject.category}
                    {lightboxProject.completionDate &&
                      ` • Completed ${new Date(
                        lightboxProject.completionDate
                      ).getFullYear()}`}
                  </Typography>
                  {lightboxProject.description && (
                    <Typography sx={{ color: "rgba(255,255,255,0.8)", maxWidth: "800px" }}>
                      {lightboxProject.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default ProjectsSection;