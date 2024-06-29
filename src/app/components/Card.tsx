'use client'
import React, { useEffect, useState, useContext } from "react";
import { api } from "../api";
import { CountriesCard } from "../types/CountriesCard";
import { CountryItem } from "./CountryItem";
import Input from "./SearchBar";
import { CountryData } from "../types/CountriesData";
import { ThemeContext } from '@/app/context/contexts';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


const CardCountry = () => {
  const [countries, setCountries] = useState<CountriesCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [countriesFilter, setCountriesFilter] = useState<CountriesCard[]>([]);
  const [region, setRegion] = useState<string>('all');
  const [regions, setRegions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8); // Define quantos itens por página

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

  // Atualiza a lista filtrada quando o searchTerm ou region mudam
  useEffect(() => {
    const filteredCountries = countries.filter(country => {
      const lowerCountryName = country.name.common.toLowerCase();
      const lowerSearch = searchTerm.toLowerCase();
      const isInRegion = region === 'all' || country.region.toLowerCase() === region.toLowerCase();
      return lowerCountryName.includes(lowerSearch) && isInRegion;
    });
    setCountriesFilter(filteredCountries);
  }, [countries, searchTerm, region]);

  // Lógica para paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countriesFilter.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(countriesFilter.length / itemsPerPage);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleFilter = (value: string) => {
    const countriesFiltered = countries.filter((country) => {
      return country.region.toLowerCase().includes(value.toLowerCase());
    });

    setRegion(value);
    setCountriesFilter(countriesFiltered);
    setCurrentPage(1); // Reseta para a primeira página ao filtrar
  };

  return (
    <div className={` ${theme === 'dark' ? 'bg-gray-800 text-white' : null} min-h-screen `}>
      <Input value={searchTerm} setSearchTerm={setSearchTerm} swapFilterCountries={handleFilter} filter={region} regions={regions} />

      <div className="grid m-auto w-fit gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-7">
        {loading && <p>Loading...</p>}

        {!loading && currentItems.map((item, index) => (
          <CountryItem
            key={index}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flag={item.flags.png}
          />
          
        )) }
      </div>
      {!loading && <article className="p-2">      
         {/* Componente para exibir os botões de paginação */}
    
    <section className={` flex gap-5  ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-neutral-200'} m-auto w-fit rounded-full items-center select-none`}>
    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage===1} className="p-2 px-4 rounded-full transition-colors ease-in-out active:bg-black"><BsArrowLeft/></button>
          <p className="min-w-4 text-center">{currentPage}</p>
    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="active:bg-black p-2 px-4 rounded-full transition-colors ease-in-out"><BsArrowRight/></button>
  
    </section>
    </article>}  

          
      
    </div>
  );
};

export default CardCountry;
