import { Box } from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

function CursorGlow() {

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

  }, []);

  return (

    <Box
      sx={{
        position: "fixed",

        top: position.y - 120,

        left: position.x - 120,

        width: "240px",

        height: "240px",

        borderRadius: "50%",

        pointerEvents: "none",

        zIndex: 9999,

        background:
          "radial-gradient(circle, rgba(20,184,166,0.18) 0%, rgba(20,184,166,0.08) 35%, transparent 75%)",

        filter: "blur(35px)",

        transition:
          "top 0.18s ease-out, left 0.18s ease-out",

        mixBlendMode: "screen",

        opacity: 0.9,

        display: {
          xs: "none",
          md: "block",
        },
      }}
    />

  );
}

export default CursorGlow;