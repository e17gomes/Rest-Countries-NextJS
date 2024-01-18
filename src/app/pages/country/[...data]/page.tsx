'use client'
import Header from "@/app/components/Header";
import { useEffect, useState, useContext } from "react";
import { CountryPage } from '@/app/types/CountryPage';
import { api } from "@/app/api";
import SingleCountry from "@/app/components/SingleCountry";
import { ThemeContext } from '@/app/context/contexts';


interface CountryPageProps {
  params: {
    data: string[]
  }
}

export default function CountryPage({params}: CountryPageProps) {
  const [name, code] = params.data
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryPage[]>([]);

  useEffect(
    ()=>{name?getCountry(name):getCountry(code)}

    
  ,[name, code])
  
 
  const getCountry = async (params:string|string[]) => {
    setLoading(true)
    
    let country 

    if (code) {
      country = await api.getCountryByCode(code as string);
    } else if (name) {
      console.log(code)
      country = await api.getCountry(name);
    }
    setCountry(country)
    setLoading(false)
  }


  return (
    <div className={` ${theme==='dark'?'bg-gray-800 text-white':null}`}>
      <Header />
      {!loading && country.map((item, index) => (
  <SingleCountry
  key={index}
  flags={item.flags}
  name={item.name}
  population={item.population}
  region={item.region}
  subregion={item.subregion}
  capital={item.capital}
  tld={item.tld}
  languages={item.languages}
  borders={item.borders}
  currencies={item.currencies}
  code={item.code}
    
  />
))}
     
    </div>
  );
}