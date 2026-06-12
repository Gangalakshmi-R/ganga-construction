import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080",
    },

    secondary: {
      main: "#0F172A",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#111827",
      secondary: "#475569",
    },
  },
typography: {
  fontFamily: `"Poppins", sans-serif`,

  h1: {
    fontWeight: 700,
    fontSize: "5rem",
    lineHeight: 1.1,
  },

  h2: {
    fontWeight: 700,
    fontSize: "3rem",
  },

  h3: {
    fontWeight: 600,
    fontSize: "2rem",
  },

  body1: {
    fontSize: "1.05rem",
    lineHeight: 1.9,
  },

  button: {
    textTransform: "none",
    fontWeight: 600,
  },
},

  shape: {
    borderRadius: 12,
  },
});

export default theme;