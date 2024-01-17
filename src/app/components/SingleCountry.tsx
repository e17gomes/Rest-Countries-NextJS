import Link from "next/link";
import { CountryPage } from "../types/CountryPage";
import { BsArrowLeft } from "react-icons/bs";
export default function SingleCountry({ languages, flags, name, population, region, capital, tld, subregion, borders, currencies }: CountryPage) {
    const native = name.nativeName[Object.keys(name.nativeName)[0]]
    const currencie = currencies[Object.keys(currencies)[0]]
    return (
        <div className="m-10">
           <div className='shadow-md w-fit '>
           <Link href='/' className="flex items-center p-2 m-10 rounded"> <BsArrowLeft/> Back</Link>
            </div> 
<section className="grid grid-cols-2 ">
            <img src={flags.svg} alt={`Bandeira de ${name.common}`} width={700} />
          
        <div className="flex flex-col justify-center m-5">
            <h2 className="text-2xl font-bold">{name.common}</h2>
            <div className="grid grid-cols-2 ">
            <p className="my-1"><span className="font-semibold">Native Name: </span>{native.official}</p>
            <p className="my-1"><span className="font-semibold">Top Level Domain: </span>{tld[0]}</p>
            
            <p className="my-1"><span className="font-semibold">Population: </span>{population}</p>
            <p className="my-1"><span className="font-semibold">Subregion: </span>{subregion}</p>
            <p className="my-1"><span className="font-semibold">Currencies: </span>{currencie.name}</p>
            
            <p className="my-1"><span className="font-semibold">Region: </span>{region}</p>
            <p className="my-1"><span className="font-semibold"> Languages: </span> {Object.values(languages).join(", ")}</p>
            <p className="my-1"><span className="font-semibold">Capital: </span>{capital}</p>
            </div>
            {borders && borders.length > 0 ? (
                <div className="mt-5 font-semibold grid grid-cols-4 gap-[5px]  ">
                    <p>Border Countries: </p>
                    {borders.map((code, index) => (
                        <Link href={`/pages/${code}`} key={index}>
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
