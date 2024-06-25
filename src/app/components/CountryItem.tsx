import Link from "next/link";
import { Countryitem } from "../types/CountryItem";
import { ThemeContext } from '@/app/context/contexts';
import { useContext } from "react";
import Image from "next/image";



export const CountryItem = ({ name, population, region, capital, flag }: Countryitem) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
  <div className={`w-72 `}>
    <Link href={`pages/country/${name.common}`}>

      <div className={` overflow-hidden bg-gray-100 rounded  shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 ${theme==='dark'?'bg-gray-700 text-white':null}`}>
        <div className="w-full ">
        <Image
          className="rounded-sm h-[150px] w-full "
          src={`${flag}`}
          alt={`Bandeira de ${name}`}
          width={150}
        height={150}
        />
        </div>
        <section className="m-5">
          <p className="text-lg font-semibold text-md pb-3 line-clamp-1">
          {name.common}          </p>
          <p className="font-semibold text-sm">Population: <span className="font-normal">{population}</span></p>
          <p className="font-semibold text-sm">Region: <span className="font-normal">{region}</span></p>
          <p className="font-semibold text-sm ">Capital: <span className="font-normal">{capital}</span></p>
        </section>
      </div>
    </Link>
  </div>
  );
};
