import React from "react";

import ReactDOM
from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import AOS from "aos";

import {
  SnackbarProvider,
} from "notistack";

import "aos/dist/aos.css";

import App from "./App";

import theme
from "./theme/theme";


AOS.init({

  duration: 1200,

  once: true,
});

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <ThemeProvider
        theme={theme}
      >

        <CssBaseline />

        <SnackbarProvider
  maxSnack={3}

  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
>
  <App />
</SnackbarProvider>

      </ThemeProvider>

    </BrowserRouter>

  </React.StrictMode>
);