import { Box, Typography } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#020617",
        backgroundImage: `
          radial-gradient(circle at top right, rgba(45,212,191,0.14), transparent 22%),
          radial-gradient(circle at bottom left, rgba(20,184,166,0.12), transparent 26%),
          linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "auto, auto, 42px 42px, 42px 42px",
        backgroundPosition: "center, center, center center, center center",
        animation: "loaderFade 2.8s ease forwards",
        "@keyframes loaderFade": {
          "0%": { opacity: 1 },
          "80%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      }}
    >
      {/* AMBIENT GLOW */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: "240px", sm: "320px", md: "420px" },
          height: { xs: "240px", sm: "320px", md: "420px" },
          borderRadius: "50%",
          background: "rgba(20,184,166,0.18)",
          filter: "blur(90px)",
          animation: "pulseGlow 3s ease-in-out infinite",
          "@keyframes pulseGlow": {
            "0%": { transform: "scale(1)", opacity: 0.7 },
            "50%": { transform: "scale(1.12)", opacity: 1 },
            "100%": { transform: "scale(1)", opacity: 0.7 },
          },
        }}
      />

      {/* LOGO */}
      <Typography
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          px: 2,
          fontSize: {
            xs: "1.6rem",
            sm: "2.2rem",
            md: "4rem",
          },
          fontWeight: 900,
          letterSpacing: { xs: "3px", sm: "4px", md: "6px" },
          color: "white",
          textTransform: "uppercase",
          animation: "logoReveal 1.8s cubic-bezier(0.22,1,0.36,1)",
          "@keyframes logoReveal": {
            "0%": {
              opacity: 0,
              transform: "translateY(30px) scale(0.95)",
              letterSpacing: "12px",
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0px) scale(1)",
              letterSpacing: { xs: "3px", sm: "4px", md: "6px" },
            },
          },
        }}
      >
        <Box component="span" sx={{ color: "#14b8a6" }}>
          GANGA
        </Box>{" "}
        CONSTRUCTIONS
      </Typography>

      {/* TAGLINE */}
      <Typography
        sx={{
          mt: 1.5,
          color: "rgba(255,255,255,0.68)",
          letterSpacing: { xs: "2.5px", md: "4px" },
          fontSize: {
            xs: "0.68rem",
            sm: "0.75rem",
            md: "0.9rem",
          },
          textTransform: "uppercase",
          animation: "tagReveal 2.2s ease",
          "@keyframes tagReveal": {
            "0%": { opacity: 0 },
            "60%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        }}
      >
        Building Modern Spaces
      </Typography>

      {/* ANIMATED LINE */}
      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          width: {
            xs: "130px",
            sm: "180px",
            md: "260px",
          },
          height: "2px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "rgba(255,255,255,0.08)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "40%",
            borderRadius: "20px",
            background: "linear-gradient(to right,#14b8a6,#5eead4)",
            animation: "loadingLine 1.5s ease-in-out infinite",
            "@keyframes loadingLine": {
              "0%": { left: "-40%" },
              "100%": { left: "100%" },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Loader;