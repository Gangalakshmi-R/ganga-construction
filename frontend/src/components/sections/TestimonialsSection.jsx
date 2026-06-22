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
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

import { getAllReviews } from "../../api/reviewApi";

// Premium trust strip — reinforces credibility for a real construction business
const TRUST_POINTS = [
  "35+ Years Experience",
  "100+ Projects Delivered",
  "Serving Across Tamil Nadu",
  "Trusted By Homeowners & Businesses",
];

function StarRating({ rating = 5 }) {
  const total = 5;
  const filled = Math.max(0, Math.min(total, Math.round(rating || total)));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 0.3,
        mb: 1.2,
      }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <StarRoundedIcon
          key={i}
          sx={{
            fontSize: "1.2rem",
            color: i < filled ? "#f5b400" : "rgba(15,23,42,0.15)",
          }}
        />
      ))}
    </Box>
  );
}

function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {

    try {

      setLoading(true);

      const data =
        await getAllReviews();

      setReviews(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
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
            Client Testimonials
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
              mb: 4,
            }}
          >
            What Our Clients Say
          </Typography>

          {/* TRUST STRIP */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 1.2, md: 2 },
            }}
          >
            {TRUST_POINTS.map((point) => (
              <Box
                key={point}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.7,
                  px: 2,
                  py: 0.9,
                  borderRadius: "999px",
                  background: "rgba(20,184,166,0.07)",
                  border: "1.4px solid rgba(20,184,166,0.35)",
                }}
              >
                <VerifiedRoundedIcon
                  sx={{ color: "#14b8a6", fontSize: "1.05rem" }}
                />
                <Typography
                  sx={{
                    color: "#0f172a",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
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

          {loading && (

            <Typography
              sx={{
                color: "#0f172a",
                fontSize: "1.3rem",
                fontWeight: 600,
                textAlign: "center",
                gridColumn: "1 / -1",
              }}
            >
              Loading Reviews...
            </Typography>

          )}

          {!loading &&
            reviews.length === 0 && (

              <Box
                sx={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  py: 4,
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{
                    color: "rgba(20,184,166,0.35)",
                    fontSize: "2.6rem",
                    mb: 1,
                  }}
                />
                <Typography
                  sx={{
                    color: "#0f172a",
                    fontSize: "1.3rem",
                    fontWeight: 600,
                  }}
                >
                  No Reviews Available
                </Typography>
                <Typography
                  sx={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                    mt: 0.5,
                  }}
                >
                  Client testimonials will appear here soon.
                </Typography>
              </Box>

            )}

          {!loading &&
            reviews.map((item, index) => (

              <Box
                key={item.id || index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                sx={{
                  position: "relative",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
                  backdropFilter: "blur(16px)",
                  border: "2px solid #14b8a6",
                  borderRadius: "28px",
                  p: 4,
                  pt: 5,
                  textAlign: "center",
                  overflow: "hidden",
                  boxShadow:
                    "0 12px 35px rgba(15,23,42,0.04), 0 0 0 1px rgba(20,184,166,0.05) inset",
                  transition:
                    "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",

                  "&:hover": {
                    transform:
                      "translateY(-14px) scale(1.06) rotate(2.5deg)",
                    boxShadow:
                      "0 30px 65px rgba(20,184,166,0.22)",
                    borderColor: "#0d9488",
                    zIndex: 10,
                  },
                }}
              >

                {/* BACKGROUND QUOTE WATERMARK */}
                <FormatQuoteRoundedIcon
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    fontSize: "7rem",
                    color: "rgba(20,184,166,0.06)",
                    transform: "rotate(8deg)",
                    pointerEvents: "none",
                  }}
                />

                <Avatar
                  src={item.imageUrl}
                  sx={{
                    width: 72,
                    height: 72,
                    mx: "auto",
                    mb: 2,
                    border: "4px solid white",
                    boxShadow:
                      "0 8px 20px rgba(15,23,42,0.18), 0 0 0 3px rgba(20,184,166,0.25)",
                    transition: "transform 0.4s ease",
                    position: "relative",
                    zIndex: 1,

                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />

                <StarRating rating={item.rating} />

                <Typography
                  sx={{
                    color: "#0f172a",
                    fontWeight: 700,
                    fontSize: "1rem",
                    mb: 0.4,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  sx={{
                    color: "#14b8a6",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    mb: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {item.role}
                  {item.clientLocation ? ` • ${item.clientLocation}` : ""}
                </Typography>

                <Typography
                  sx={{
                    color: "#64748b",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                    mb: item.projectType ? 1.5 : 3,
                    minHeight: "90px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  “{item.review}”
                </Typography>

                {item.projectType && (
                  <Typography
                    sx={{
                      display: "inline-block",
                      color: "#0d9488",
                      fontWeight: 600,
                      fontSize: "0.78rem",
                      letterSpacing: "0.4px",
                      px: 1.6,
                      py: 0.5,
                      borderRadius: "999px",
                      background: "rgba(20,184,166,0.08)",
                      mb: 1.5,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.projectType}
                  </Typography>
                )}

                <FormatQuoteRoundedIcon
                  sx={{
                    color: "rgba(20,184,166,0.22)",
                    fontSize: "2rem",
                    position: "relative",
                    zIndex: 1,
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