import { ChangeEvent } from "react";
import { regions, sortingValues } from "../../utils/constants";

import './Filter.scss'

interface IFilterProps {
  searchValue: string;
  onFilterChanges: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void;
}

export function Filter({
  searchValue,
  onFilterChanges,
}: IFilterProps): JSX.Element {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="filter__fields">
        <input name="search" placeholder='Search' value={searchValue} onChange={onFilterChanges} />
        <select onChange={onFilterChanges} name="region">
          <option value="">Region</option>
          {/* Used label instead of id's because id didn't exist in api data */}
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        <select onChange={onFilterChanges} name="sort">
          <option value="">Sort</option>
          {sortingValues.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
