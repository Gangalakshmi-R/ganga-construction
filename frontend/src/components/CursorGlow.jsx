
import { useEffect, useState } from "react";

function CursorGlow() {
  // Touch devices have no pointer to follow: render nothing.
  const enabled =
    typeof window !== "undefined" && !window.matchMedia("(hover: none)").matches;

  const [position, setPosition] = useState({
    x: -300,
    y: -300,
  });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("pointermove", moveCursor, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", moveCursor);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 250,
        background:
          "radial-gradient(circle, rgba(138,80,234,0.22) 0%, rgba(201,168,255,0.13) 35%, transparent 72%)",
        filter: "blur(35px)",
        transform: `translate3d(${position.x - 130}px, ${position.y - 130}px, 0)`,
        transition: "transform 0.12s ease-out",
        mixBlendMode: "screen",
        willChange: "transform",
      }}
    />
  );
}

export default CursorGlow;
