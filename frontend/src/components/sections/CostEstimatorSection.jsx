import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  MenuItem,
  CircularProgress,
} from "@mui/material";

import { useState } from "react";

import axios from "axios";

function CostEstimatorSection() {

  const [formData, setFormData] =
    useState({
      fullName: "",
      phone: "",
      email: "",
      buildingType: "RESIDENTIAL",
      areaSqft: "",
      floors: 1,
      qualityType: "STANDARD",
    });

  const [estimatedCost, setEstimatedCost] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

    
const API = import.meta.env.VITE_API_BASE_URL;

const response =
  await axios.post(
    `${API}/api/cost-estimations`,
    formData
  );



      setEstimatedCost(
        response.data.estimatedCost
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <Box
      id="cost-estimation"

      data-aos="fade-up"

      sx={{
        py: {
          xs: 8,
          md: 12,
        },

        position: "relative",

        overflow: "hidden",

        backgroundColor:
          "#090d16",

        backgroundImage: `

linear-gradient(
to right,
rgba(20,184,166,0.08) 1.2px,
transparent 1.2px
),

linear-gradient(
to bottom,
rgba(20,184,166,0.08) 1.2px,
transparent 1.2px
)

`,

        backgroundSize:
          "42px 42px",

        backgroundPosition:
          "0 0",
      }}
    >

      {/* AMBIENT GLOW */}

      <Box
        sx={{
          position: "absolute",

          width: "650px",

          height: "650px",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)",

          top: "-220px",

          right: "-120px",

          zIndex: 1,

          filter:
            "blur(30px)",
        }}
      />

      <Container
        maxWidth="md"

        sx={{
          position: "relative",

          zIndex: 2,
        }}
      >

        {/* TOP SECTION */}

        <Box
          sx={{
            textAlign:
              "center",

            maxWidth:
              "820px",

            mx: "auto",
          }}
        >

          <Typography
            sx={{
              color:
                "#14b8a6",

              letterSpacing:
                "4px",

              fontWeight:
                700,

              fontSize: {
                xs: "2.1rem",
                md: "2.1rem",
              },

              mb: 1,

              textTransform:
                "uppercase",
            }}
          >
            Cost Estimation
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "2.3rem",
                md: "1.5rem",
              },

              fontWeight:
                700,

              lineHeight:
                1.2,

              color:
                "#ffffff",

              mb: 2,
            }}
          >
            Get Instant Construction Cost Estimate
          </Typography>

          <Typography
            sx={{
              color:
                "#94a3b8",

              lineHeight:
                1.8,

              fontSize:
                "1rem",

              maxWidth:
                "700px",

              mx: "auto",
            }}
          >
            Quickly estimate your project cost using our smart construction
            calculator based on building type, floors, area, and quality
            standards.
          </Typography>

        </Box>

        {/* DIVIDER */}

        <Box
          sx={{
            width: "100%",

            height: "1px",

            background:
              "linear-gradient(to right,transparent,rgba(20,184,166,0.25),transparent)",

            my: 6,
          }}
        />

        {/* FORM SECTION */}

        <Box
          sx={{
            maxWidth:
              "620px",

            mx: "auto",

            transform:
              "translateY(30px)",

            animation:
              "fadeForm 0.8s ease forwards",

            opacity: 0,

            "@keyframes fadeForm": {

              to: {
                opacity: 1,

                transform:
                  "translateY(0px)",
              },
            },
          }}
        >

          <Box
            component="form"

            onSubmit={handleSubmit}

            sx={{
              background:
                "rgba(15,23,42,0.65)",

              backdropFilter:
                "blur(22px)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              borderRadius:
                "30px",

              p: {
                xs: 4,
                md: 5,
              },

              display:
                "flex",

              flexDirection:
                "column",

              gap: 3,

              boxShadow:
                "0 30px 80px rgba(0,0,0,0.45)",
            }}
          >

            <TextField
              fullWidth

              label="Full Name"

              name="fullName"

              value={
                formData.fullName
              }

              onChange={
                handleChange
              }

              variant="filled"

              sx={inputStylesColorA}
            />

            <TextField
              fullWidth

              label="Phone"

              name="phone"

              value={
                formData.phone
              }

              onChange={
                handleChange
              }

              variant="filled"

              sx={inputStylesColorB}
            />

            <TextField
              fullWidth

              label="Email"

              name="email"

              value={
                formData.email
              }

              onChange={
                handleChange
              }

              variant="filled"

              sx={inputStylesColorA}
            />

            <TextField
              select

              fullWidth

              label="Building Type"

              name="buildingType"

              value={
                formData.buildingType
              }

              onChange={
                handleChange
              }

              variant="filled"

              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx:
                      dropdownStyles,
                  },
                },
              }}

              sx={inputStylesColorB}
            >
              <MenuItem value="RESIDENTIAL">
                Residential
              </MenuItem>

              <MenuItem value="COMMERCIAL">
                Commercial
              </MenuItem>

            </TextField>

            <TextField
              fullWidth

              label="Area (Sqft)"

              name="areaSqft"

              type="number"

              value={
                formData.areaSqft
              }

              onChange={
                handleChange
              }

              variant="filled"

              sx={inputStylesColorA}
            />

            <TextField
              fullWidth

              label="Floors"

              name="floors"

              type="number"

              value={
                formData.floors
              }

              onChange={
                handleChange
              }

              variant="filled"

              sx={inputStylesColorB}
            />

            <TextField
              select

              fullWidth

              label="Quality"

              name="qualityType"

              value={
                formData.qualityType
              }

              onChange={
                handleChange
              }

              variant="filled"

              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx:
                      dropdownStyles,
                  },
                },
              }}

              sx={inputStylesColorA}
            >
              <MenuItem value="STANDARD">
                Standard
              </MenuItem>

              <MenuItem value="PREMIUM">
                Premium
              </MenuItem>

              <MenuItem value="LUXURY">
                Luxury
              </MenuItem>

            </TextField>

            {/* BUTTON */}

            <Button
              type="submit"

              variant="contained"

              fullWidth

              disabled={loading}

              sx={{
                position:
                  "relative",

                overflow:
                  "hidden",

                background:
                  "linear-gradient(135deg,#14b8a6,#0d9488)",

                py: 1.8,

                borderRadius:
                  "14px",

                fontWeight:
                  700,

                fontSize:
                  "1rem",

                textTransform:
                  "none",

                boxShadow:
                  "0 10px 30px rgba(20,184,166,0.2)",

                transition:
                  "all 0.35s ease",

                "&:hover": {

                  transform:
                    "translateY(-3px)",

                  boxShadow:
                    "0 18px 40px rgba(20,184,166,0.35)",
                },

                "&::before": {

                  content: '""',

                  position:
                    "absolute",

                  top: 0,

                  left: "-120%",

                  width: "100%",

                  height: "100%",

                  background:
                    "linear-gradient(to right,transparent,rgba(255,255,255,0.22),transparent)",

                  transition:
                    "0.8s",
                },

                "&:hover::before": {

                  left: "120%",
                },
              }}
            >

              {loading ? (

                <CircularProgress
                  size={24}

                  sx={{
                    color:
                      "#ffffff",
                  }}
                />

              ) : (

                "Generate Estimate"
              )}

            </Button>

          </Box>

        </Box>

        {/* DIVIDER */}

        <Box
          sx={{
            width: "100%",

            height: "1px",

            background:
              "linear-gradient(to right,transparent,rgba(20,184,166,0.25),transparent)",

            my: 6,
          }}
        />

        {/* RESULT SECTION */}

        {estimatedCost && (

          <Box
            sx={{
              textAlign:
                "center",

              animation:
                "resultReveal 0.5s ease",

              "@keyframes resultReveal": {

                from: {
                  opacity: 0,

                  transform:
                    "translateY(20px)",
                },

                to: {
                  opacity: 1,

                  transform:
                    "translateY(0px)",
                },
              },
            }}
          >

            <Typography
              sx={{
                color:
                  "#14b8a6",

                letterSpacing:
                  "3px",

                fontWeight:
                  700,

                mb: 1,

                textTransform:
                  "uppercase",
              }}
            >
              Estimated Result
            </Typography>

            <Box
              sx={{
                mt: 3,

                mx: "auto",

                maxWidth:
                  "420px",

                p: 4,

                borderRadius:
                  "26px",

                background:
                  "rgba(15,23,42,0.82)",

                border:
                  "1px solid rgba(20,184,166,0.28)",

                backdropFilter:
                  "blur(16px)",

                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.45)",
              }}
            >

              <Typography
                sx={{
                  color:
                    "#94a3b8",

                  mb: 1,

                  letterSpacing:
                    "2px",

                  textTransform:
                    "uppercase",
                }}
              >
                Estimated Cost
              </Typography>

              <Typography
                sx={{
                  fontSize:
                    "2.6rem",

                  fontWeight:
                    800,

                  color:
                    "#ffffff",
                }}
              >
                ₹
                {Number(
                  estimatedCost
                ).toLocaleString()}
              </Typography>

            </Box>

          </Box>
        )}

      </Container>

    </Box>
  );
}

/* INPUT STYLE A */

const inputStylesColorA = {

  "& .MuiInputBase-root": {

    background:
      "rgba(15,23,42,0.45)",

    border:
      "1px solid rgba(20,184,166,0.15)",

    borderRadius:
      "12px",

    color:
      "#e2e8f0",

    transition:
      "all 0.35s ease",

    "&::before, &::after": {
      display:
        "none",
    },

    "&:hover": {

      transform:
        "translateY(-2px)",
    },

    "&.Mui-focused": {

      borderColor:
        "#14b8a6",

      boxShadow:
        "0 0 16px rgba(20,184,166,0.2)",
    },
  },

  "& .MuiFormLabel-root": {
    color:
      "#14b8a6",
  },

  "& .MuiFormLabel-root.Mui-focused": {
    color:
      "#14b8a6 !important",
  },

  "& .MuiSelect-icon": {
    color:
      "#14b8a6",
  },
};

/* INPUT STYLE B */

const inputStylesColorB = {

  "& .MuiInputBase-root": {

    background:
      "rgba(15,23,42,0.45)",

    border:
      "1px solid rgba(255,255,255,0.1)",

    borderRadius:
      "12px",

    color:
      "#ffffff",

    transition:
      "all 0.35s ease",

    "&::before, &::after": {
      display:
        "none",
    },

    "&:hover": {

      transform:
        "translateY(-2px)",
    },

    "&.Mui-focused": {

      borderColor:
        "#f8fafc",

      boxShadow:
        "0 0 16px rgba(255,255,255,0.1)",
    },
  },

  "& .MuiFormLabel-root": {
    color:
      "#94a3b8",
  },

  "& .MuiFormLabel-root.Mui-focused": {
    color:
      "#ffffff !important",
  },

  "& .MuiSelect-icon": {
    color:
      "#94a3b8",
  },
};

/* DROPDOWN */

const dropdownStyles = {

  background:
    "#0f172a !important",

  border:
    "1px solid rgba(255,255,255,0.08)",

  borderRadius:
    "12px",

  "& .MuiMenuItem-root": {

    color:
      "#94a3b8",

    py: 1.5,

    "&:hover": {

      background:
        "rgba(20,184,166,0.1)",

      color:
        "#14b8a6",
    },

    "&.Mui-selected": {

      background:
        "rgba(20,184,166,0.2)",

      color:
        "#ffffff",
    },
  },
};

export default CostEstimatorSection;