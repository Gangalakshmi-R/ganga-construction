
import {
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";

import Reveal
from "../../components/Reveal";

import ArchitectureIcon
from "@mui/icons-material/Architecture";

import EngineeringIcon
from "@mui/icons-material/Engineering";

import HomeWorkIcon
from "@mui/icons-material/HomeWork";

import DesignServicesIcon
from "@mui/icons-material/DesignServices";

function ServicesSection() {

  const services = [

    {
      title:
        "Architectural Planning",

      description:
        "Modern architectural solutions focused on elegance, efficiency, and structural excellence.",

      icon:
        <ArchitectureIcon
          sx={{
            fontSize: 34,
          }}
        />,
    },

    {
      title:
        "Residential Construction",

      description:
        "Premium villas and homes built with trusted engineering and superior craftsmanship.",

      icon:
        <HomeWorkIcon
          sx={{
            fontSize: 34,
          }}
        />,
    },

    {
      title:
        "Structural Engineering",

      description:
        "Safe, durable, and optimized structural systems for long-lasting projects.",

      icon:
        <EngineeringIcon
          sx={{
            fontSize: 34,
          }}
        />,
    },

    {
      title:
        "Interior & Space Design",

      description:
        "Elegant interiors and functional spaces designed for comfort, style, and modern everyday living.",

      icon:
        <DesignServicesIcon
          sx={{
            fontSize: 34,
          }}
        />,
    },
  ];

  return (

    <Box
      id="services"

      sx={{
        position: "relative",

        py: {
          xs: 4,
          md: 6,
        },

        overflow: "hidden",

      backgroundColor: "#ffffff",

backgroundImage: `

linear-gradient(
to right,
rgba(20,184,166,0.12) 1.4px,
transparent 1.4px
),

linear-gradient(
to bottom,
rgba(20,184,166,0.12) 1.4px,
transparent 1.4px
)

`,

backgroundSize: "38px 38px",

backgroundPosition: "0 0",
      }}
    >

      {/* AMBIENT LIGHT */}

      <Box
        sx={{
          position: "absolute",

          width: "450px",

          height: "450px",

          borderRadius: "50%",

          background:
            "rgba(20,184,166,0.08)",

          filter: "blur(120px)",

          top: "-120px",

          right: "-120px",

          zIndex: 1,
        }}
      />

      <Container
        maxWidth="xl"

        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >

        <Grid
          container

          spacing={{
            xs: 6,
            md: 6,
          }}

          alignItems="center"
        >

          {/* LEFT SIDE */}

          <Grid
            item

            xs={12}

            md={3}
          >

            <Reveal delay={0.1}>

              <Typography
                sx={{
                  color:
                    "#14b8a6",

                  letterSpacing:
                    "3px",

                  fontSize: {
                    xs: "2.1rem",
                    md: "2.1rem",
                  },

                  fontWeight: 700,

                  mb: 2,

                  textTransform:
                    "uppercase",
                }}
              >
                Our Services
              </Typography>

            </Reveal>

            <Reveal delay={0.2}>

              <Typography
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    md: "2.1rem",
                  },

                  fontWeight: 700,

                  lineHeight: 1.02,

                  letterSpacing: "1px",

                  color:
                    "#0f172a",

                  mb: 3,

                  maxWidth:
                    "1000px",
                }}
              >
                Delivering
                Innovative
                Construction
                Solutions
              </Typography>

            </Reveal>

            <Reveal delay={0.3}>

              <Typography
                sx={{
                  color:
                    "#475569",

                  lineHeight:2.0,

                  fontSize:
                    "1.02rem",

                  maxWidth:
                    "1000px",

                  letterSpacing:
                    "0.2px",
                }}
              >
                Ganga Construction combines modern
                engineering, premium design, and
                trusted execution to create elegant
                residential and commercial spaces
                built for the future.
              </Typography>

            </Reveal>

          </Grid>

          {/* RIGHT SIDE */}

          <Grid
            item

            xs={12}

            md={12}
          >

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr 1fr",
                },

                gap: 3,
              }}
            >

              {services.map(
                (
                  service,
                  index
                ) => (

                  <Reveal
                    key={
                      service.title
                    }

                    delay={
                      0.15 * (index + 1)
                    }
                  >

                    <Box
                      sx={{
                        position: "relative",

                        overflow: "hidden",

                        p: 5,

                        minHeight:
                          "260px",

                        display:
                          "flex",

                        flexDirection:
                          "column",

                        justifyContent:
                          "space-between",

                        borderRadius:
                          "30px",

                        background:
                          "rgba(223, 224, 224, 0.72)",

                        backdropFilter:
                          "blur(12px)",

                        border:
                          "1px solid rgba(255,255,255,0.28)",

                        boxShadow:
                          "0 18px 45px rgba(87, 126, 219, 0.06)",

                        transition:
                          "all 0.45s cubic-bezier(0.22,1,0.36,1)",

                        "&:hover": {

                          transform:
                            "translateY(-12px)",

                          boxShadow:
                            "0 28px 65px rgba(87, 126, 219, 0.14)",

                          border:
                            "1px solid rgba(87, 126, 219, 0.18)",
                        },

                        "&::before": {

                          content: '""',

                          position: "absolute",

                          top: 0,

                          left: "-120%",

                          width: "100%",

                          height: "100%",

                          background:
                            "linear-gradient(to right,transparent,rgba(255,255,255,0.30),transparent)",

                          transition:
                            "0.9s ease",
                        },

                        "&:hover::before": {

                          left: "120%",
                        },
                      }}
                    >

                      {/* ICON */}

                      <Box
                        sx={{
                          width: "72px",

                          height: "72px",

                          borderRadius:
                            "24px",

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

                          mb: 3,

                          boxShadow:
                            "0 15px 35px rgba(20,184,166,0.28)",

                          transition:
                            "all 0.45s ease",

                          "&:hover": {

                            transform:
                              "rotate(-6deg) scale(1.06)",
                          },
                        }}
                      >
                        {service.icon}
                      </Box>

                      {/* TITLE */}

                      <Typography
                        sx={{
                          fontSize:
                            "1.3rem",

                          fontWeight:
                            700,

                          color:
                            "#0f172a",

                          mb: 2,

                          lineHeight:
                            1.3,
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* DESCRIPTION */}

                      <Typography
                        sx={{
                          color:
                            "#64748b",

                          fontSize:
                            "1rem",

                          lineHeight:
                            1.8,

                          letterSpacing:
                            "0.2px",
                        }}
                      >
                        {service.description}
                      </Typography>

                    </Box>

                  </Reveal>
                )
              )}

            </Box>

          </Grid>

        </Grid>

      </Container>

    </Box>
  );
}

export default ServicesSection;

