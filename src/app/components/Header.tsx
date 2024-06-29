'use client'
import React, { useContext } from "react"
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { ThemeContext } from '@/app/context/contexts';
function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  
  

  return (

    <div className={`items-center shadow-md p-4 ${theme==='dark'?'bg-gray-700 border-b border-b-slate-600 text-white':null} `}>
      
      <header className={`md:flex justify-between container mx-auto py-4 items-center sm:flex flex row `} >
        <h1 className={`text-2xl font-bold `}>Where in the world?</h1>
        {theme==='dark'?<p onClick={toggleTheme} className="font-semibold items-center inline-block cursor-pointer"><IoSunny className="mr-2 inline-block" />  </p>:<p onClick={toggleTheme} className="font-semibold items-center inline-block cursor-pointer"><IoMoonOutline className="mr-2 inline-block" /> </p>}
      </header>

    </div>

  )
}
export default Header