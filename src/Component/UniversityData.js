import { useState, useEffect } from 'react';
import axios from 'axios';

const UniversityData = () => {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchUniversityData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/universities');
        const universities = response.data;
        const data = processData(universities);
        setCountryData(data);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversityData();
  }, []);

  const processData = (universities) => {
    const data = {};
    universities.forEach((university) => {
      const { country, state } = university;
      if (!data[country]) {
        data[country] = {};
      }
      data[country][state] = (data[country][state] || 0) + 1;
    });
    return data;
  };

  return countryData;
};

export default UniversityData;
