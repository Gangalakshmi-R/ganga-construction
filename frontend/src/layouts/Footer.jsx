import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
} from "@mui/material";

import {
  Link,
} from "react-scroll";

function Footer() {

  return (

    <Box
      sx={{
        position:
          "relative",

        overflow:
          "hidden",

        backgroundColor:
          "#020617",

        color:
          "white",

        pt: 7,

        pb: 4,

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
            "rgba(20,184,166,0.12)",

          filter:
            "blur(140px)",

          top:
            "-180px",

          right:
            "-180px",

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

        {/* MAIN FOOTER */}

        <Grid
          container

          spacing={6}
        >

          {/* BRAND */}

          <Grid
            item

            xs={12}

            md={5}
          >

            <Typography
              sx={{
                fontSize:
                  "2.2rem",

                fontWeight:
                  800,

                mb: 2,

                letterSpacing:
                  "2px",
              }}
            >

              <Box
                component="span"

                sx={{
                  color:
                    "#14b8a6",
                }}
              >
                GANGA
              </Box>{" "}

              CONSTRUCTIONS

            </Typography>

            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.68)",

                lineHeight:
                  1.9,

                maxWidth:
                  "430px",
              }}
            >
              Engineering elegant,
              durable, and modern
              spaces with precision,
              trust, and premium
              craftsmanship tailored
              for the future.
            </Typography>

          </Grid>

          {/* QUICK LINKS */}

          <Grid
            item

            xs={12}

            sm={6}

            md={2}
          >

            <FooterHeading
              title="Quick Links"
            />

            <Stack spacing={2}>

              <FooterLink
                to="home"
                label="Home"
              />

              <FooterLink
                to="services"
                label="Services"
              />

              <FooterLink
                to="projects"
                label="Projects"
              />

              <FooterLink
                to="reviews"
                label="Reviews"
              />

              <FooterLink
                to="contact"
                label="Contact"
              />

            </Stack>

          </Grid>

          {/* SERVICES */}

          <Grid
            item

            xs={12}

            sm={6}

            md={2}
          >

            <FooterHeading
              title="Services"
            />

            <Stack spacing={2}>

              <FooterText
                text=
                  "Residential Construction"
              />

              <FooterText
                text=
                  "Architectural Planning"
              />

              <FooterText
                text=
                  "Interior Design"
              />

              <FooterText
                text=
                  "Structural Engineering"
              />

            </Stack>

          </Grid>

          {/* CONTACT */}

          <Grid
            item

            xs={12}

            md={3}
          >

            <FooterHeading
              title="Contact"
            />

            <Stack spacing={2}>

              <FooterText
                text=
                  "+91 99430 42474"
              />

              <FooterText
                text=
                  "tlr.engineer@gmail.com"
              />

              <FooterText
                text=
                  "Trichy, Tamil Nadu"
              />

            </Stack>

          </Grid>

        </Grid>

        {/* BOTTOM */}

        <Box
          sx={{
            borderTop:
              "1px solid rgba(255,255,255,0.08)",

            mt: 8,

            pt: 4,

            textAlign:
              "center",
          }}
        >

          <Typography
            sx={{
              color:
                "rgba(255,255,255,0.5)",

              letterSpacing:
                "0.5px",
            }}
          >
            © 2026 Ganga Constructions.
            All Rights Reserved.
          </Typography>

        </Box>

      </Container>

    </Box>
  );
}

/* FOOTER HEADING */

function FooterHeading({
  title,
}) {

  return (

    <Typography
      sx={{
        fontWeight:
          700,

        mb: 3,

        color:
          "#5eead4",

        letterSpacing:
          "1px",
      }}
    >
      {title}
    </Typography>
  );
}

/* FOOTER LINKS */

function FooterLink({
  to,
  label,
}) {

  return (

    <Link
      to={to}

      smooth={true}

      duration={500}

      offset={-90}

      style={{
        cursor:
          "pointer",

        width:
          "fit-content",
      }}
    >

      <Typography
        sx={{
          color:
            "rgba(255,255,255,0.72)",

          transition:
            "0.35s cubic-bezier(0.22,1,0.36,1)",

          position:
            "relative",

          width:
            "fit-content",

          "&::after": {

            content:
              '""',

            position:
              "absolute",

            left: 0,

            bottom: -2,

            width: "0%",

            height: "1px",

            background:
              "#14b8a6",

            transition:
              "0.35s",
          },

          "&:hover": {

            color:
              "#14b8a6",

            transform:
              "translateX(4px)",
          },

          "&:hover::after": {

            width:
              "100%",
          },
        }}
      >
        {label}
      </Typography>

    </Link>
  );
}

/* FOOTER TEXT */

function FooterText({
  text,
}) {

  return (

    <Typography
      sx={{
        color:
          "rgba(255,255,255,0.72)",

        lineHeight:
          1.7,
      }}
    >
      {text}
    </Typography>
  );
}

export default Footer;