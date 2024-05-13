import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const countries = ['India', 'USA', 'UK', 'Australia', 'Canada'];

function CountrySelect({ selectedCountry, onCountryChange }) {
  return (
    <FormControl variant="outlined" style={{width:'20%'}}>
      <InputLabel id="country-select-label">Select Country</InputLabel>
      <Select
      
        labelId="country-select-label"
        id="country-select"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        label="Select Country"
      >
        {countries.map(country => (
          <MenuItem key={country} value={country}>{country}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountrySelect;
