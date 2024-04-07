import { Box, Typography } from "@mui/material";
import CollectionCard from "./collection-card";

export default function HotelCollection() {
  return (
    <Box
      sx={{
        pt: 8,
        background: "#FFFBF1",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h2">
        Get access to our Hotel Collection
      </Typography>
      <CollectionCard />
    </Box>
  );
}
