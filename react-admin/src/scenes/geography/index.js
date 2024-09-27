import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";

export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="this is a simple map"></Header>
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeographyChart></GeographyChart>
      </Box>
    </Box>
  );
}
