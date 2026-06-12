import {
  Box,
  Typography,
  Container,
  Avatar,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

import { getAllReviews } from "../../api/reviewApi";

function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await getAllReviews();
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      id="reviews"
      data-aos="fade-up"
      sx={{
        py: 9,
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* AMBIENT GLOW */}
      <Box
        sx={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(20,184,166,0.10)",
          filter: "blur(120px)",
          top: "-100px",
          right: "-80px",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* TOP */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
          <Typography
            sx={{
              color: "#14b8a6",
              letterSpacing: "4px",
              fontWeight: 700,
              fontSize: {
                xs: "2.1rem",
                md: "2.1rem",
              },
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            Client Reviews
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "2.2rem",
                md: "1.7rem",
              },
              fontWeight: 750,
              color: "#0f172a",
              lineHeight: 1.1,
              maxWidth: "760px",
              mx: "auto",
            }}
          >
            Trusted By Clients Across Every Project
          </Typography>
        </Box>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            },
            gap: 4,
          }}
        >
          {reviews.map((item, index) => (
            <Box
              key={item.id || index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              sx={{
                position: "relative",
                background: "rgba(255,255,255,0.78)",
                backdropFilter: "blur(16px)",
                border: "2px solid #14b8a6",
                borderRadius: "28px",
                p: 4,
                pt: 5,
                textAlign: "center",
                overflow: "hidden",
                boxShadow: "0 12px 35px rgba(15,23,42,0.04)",
                
                // Using a premium custom cubic-bezier transition curve for a responsive popping/elastic lift feel
                transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",

                "&:hover": {
                  // Lifts up, enlarges (scale up), and slants dynamically (rotate)
                  transform: "translateY(-14px) scale(1.06) rotate(2.5deg)",
                  boxShadow: "0 30px 65px rgba(20,184,166,0.22)",
                  borderColor: "#0d9488",
                  zIndex: 10, // Ensures the enlarged card pops above adjacent cards seamlessly
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom right,rgba(20,184,166,0.04),transparent)",
                  opacity: 0,
                  transition: "0.4s",
                },

                "&:hover::before": {
                  opacity: 1,
                },
              }}
            >
              {/* AVATAR */}
              <Avatar
                src={item.imageUrl}
                sx={{
                  width: 72,
                  height: 72,
                  mx: "auto",
                  mb: 2,
                  border: "4px solid white",
                  boxShadow: "0 10px 25px rgba(20,184,166,0.16)",
                }}
              />

              {/* NAME */}
              <Typography
                sx={{
                  color: "#0f172a",
                  fontWeight: 700,
                  fontSize: "1rem",
                  mb: 0.4,
                }}
              >
                {item.name}
              </Typography>

              {/* ROLE */}
              <Typography
                sx={{
                  color: "#14b8a6",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  mb: 2,
                }}
              >
                {item.role}
              </Typography>

              {/* REVIEW */}
              <Typography
                sx={{
                  color: "#64748b",
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                  mb: 3,
                  minHeight: "120px",
                }}
              >
                “{item.review}”
              </Typography>

              {/* QUOTE */}
              <FormatQuoteRoundedIcon
                sx={{
                  color: "rgba(20,184,166,0.22)",
                  fontSize: "2rem",
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default TestimonialsSection;