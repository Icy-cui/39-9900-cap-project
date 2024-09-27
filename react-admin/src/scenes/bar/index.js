import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

export default function index() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="simple bar chart"></Header>
      <Box height="75vh">
        <BarChart></BarChart>
      </Box>
    </Box>
  );
}
