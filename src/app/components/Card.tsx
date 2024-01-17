// Importa as dependências necessárias do React e outros módulos personalizados
'use client'
import { useEffect, useState } from "react"
import { api } from "../api"
import { CountriesCard } from "../types/CountriesCard"
import { CountryItem } from "./CountryItem"
import Input from "./SearchBar"
import { CountryData } from "../types/CountriesData"


// Define o componente funcional 'CardCountry'
const CardCountry = () => {
  // Estados do componente para armazenar dados e controlar o estado de carregamento
  const [countries, setCountries] = useState<CountriesCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [countriesFilter, setCountriesFilter] = useState<CountriesCard[]>()
  const [region, setRegion] = useState<string>('all')
  const [regions, setRegions] = useState<string[]>()

  // Efeito colateral que é executado após o componente ser montado
  useEffect(() => {
    // Função assíncrona que busca os dados dos países da API
    const getAllCountries = async () => {
      try {
        const countriesData = await api.getCountries();
        // Atualiza o estado 'countries' com os dados obtidos
        setCountries(countriesData);
       // Inicializa um array vazio para armazenar regiões únicas
const uniqueRegions: string[] = [];

// Itera sobre os países para extrair as regiões
countriesData.forEach((element: CountryData) => {
  // Verifica se a região já está no array de regiões únicas
  if (!uniqueRegions.includes(element.region)) {
    // Adiciona a região ao array de regiões únicas se não estiver presente
    uniqueRegions.push(element.region);
  }
});

// Atualiza o estado 'regions' com o array de regiões únicas
setRegions(uniqueRegions);
      } catch (error) {
        // Registra um erro caso haja problemas ao buscar os dados
        console.error("Error fetching countries:", error);
      } finally {
        // Define 'loading' como falso para indicar que a busca foi concluída
        setLoading(false);
      }
    };

    // Chama a função para obter os dados dos países ao montar o componente
    getAllCountries();
  }, []);

  // Função para lidar com a filtragem dos países com base na região
  const handleFilter = (value: string) => {
    // Filtra os países com base na região fornecida
    const countriesFiltered = countries.filter((country) => {
      // Converte os valores para minúsculas e verifica se a região inclui o valor da entrada do usuário
      return country.region.toLowerCase().includes(value.toLowerCase());
    })

    // Atualiza os estados 'region' e 'countriesFilter' com os resultados da filtragem
    setRegion(value)
    setCountriesFilter(countriesFiltered)
  }

  // Renderização do componente
  return (
    <div className=" px-10 ">
      {/* Renderiza o componente 'Input' e passa a função de filtragem 'handleFilter' como propriedade */}
      <Input swapFilterCountries={handleFilter} filter={region} regions={regions}/>

      {/* Renderiza a lista de países em uma grade responsiva */}
      <div className=" grid gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Exibe mensagem de carregamento se 'loading' for verdadeiro */}
        {loading && <p>Loading...</p>}

        
        {/* Renderiza os itens da lista de países com base nas condições especificadas */}
        
        {!loading &&
        region === 'all' ? (countries.map((item, index) => (
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

// Exporta o componente 'CardCountry' como o componente padrão
export default CardCountry;