import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Stack,
} from "@mui/material";

import EngineeringRoundedIcon
from "@mui/icons-material/EngineeringRounded";

import VerifiedRoundedIcon
from "@mui/icons-material/VerifiedRounded";

import ApartmentRoundedIcon
from "@mui/icons-material/ApartmentRounded";

import AccessTimeFilledRoundedIcon
from "@mui/icons-material/AccessTimeFilledRounded";

import aboutImage
from "../../assets/about.png";

function AboutSection() {

  const stats = [

    {
      number: "120+",
      label: "Projects Completed",
    },

    {
      number: "10+",
      label: "Years Experience",
    },

    {
      number: "95%",
      label: "Client Satisfaction",
    },
  ];

  const features = [

    {
      icon:
        <EngineeringRoundedIcon />,

      title:
        "Modern Engineering",
    },

    {
      icon:
        <VerifiedRoundedIcon />,

      title:
        "Quality Assurance",
    },

    {
      icon:
        <ApartmentRoundedIcon />,

      title:
        "Premium Designs",
    },

    {
      icon:
        <AccessTimeFilledRoundedIcon />,

      title:
        "On-Time Delivery",
    },
  ];

  return (

    <Box
      id="about"

      data-aos="fade-up"

      sx={{
        position:
          "relative",

        overflow:
          "hidden",

        py: 9,

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
            "500px",

          height:
            "500px",

          borderRadius:
            "50%",

          background:
            "rgba(20,184,166,0.14)",

          filter:
            "blur(140px)",

          top:
            "-200px",

          right:
            "-120px",

          zIndex: 0,
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

        <Grid
          container

          spacing={8}

          alignItems="center"
        >


          {/* RIGHT CONTENT */}

          <Grid
            item

            xs={12}

            md={6}
          >

            <Typography
              sx={{
                color:
                  "#5eead4",

                fontWeight:
                  700,
                fontSize: {
                  xs: "2.1rem",
                  md: "2.1rem",
                },
                letterSpacing:
                  "4px",

                textTransform:
                  "uppercase",

                mb: 2,
              }}
            >
              About Us
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  md: "1.9rem",
                },

                fontWeight:
                  800,

                lineHeight:
                  1.1,

                color:
                  "white",

                mb: 3,
              }}
            >
              Building Spaces
              With Trust &
              Precision
            </Typography>

            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.72)",

                lineHeight:
                  2,

                fontSize:
                  "1rem",

                mb: 5,

                maxWidth:
                  "620px",
              }}
            >
              Ganga Construction
              delivers premium
              residential and
              commercial construction
              solutions with modern
              engineering, elegant
              architecture, and trusted
              craftsmanship. We focus
              on quality execution,
              transparent processes,
              and long-lasting spaces
              tailored for modern
              lifestyles and future
              growth.
            </Typography>

            {/* STATS */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}

              spacing={5}

              sx={{
                mb: 5,
              }}
            >

              {stats.map(
                (item) => (

                  <Box
                    key={
                      item.label
                    }

                    sx={{
                      flex: 1,

                      background:
                        "rgba(255,255,255,0.08)",

                      border:
                        "1px solid rgba(255,255,255,0.12)",

                      backdropFilter:
                        "blur(12px)",

                      borderRadius:
                        "22px",

                      p: 3,

                      transition:
                        "0.45s cubic-bezier(0.22,1,0.36,1)",

                      "&:hover": {

                        transform:
                          "translateY(-8px)",

                        background:
                          "rgba(255,255,255,0.12)",

                        boxShadow:
                          "0 20px 40px rgba(0,0,0,0.18)",
                      },
                    }}
                  >

                    <Typography
                      sx={{
                        color:
                          "#5eead4",

                        fontWeight:
                          800,

                        fontSize:
                          "2rem",

                        mb: 2,
                      }}
                    >
                      {
                        item.number
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.72)",

                        fontSize:
                          "0.95rem",
                      }}
                    >
                      {
                        item.label
                      }
                    </Typography>

                  </Box>
                )
              )}

            </Stack>

            {/* FEATURES */}

            <Grid
              container

              spacing={2.5}

              sx={{
                mb: 5,
              }}
            >

              {features.map(
                (item) => (

                  <Grid
                    item

                    xs={12}

                    sm={6}

                    key={
                      item.title
                    }
                  >

                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 2,

                        background:
                          "rgba(255,255,255,0.06)",

                        border:
                          "1px solid rgba(255,255,255,0.10)",

                        backdropFilter:
                          "blur(12px)",

                        borderRadius:
                          "20px",

                        p: 2.2,

                        transition:
                          "0.45s cubic-bezier(0.22,1,0.36,1)",

                        "&:hover": {

                          transform:
                            "translateY(-6px)",

                          background:
                            "rgba(255,255,255,0.10)",

                          boxShadow:
                            "0 20px 40px rgba(0,0,0,0.18)",
                        },
                      }}
                    >

                      <Box
                        sx={{
                          width: "52px",

                          height: "52px",

                          borderRadius:
                            "16px",

                          background:
                            "linear-gradient(135deg,#14b8a6,#0f172a)",

                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "center",

                          color:
                            "white",

                          boxShadow:
                            "0 10px 25px rgba(20,184,166,0.24)",
                        }}
                      >
                        {
                          item.icon
                        }
                      </Box>

                      <Typography
                        sx={{
                          color:
                            "white",

                          fontWeight:
                            600,
                        }}
                      >
                        {
                          item.title
                        }
                      </Typography>

                    </Box>

                  </Grid>
                )
              )}

            </Grid>

          </Grid>

        </Grid>

      </Container>

    </Box>
  );
}

export default AboutSection;