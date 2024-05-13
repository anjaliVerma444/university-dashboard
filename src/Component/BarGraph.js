import React, { useRef } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UniversityData from "./UniversityData";

function BarGraph() {
  const navigate = useNavigate();
  const countryData = UniversityData();
  const chartRef = useRef(null);

  const handleDownload = () => {
    const dataString = JSON.stringify(countryData);
    const blob = new Blob([dataString], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Bar-Graph.pdf";
    document.body.appendChild(link);

    link.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  const countries = Object.keys(countryData);
  const xAxisData = countries;
  const seriesData = [
    {
      data: countries.map((country) =>
        Object.values(countryData[country]).reduce((acc, curr) => acc + curr, 0)
      ),
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Box>
      <Button
        onClick={handleBack}
        variant="contained"
        style={{ display: "flex", justifyContent: "flex-start", margin: "2%" }}
      >
        Back
      </Button>
      <Typography variant="h3">University BarGraph</Typography>
      <BarChart
        ref={chartRef}
        xAxis={[{ scaleType: "band", data: xAxisData }]}
        series={seriesData}
        width={800}
        height={600}
        alt="University Bar Chart"
      />
      <Button onClick={handleDownload} variant="contained" color="primary">
        Download Bar Chart PDF
      </Button>
    </Box>
  );
}

export default BarGraph;
