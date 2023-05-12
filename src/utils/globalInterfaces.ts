export interface ICountryData {
    region: string;
    name: {
      common: string;
    };
    population: number;
    area: number;
    flag: string;
    cca3: string;
    [key: string]: any;
  }