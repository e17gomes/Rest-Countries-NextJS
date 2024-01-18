
'use client'
import { useEffect, useState, useContext } from "react"
import { api } from "../api"
import { CountriesCard } from "../types/CountriesCard"
import { CountryItem } from "./CountryItem"
import Input from "./SearchBar"
import { CountryData } from "../types/CountriesData"
import { ThemeContext } from '@/app/context/contexts';

const CardCountry = () => {

  const [countries, setCountries] = useState<CountriesCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [countriesFilter, setCountriesFilter] = useState<CountriesCard[]>()
  const [region, setRegion] = useState<string>('all')
  const [regions, setRegions] = useState<string[]>()
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    const getAllCountries = async () => {
      try {
        const countriesData = await api.getCountries();

        setCountries(countriesData);
      
        const uniqueRegions: string[] = [];

countriesData.forEach((element: CountryData) => {

  if (!uniqueRegions.includes(element.region)) {

    uniqueRegions.push(element.region);

  }
});

setRegions(uniqueRegions);
      } catch (error) {

        console.error("Error fetching countries:", error);
      } finally {

        setLoading(false);
      }
    };

    getAllCountries();
  }, []);


  const handleFilter = (value: string) => {

    const countriesFiltered = countries.filter((country) => {
      return country.region.toLowerCase().includes(value.toLowerCase());
    })

    setRegion(value)
    setCountriesFilter(countriesFiltered)
  }
const lowerSearch = searchTerm.toLocaleLowerCase()
  const nameCountries = countries.filter(country => country.name.common.toLowerCase().includes(lowerSearch))

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={` px-10 ${theme==='dark'?'bg-gray-800 text-white':null}`}>

      <Input value={searchTerm} setSearchTerm={setSearchTerm} swapFilterCountries={handleFilter} filter={region} regions={regions}/>

      <div className=" grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {loading && <p>Loading...</p>}

        
        
        {!loading &&
        region === 'all' ? (nameCountries.map((item, index) => (
          <CountryItem
            key={index}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flag={item.flags.png}
          />))) : (
        countriesFilter ? countriesFilter.map((item, index) => (
          <CountryItem
            key={index}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flag={item.flags.png}
          />
        )) :  countries.map((item, index) => (
            <CountryItem
              key={index}
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          )))}
          
      </div>
    </div>
  );
};

export default CardCountry;