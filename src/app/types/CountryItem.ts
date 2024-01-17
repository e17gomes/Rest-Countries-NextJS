export interface Countryitem {
    name: {
        common: string;
        official: string;
      };
    population: number;
    region: string;
    capital: string;
    flag?:string;
    flags?:{png:string, svg:string};
    };
    