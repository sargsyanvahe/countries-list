import { ICountryData } from "../../utils/globalInterfaces";
import { CountryItem } from "../CountryItem/CountryItem";

import './Countries.scss'

interface ICountriesProps {
  countriesList: ICountryData[];
}

export function Countries({ countriesList }: ICountriesProps) {
  if (!countriesList) {
    return <div>Loading...</div>;
  }

  return (
    <table className="countries-table">
      <thead className="countries-table__head">
        <tr>
          <th>COUNTRY</th>
          <th>REGION</th>
          <th>POPULATION (2023)</th>
          <th>AREA</th>
          <th>FLAG</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {countriesList.map((c) => (
          <CountryItem key={c.cca3} countryData={c} />
        ))}
      </tbody>
    </table>
  );
}
