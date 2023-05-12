import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { ICountryData } from '../utils/globalInterfaces';

const useCountriesList = (): [ICountryData[],Dispatch<SetStateAction<ICountryData[]>>] => {
  const [countriesList, setCountriesList] = useState<ICountryData[]>([]);

  useEffect(() => {
    const fetchCountriesList = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const limitedData = data.slice(0, 40); // Couldn't find in API endpoint to return first 40
        setCountriesList(limitedData);
      } catch (error) {
        console.error('Error fetching countries list:', error);
      }
    };

    fetchCountriesList();
  }, []);

  return [countriesList, setCountriesList];
};

export default useCountriesList;
