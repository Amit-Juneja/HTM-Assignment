import { Box, Link } from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";
import HTMLogo from "../../public/niseko-central-logo.png";

export default function NavBar(): ReactElement {
  return (
    <Box
      color="inherit"
      sx={{
        display: "flex",
        justifyContent: "center",
        boxShadow: "0",
        padding: "12px",
        bgcolor: "#222"
      }}
    >
      <Link href="/">
        <Image src={HTMLogo} alt="Nisenko Central" />
      </Link>
    </Box>
  );
}
