export interface CountryPage {
    
    code?:string;
    cca3?:string
    name: {
        common: string;
        official:string;
        nativeName:{ [key: string]:{common:string, official:string}} 
        ;
    };
    population: number;
    region: string;
    subregion: string;
    capital: string;
    flags:{png:string, svg:string};
    tld: [string];
    currencies: { [key: string]:{name: string,symbol: string}};
    languages: {
        [key:string]:string;
    };
    borders: [string];
}
