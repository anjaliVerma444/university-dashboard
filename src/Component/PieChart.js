import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UniversityData from './UniversityData';

function PieGraph() {
  const navigate = useNavigate();
  const countryCounts = UniversityData();
  const handleBack = () => {
    navigate("/");
  };

  const calculatePercentage = (counts) => {
    const total = Object.values(counts).reduce((acc, count) => acc + count, 0);
    return Object.entries(counts).map(([state, count]) => ({
      id: state,
      label: state,
      value: (count / total) * 100,
    }));
  };

  const handleDownload = () => {
    const dataString = JSON.stringify(countryCounts);
    const blob = new Blob([dataString], { type: 'application/json' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bar-Graph.pdf';
    document.body.appendChild(link);

    link.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Button onClick={handleBack} variant='contained' style={{ display: 'flex', justifyContent: 'flex-start',margin:'2%' }}>Back</Button>
      <Typography variant='h3'>University Pie Chart showing states %</Typography>
      {Object.entries(countryCounts).map(([country, states]) => (
        <div key={country}>
          <Typography variant="h5">{country}</Typography>
          <PieChart
            series={[
              {
                data: calculatePercentage(states),
              },
            ]}
            width={400}
            height={300}
          />
        </div>
      ))}
      <Button onClick={handleDownload} variant="contained" color="primary">Download Pie Chart PDF</Button>
    </Box>
  );
}

export default PieGraph;
