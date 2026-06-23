import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Services", to: "services" },
    { label: "Projects", to: "projects" },
    { label: "Reviews", to: "reviews" },
    { label: "Cost Estimate", to: "cost-estimation" },
    { label: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      /* SCROLL PROGRESS */
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      /* ACTIVE SECTION */
      const sections = navItems.map((item) =>
        document.getElementById(item.to)
      );

      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          background: "linear-gradient(to right,#14b8a6,#5eead4)",
          zIndex: 99999,
          transition: "width 0.15s linear",
          boxShadow: "0 0 18px rgba(20,184,166,0.45)",
        }}
      />

      {/* NAVBAR */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(255,255,255,0.82)"
            : "rgba(255,255,255,0.68)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          borderBottom: scrolled
            ? "1px solid rgba(20,184,166,0.14)"
            : "1px solid rgba(255,255,255,0.22)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(15,23,42,0.08)"
            : "0 10px 35px rgba(15,23,42,0.04)",
          transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: {
                xs: scrolled ? "54px" : "58px",
                md: scrolled ? "62px" : "68px",
              },
              transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* LOGO */}
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "1.15rem", sm: "1.35rem", md: "1.55rem" },
                  fontWeight: 800,
                  padding: "5px 0",
                  letterSpacing: { xs: "2px", sm: "4px" },
                  color: "#0f172a",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 0.8, md: 1.2 },
                }}
              >
                {/* LEFT LINE */}
                <Box
                  component="span"
                  sx={{
                    width: { xs: "24px", md: "38px" },
                    height: "4px",
                    background: "linear-gradient(90deg,#14b8a6,#0f172a)",
                    borderRadius: "10px",
                    mt: "4px",
                    transition: "0.4s ease",
                  }}
                />

                {/* GANGA */}
                <Box
                  component="span"
                  sx={{
                    color: "#197a6f",
                    transition: "all 0.4s ease",
                    textShadow: "0 0 18px rgba(20,184,166,0.22)",
                  }}
                >
                  GANGA
                </Box>

                {/* RIGHT LINE */}
                <Box
                  component="span"
                  sx={{
                    width: { xs: "24px", md: "38px" },
                    height: "4px",
                    background: "linear-gradient(90deg,#14b8a6,#0f172a)",
                    borderRadius: "20px",
                    mt: "4px",
                    transition: "0.4s ease",
                  }}
                />
              </Typography>

              {/* SUBTITLE */}
              <Typography
                sx={{
                  fontSize: { xs: "0.62rem", md: "0.74rem" },
                  fontWeight: 700,
                  letterSpacing: { xs: "4.5px", sm: "7px" },
                  color: "#64748b",
                  mt: 0.2,
                }}
              >
                CONSTRUCTIONS
              </Typography>
            </Box>

            {/* DESKTOP MENU */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4.5,
                alignItems: "center",
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    style={{ cursor: "pointer" }}
                  >
                    <Typography
                      sx={{
                        position: "relative",
                        fontWeight: isActive ? 700 : 500,
                        fontSize: "0.96rem",
                        letterSpacing: "0.3px",
                        color: isActive ? "#14b8a6" : "#334155",
                        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                        textShadow: isActive
                          ? "0 0 18px rgba(20,184,166,0.24)"
                          : "none",
                        "&:hover": {
                          color: "#14b8a6",
                          transform: "translateY(-2px)",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          bottom: -8,
                          width: isActive ? "100%" : "0%",
                          height: "2px",
                          borderRadius: "10px",
                          background: "linear-gradient(135deg,#14b8a6,#2dd4bf)",
                          transition: "0.35s ease",
                          boxShadow: isActive
                            ? "0 0 12px rgba(20,184,166,0.42)"
                            : "none",
                        },
                        "&:hover::after": {
                          width: "100%",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                );
              })}
            </Box>

            {/* MOBILE MENU BUTTON */}
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#0f172a",
                transition: "0.3s ease",
                "&:hover": {
                  background: "rgba(20,184,166,0.10)",
                  transform: "rotate(90deg)",
                },
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 270,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          },
        }}
      >
        <Box sx={{ pt: 4, height: "100%" }}>
          <List disablePadding>
            {navItems.map((item) => {
              const isActive = activeSection === item.to;
              return (
                <ListItem key={item.to} disablePadding>
                  {/* Link wraps the interaction area cleanly inside the responsive drawer layer */}
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    onClick={() => setOpen(false)}
                    style={{ width: "100%", textDecoration: "none" }}
                  >
                    <ListItemButton
                      sx={{
                        py: 1.8,
                        px: 3,
                        transition: "all 0.3s ease",
                        background: isActive
                          ? "rgba(20,184,166,0.12)"
                          : "transparent",
                        borderLeft: isActive 
                          ? "4px solid #14b8a6" 
                          : "4px solid transparent",
                        "&:hover": {
                          background: "rgba(20,184,166,0.08)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#14b8a6" : "#334155",
                          letterSpacing: "0.5px",
                          fontSize: "1rem"
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;