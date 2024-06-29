"use client"

import { useState, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from '@/app/context/contexts';


interface PropsInput {
    swapFilterCountries: (value: string) => void
    filter: string;
    regions: any | undefined,
    search?:(e:string)=> void
    value:string,
    setSearchTerm: (value: string) => void;

}




const Input = ({swapFilterCountries, filter, regions, setSearchTerm,value}: PropsInput) => {

function swapFilter(e: string){
    swapFilterCountries(e)
}

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <div className={`p-10 flex justify-between container mx-auto items-center ${theme==='dark'?'bg-gray-800 text-white':null}`}>
            
            <IoSearch className=" absolute text-gray-400 ml-7 text-xl " />
            <input value={value} onChange={e=>setSearchTerm(e.target.value)} type="text" placeholder='Search for a country...' className={`py-4 px-24 shadow-md rounded text-sm outline-none ${theme==='dark'?'bg-gray-700 text-white':null}`} />
        
            {/* --------------------------------------- */}
            <select
                    className={`ml-auto my-2  p-3 shadow-md rounded cursor-pointer text-sm outline-none   ${theme==='dark'?'bg-gray-700 text-white':null}`}
                    name="Fill"
                    value={filter}
                    onChange={(e) => swapFilter(e.target.value)}
                >
                    <option value="all">Filter by Region</option>
                    {regions?.map((region: any, index: number) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                        ))}
                   
                </select>
           
        </div>
    )
}
export default Input
