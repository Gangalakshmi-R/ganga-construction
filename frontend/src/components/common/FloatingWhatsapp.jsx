import {
  Box,
} from "@mui/material";

import WhatsAppIcon
from "@mui/icons-material/WhatsApp";

function FloatingWhatsapp() {

  return (

    <Box
      component="a"

      href=
        "https://wa.me/919943042474"

      target="_blank"

      sx={{
        position:
          "fixed",

        bottom: 30,

        right: 30,

        width: 50,

        height: 50,

        borderRadius:
          "50%",

        background:
          "#25D366",

        display:
          "flex",

        alignItems:
          "center",

        justifyContent:
          "center",

        zIndex: 9999,

        boxShadow:
          "0 12px 30px rgba(37,211,102,0.4)",

        cursor:
          "pointer",

        transition:
          "0.3s ease",

        "&:hover": {
          transform:
            "scale(1.1)",
        },
      }}
    >

      <WhatsAppIcon
        sx={{
          color:
            "white",

          fontSize:
            "2.2rem",
        }}
      />

    </Box>
  );
}

export default FloatingWhatsapp;