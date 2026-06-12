import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";

import Reveal from "../../components/Reveal";

import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Close,
} from "@mui/icons-material";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { getAllProjects } from "../../api/projectApi";

function ProjectsSection() {

  const [projects, setProjects] =
    useState([]);

  const [lightboxProject,
    setLightboxProject] =
      useState(null);

  const swiperRef =
    useRef(null);

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects =
    async () => {

      try {

        const response =
          await getAllProjects();

        setProjects(response);

      } catch (error) {

        console.error(error);
      }
    };

  const handleCardClick =
    (project, isActive) => {

      if (isActive) {

        setLightboxProject(project);

      } else {

        const targetIndex =
          projects.findIndex(
            (p) =>
              p.id === project.id
          );

        swiperRef.current?.slideToLoop(
          targetIndex
        );
      }
    };

  return (

    <Box
      id="projects"

      data-aos="fade-up"

      sx={{
        position:
          "relative",

        py: 8,

        overflow:
          "hidden",

        backgroundColor:
          "#0f4f48",

        backgroundImage: `

radial-gradient(
circle at top right,
rgba(45,212,191,0.14),
transparent 22%
),

radial-gradient(
circle at bottom left,
rgba(20,184,166,0.12),
transparent 26%
),

linear-gradient(
rgba(255,255,255,0.035) 1px,
transparent 1px
),

linear-gradient(
90deg,
rgba(255,255,255,0.035) 1px,
transparent 1px
)

`,

        backgroundSize:
          "auto, auto, 42px 42px, 42px 42px",

        backgroundPosition:
          "center, center, center center, center center",
      }}
    >

      {/* AMBIENT GLOW */}

      <Box
        sx={{
          position:
            "absolute",

          width:
            "600px",

          height:
            "600px",

          borderRadius:
            "50%",

          background:
            "rgba(255,255,255,0.08)",

          filter:
            "blur(150px)",

          top:
            "-180px",

          right:
            "-180px",

          zIndex: 1,
        }}
      />

      <Container
        maxWidth="xl"

        sx={{
          position:
            "relative",

          zIndex: 2,
        }}
      >

        {/* HEADING */}

        <Reveal delay={0.1}>

          <Stack
            spacing={1}

            mb={7}

            sx={{
              width: "100%",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              textAlign:
                "center",
            }}
          >

            <Typography
              sx={{
                color:
                  "#ffffff",

                letterSpacing:
                  "4px",

                fontWeight:
                  700,

                fontSize: {
                  xs: "1.5rem",
                  md: "2rem",
                },

                textTransform:
                  "uppercase",
              }}
            >
              Our Projects
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  md: "2rem",
                },

                fontWeight:
                  700,

                color:
                  "#000000",
              }}
            >
              Crafted Spaces Built With Precision
            </Typography>

          </Stack>

        </Reveal>

        {/* MAIN SWIPER */}

        <Box
          sx={{
            position:
              "relative",

            width: "100%",

            maxWidth:
              "1450px",

            margin:
              "0 auto",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",
          }}
        >

          {/* LEFT BUTTON */}

          <IconButton
            onClick={() =>
              swiperRef.current?.slidePrev()
            }

            sx={{
              position:
                "absolute",

              left: {
                xs: "10px",
                md: "40px",
              },

              zIndex: 50,

              width: "60px",

              height: "60px",

              background:
                "rgba(255,255,255,0.12)",

              color:
                "white",

              backdropFilter:
                "blur(12px)",

              border:
                "1px solid rgba(255,255,255,0.12)",

              transition:
                "0.45s cubic-bezier(0.22,1,0.36,1)",

              display: {
                xs: "none",
                sm: "flex",
              },

              "&:hover": {

                background:
                  "rgba(255,255,255,0.22)",

                transform:
                  "scale(1.08)",
              },
            }}
          >
            <ArrowBackIosNew />
          </IconButton>

          {/* SWIPER */}

          <Swiper
            modules={[
              Autoplay,
              EffectCoverflow,
              Pagination,
            ]}

            effect="coverflow"

            onSwiper={(swiper) => {

              swiperRef.current =
                swiper;
            }}

            centeredSlides={true}

            slidesPerView="auto"

            loop={true}

            slideToClickedSlide={false}

            grabCursor={true}

            allowTouchMove={true}

            speed={1800}

            watchSlidesProgress={true}

            coverflowEffect={{

              rotate: 0,

              stretch: -70,

              depth: 220,

              modifier: 1,

              scale: 0.82,

              slideShadows: false,
            }}

            autoplay={{
              delay: 4000,

              disableOnInteraction:
                false,
            }}

            pagination={{
              clickable: true,

              dynamicBullets: true,
            }}

            style={{
              width: "100%",

              overflow: "visible",

              paddingTop: "50px",

              paddingBottom: "90px",
            }}
          >

            {projects.map(
              (project) => (

                <SwiperSlide
                  key={project.id}

                  style={{
                    display: "flex",

                    justifyContent:
                      "center",

                    alignItems:
                      "center",

                    width: "480px",

                    maxWidth:
                      "85vw",
                  }}
                >

                  {({ isActive }) => (

                    <Box
                      onClick={() =>
                        handleCardClick(
                          project,
                          isActive
                        )
                      }

                      sx={{

                        position:
                          "relative",

                        overflow:
                          "hidden",

                        width: "100%",

                        height: {
                          xs: "380px",
                          md: "460px",
                        },

                        borderRadius:
                          "32px",

                        background:
                          "#ffffff",

                        transition:
                          "all 1s cubic-bezier(0.22,1,0.36,1)",

                        transform:
                          isActive
                            ? "translateY(-22px) scale(1.02)"
                            : "translateY(0px) scale(0.92)",

                        opacity:
                          isActive
                            ? 1
                            : 0.65,

                        filter:
                          isActive
                            ? "blur(0px)"
                            : "blur(1.5px)",

                        zIndex:
                          isActive
                            ? 10
                            : 1,

                        animation:
                          isActive
                            ? "floatCard 5s ease-in-out infinite"
                            : "none",

                        "@keyframes floatCard": {

                          "0%": {

                            transform:
                              "translateY(-22px) scale(1.02)",
                          },

                          "50%": {

                            transform:
                              "translateY(-30px) scale(1.025)",
                          },

                          "100%": {

                            transform:
                              "translateY(-22px) scale(1.02)",
                          },
                        },

                        boxShadow:
                          isActive
                            ? `
0 40px 90px rgba(0,0,0,0.45),
0 0 50px rgba(45,212,191,0.10)
`
                            : "0 15px 40px rgba(2,6,23,0.12)",

                        cursor:
                          "pointer",

                        "&:hover img": {

                          transform:
                            isActive
                              ? "scale(1.08) translateY(-6px)"
                              : "scale(1.03)",
                        },

                        "&::before": {

                          content:
                            '""',

                          position:
                            "absolute",

                          inset: 0,

                          background:
                            "linear-gradient(120deg,rgba(255,255,255,0.12),transparent 28%,transparent 72%,rgba(255,255,255,0.08))",

                          zIndex: 3,

                          opacity:
                            isActive
                              ? 1
                              : 0.4,

                          pointerEvents:
                            "none",
                        },
                      }}
                    >

                      {/* IMAGE */}

                      <Box
                        component="img"

                        src={
                          project.thumbnailUrl
                        }

                        alt={
                          project.projectName
                        }

                        sx={{
                          width: "100%",

                          height: "100%",

                          objectFit:
                            "cover",

                          transition:
                            "transform 1.5s cubic-bezier(0.22,1,0.36,1)",
                        }}
                      />

                      {/* OVERLAY */}

                      <Box
                        sx={{
                          position:
                            "absolute",

                          inset: 0,

                          background:
                            `
linear-gradient(
to top,
rgba(2,6,23,0.92),
rgba(2,6,23,0.18) 55%,
transparent
)
`,
                        }}
                      />

                      {/* CONTENT */}

                      <Box
                        sx={{
                          position:
                            "absolute",

                          bottom: 0,

                          left: 0,

                          width: "100%",

                          p: 4,

                          zIndex: 5,

                          background:
                            "linear-gradient(to top, rgba(2,6,23,0.45), rgba(2,6,23,0))",

                          backdropFilter:
                            "blur(4px)",
                        }}
                      >

                        <Typography
                          sx={{
                            color:
                              "#5eead4",

                            fontWeight:
                              700,

                            letterSpacing:
                              "2px",

                            mb: 0.5,

                            fontSize:
                              "0.85rem",

                            textTransform:
                              "uppercase",
                          }}
                        >
                          {
                            project.category
                          }
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "white",

                            fontWeight:
                              700,

                            fontSize:
                              isActive
                                ? "1.8rem"
                                : "1.4rem",

                            transition:
                              "font-size 0.6s cubic-bezier(0.22,1,0.36,1)",

                            mb: 1,

                            lineHeight:
                              1.2,
                          }}
                        >
                          {
                            project.projectName
                          }
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "rgba(255,255,255,0.75)",

                            fontSize:
                              "0.9rem",

                            display:
                              "flex",

                            alignItems:
                              "center",

                            gap:
                              "4px",
                          }}
                        >
                          📍 {
                            project.location
                          }
                        </Typography>

                      </Box>

                    </Box>
                  )}

                </SwiperSlide>
              )
            )}

          </Swiper>

          {/* RIGHT BUTTON */}

          <IconButton
            onClick={() =>
              swiperRef.current?.slideNext()
            }

            sx={{
              position:
                "absolute",

              right: {
                xs: "10px",
                md: "40px",
              },

              zIndex: 50,

              width: "60px",

              height: "60px",

              background:
                "rgba(255,255,255,0.12)",

              color:
                "white",

              backdropFilter:
                "blur(12px)",

              border:
                "1px solid rgba(255,255,255,0.12)",

              transition:
                "0.45s cubic-bezier(0.22,1,0.36,1)",

              display: {
                xs: "none",
                sm: "flex",
              },

              "&:hover": {

                background:
                  "rgba(255,255,255,0.22)",

                transform:
                  "scale(1.08)",
              },
            }}
          >
            <ArrowForwardIos />
          </IconButton>

        </Box>

      </Container>

      {/* LIGHTBOX */}

      <Modal
        open={Boolean(
          lightboxProject
        )}

        onClose={() =>
          setLightboxProject(null)
        }

        closeAfterTransition

        slots={{
          backdrop:
            Backdrop,
        }}

        slotProps={{
          backdrop: {

            timeout: 500,

            sx: {

              background:
                "rgba(2,6,23,0.94)",

              backdropFilter:
                "blur(18px)",
            },
          },
        }}
      >

        <Fade
          in={Boolean(
            lightboxProject
          )}
        >

          <Box
            sx={{
              position:
                "absolute",

              top: "50%",

              left: "50%",

              transform:
                "translate(-50%, -50%)",

              width: "100vw",

              height: "100vh",

              display:
                "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              outline:
                "none",

              p: {
                xs: 2,
                md: 6,
              },
            }}
          >

            {/* CLOSE */}

            <IconButton
              onClick={() =>
                setLightboxProject(null)
              }

              sx={{
                position:
                  "absolute",

                top: "24px",

                right: "24px",

                color:
                  "white",

                background:
                  "rgba(255,255,255,0.08)",

                backdropFilter:
                  "blur(8px)",

                border:
                  "1px solid rgba(255,255,255,0.15)",

                zIndex: 100,

                "&:hover": {

                  background:
                    "rgba(255,255,255,0.2)",

                  transform:
                    "scale(1.05)",
                },
              }}
            >
              <Close
                sx={{
                  fontSize:
                    "1.8rem",
                }}
              />
            </IconButton>

            {/* IMAGE */}

            {lightboxProject && (

              <Box
                sx={{
                  position:
                    "relative",

                  width: "100%",

                  maxHeight:
                    "85vh",

                  maxWidth:
                    "1200px",

                  borderRadius:
                    "24px",

                  overflow:
                    "hidden",

                  boxShadow:
                    "0 25px 60px rgba(0,0,0,0.6)",
                }}
              >

                <Box
                  component="img"

                  src={
                    lightboxProject.thumbnailUrl
                  }

                  alt={
                    lightboxProject.projectName
                  }

                  sx={{
                    width:
                      "100%",

                    height:
                      "100%",

                    maxHeight:
                      "85vh",

                    objectFit:
                      "contain",

                    background:
                      "transparent",
                  }}
                />

                {/* BOTTOM INFO */}

                <Box
                  sx={{
                    position:
                      "absolute",

                    bottom: 0,

                    left: 0,

                    right: 0,

                    p: 3,

                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0))",
                  }}
                >

                  <Typography
                    variant="h5"

                    sx={{
                      color:
                        "white",

                      fontWeight:
                        700,
                    }}
                  >
                    {
                      lightboxProject.projectName
                    }
                  </Typography>

                  <Typography
                    variant="body2"

                    sx={{
                      color:
                        "#5eead4",

                      fontWeight:
                        500,

                      mt: 0.5,
                    }}
                  >
                    📍 {
                      lightboxProject.location
                    } • {
                      lightboxProject.category
                    }
                  </Typography>

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