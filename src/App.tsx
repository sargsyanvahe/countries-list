import { ChangeEvent, createContext, useMemo, useState } from "react";
import { Filter } from "./Components/Filter/Filter";
import { Countries } from "./Components/Countries/Countries";
import useCountriesList from "./hooks/useCountriesList";
import { ICountryData } from "./utils/globalInterfaces";

import "./App.scss";

export const CountryContext = createContext({
  onDeleteCountry: (cca3: string) => {},
});

function App(): JSX.Element {
  const [countriesList, setCountriesList] = useCountriesList();

  const [searchValue, setSearchValue] = useState<string>("");
  const [regionValue, setRegionValue] = useState<string>("");
  const [sortValue, setSortValue] = useState<string>("");

  const handleFilterChanges = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const map: {
      [key: string]: () => void
    } = {
      search: () => setSearchValue(e.target.value),
      sort: () => setSortValue(e.target.value),
      region: () => setRegionValue(e.target.value),
    }

    map[e.target.name]()

  };

  const handleDeleteCountry = (cca3: string) => {
    setCountriesList(state => state.filter((c) => c.cca3 !== cca3));
  };


  // In this case useMemo does not help, but assume if later will be added additional states it will prevent
  // from everytime execution cb function
  const updatedList = useMemo((): ICountryData[] => {
    let result = [...countriesList];

    if (regionValue) {
      result = result.filter((c) => c.region === regionValue);
    } else {
      result = [...countriesList];
    }

    if (searchValue) {
      result = result.filter((c) =>
        c.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (sortValue) {
      result = result.sort((a, b) => a[sortValue] - b[sortValue]);
    }

    return result;
  }, [regionValue, searchValue, countriesList, sortValue]);

  return (
    <div className="main-container">
      <Filter
        searchValue={searchValue}
        onFilterChanges={handleFilterChanges}
      />
      <CountryContext.Provider value={{ onDeleteCountry: handleDeleteCountry }}>
        <Countries countriesList={updatedList} />
      </CountryContext.Provider>
    </div>
  );
}

export default App;
