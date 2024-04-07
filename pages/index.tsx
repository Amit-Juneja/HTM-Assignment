import CustomHead from "@/components/custom-head";
import Footer from "@/components/footer";
import HotelCollection from "@/components/hotel-collection";
import NavBar from "@/components/nav/nav-bar";
import { BASE_DESCRIPTION, BASE_TITLE } from "@/utils/seo";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <CustomHead description={BASE_DESCRIPTION} title={BASE_TITLE} />
      <NavBar />
      <HotelCollection />
      <Footer />
    </Box>
  );
}
