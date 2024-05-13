import React, { useState, useEffect } from 'react';
import UniversityTables from './UniversityList';
import CountrySelect from './CountrySelect';
import axios from 'axios';
import { Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ButtonBox = styled(Box)({
  width:'15%',
  display:'flex',
  justifyContent:'space-between',
  padding:'1%',
  margin:'auto'
})

function UniversityComponent() {
  const [universities, setUniversities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('India');
  const navigate = useNavigate();


  useEffect(() => {
    fetchUniversities(selectedCountry);
  }, [selectedCountry]);

  const fetchUniversities = async (country) => {
    try {
      const response = await axios.get(`http://localhost:3001/universities?country=${country}`);
      const data = response?.data;
      setUniversities(data);
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleBarClick = () => {
    navigate("/bar-chart");
  };

  const handlepieClick = () => {
    navigate("/pie-chart");
  };

  return (
    <Box >
      <Typography variant='h3'>University Data</Typography>
      <Box style={{ margin: '1%' }}>
      <CountrySelect
          selectedCountry={selectedCountry}
          onCountryChange={handleCountryChange}
        />
        <ButtonBox>
          <Button variant='contained' onClick={handleBarClick}>BarGraph</Button>
          <Button variant='contained' onClick={handlepieClick}>PieChart</Button>
          </ButtonBox>
      </Box>
      <UniversityTables universities={universities} />
    </Box>
  );
}

export default UniversityComponent;
