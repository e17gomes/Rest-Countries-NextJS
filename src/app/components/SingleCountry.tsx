'use client'
import Link from "next/link";
import { CountryPage } from "../types/CountryPage";
import { BsArrowLeft } from "react-icons/bs";
import { ThemeContext } from "../context/contexts";
import { useContext } from "react";
import Image from "next/image";



export default function SingleCountry({ languages, flags, name, population, region, capital, tld, subregion, borders, currencies, code }: CountryPage) {
    const native = name.nativeName[Object.keys(name.nativeName)[0]]
    const currencie = currencies[Object.keys(currencies)[0]]
    const { theme } = useContext(ThemeContext);
    return (
    
        <div className={`  h-screen ${theme==='dark'?' bg-gray-800  text-white':null} py-2`}>
           <div className=' w-fit '>
           <Link href='/' className="shadow-gray-800 shadow border border-gray-600 flex items-center px-6 py-3  ml-10 rounded "> <BsArrowLeft/> </Link>
            </div> 
<section className="grid sm:grid-cols-1 mx-10 m-5 md:grid-cols-2">
            <Image src={flags.svg} alt={`Bandeira de ${name.common}`} width={700} height={600} />
          
        <div className="flex flex-col justify-center mt-5  ">
            <h2 className="text-2xl font-bold mb-5">{name.common}</h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 ">
            <p className="my-1"><span className="font-semibold">Native Name: </span>{native.official}</p>
            <p className="my-1"><span className="font-semibold">Population: </span>{population}</p>
            <p className="my-1"><span className="font-semibold">Region: </span>{region}</p>
            
            <p className="my-1"><span className="font-semibold">Subregion: </span>{subregion}</p>
            <p className="my-1"><span className="font-semibold">Capital: </span>{capital}</p>
            
            <p className="my-1"><span className="font-semibold  ">Top Level Domain: </span>{tld[0]}</p>
            
            <p className="my-1"><span className="font-semibold">Currencies: </span>{currencie.name}</p>
            <p className="my-1"><span className="font-semibold"> Languages: </span> {Object.values(languages).join(", ")}</p>
            </div>
            {borders && borders.length > 0 ? (
                <div className="mt-5 font-semibold  grid grid-cols-5">
                    <p className="col-span-5 mb-5">Border Countries: </p>
                    {borders.map((code, index) => (
  <Link href={`/pages/country/${name.common}/${code}`} key={index}>
      <p className="ml-5 shadow-md px-1 py-1 rounded flex justify-center items-center cursor-pointer text-sm">{code}</p>
  </Link>
))}

                </div>
            ) : (
                <p>No border countries available.</p>
            )}
        </div>
</section>            
        </div>
    );
}
