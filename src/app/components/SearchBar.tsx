"use client"

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface PropsInput {
    swapFilterCountries: (value: string) => void
    filter: string
    regions: any | undefined
}


const Input = ({swapFilterCountries, filter, regions}: PropsInput) => {
    const [valueI, setValueI] = useState(null)
    const getVal = (e: any) => { setValueI(e.target.value) }

    function swapFilter(e: string){
        swapFilterCountries(e)
    }

  

    return (

        <div className="py-10 lg:flex justify-between container mx-auto items-center">
            
            <IoSearch className=" absolute text-gray-400 ml-7 text-xl " />
            <input type="text" placeholder='Search for a country...' className="py-4 px-24 shadow-md rounded text-sm outline-none" onChange={getVal} />
        
            {/* --------------------------------------- */}
            <select
                    className="ml-auto my-2 p-3 py-4 shadow-md rounded text-sm outline-none flex "
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
