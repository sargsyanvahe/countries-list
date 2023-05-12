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

  return (
    <tr className="country-item">
      <td>{common}</td>
      <td>{region}</td>
      <td>{population}</td>
      <td>{area}</td>
      <td>{flag}</td>
      <td>
        <div onClick={() => onDeleteCountry(cca3)} className="country-item__delete-btn">
    
        </div>
      </td>
    </tr>
  );
}
