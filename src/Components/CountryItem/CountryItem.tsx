import { useContext } from "react";
import { ICountryData } from "../../utils/globalInterfaces";
import { CountryContext } from "../../App";

import './CountryItem.scss'

interface ICountryItemProps {
  countryData: ICountryData;
}

export function CountryItem({ countryData }: ICountryItemProps) {
  const { onDeleteCountry } = useContext(CountryContext);

  const {
    name: { common },
    region,
    population,
    area,
    flag,
    cca3,
  } = countryData;

  const formatArea = (area: number): string => {
    if (area < 1000000) {
      return area.toLocaleString();
    } else {
      const millionArea = (area / 1000000).toFixed(3);
      return millionArea.toLocaleString() + ' million';
    }
  };

  return (
    <tr className="country-item">
      <td>{common}</td>
      <td>{region}</td>
      <td>{population.toLocaleString()}</td>
      <td>{formatArea(area)} km<sup>2</sup></td>
      <td>{flag}</td>
      <td>
        <div onClick={() => onDeleteCountry(cca3)} className="country-item__delete-btn"/>
      </td>
    </tr>
  );
}
