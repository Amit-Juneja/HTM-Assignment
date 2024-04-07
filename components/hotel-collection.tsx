import { Box, TextField, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";
import CollectionCard from "./collection-card";

export default function HotelCollection() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };
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
      <TextField
        label="Search Hotels"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchInputChange}
        sx={{ margin:2, width: "80%" }}
      />
      <CollectionCard searchQuery={searchQuery}/>
    </Box>
  );
}
