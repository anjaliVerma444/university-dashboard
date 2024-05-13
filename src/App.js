import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UniversityComponent from './Component/UniversityComponent';
import BarGraph from './Component/BarGraph';
import { Box } from '@mui/material';
import "./App.css";
import PieGraph from './Component/PieChart';


function App() {
  return (
    <Box className="App">
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<UniversityComponent/>} />
          <Route path="/bar-chart" element={<BarGraph />} />
          <Route path="/pie-chart" element={<PieGraph/>} />
        </Routes>
    
    </BrowserRouter>
    </Box>
  );
}

export default App;

