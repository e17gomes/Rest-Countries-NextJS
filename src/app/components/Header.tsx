'use client'
import React, { useContext } from "react"
import { IoMoon } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from '@/app/context/contexts';
function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  
  

  return (

    <div className={`items-center shadow-md py-4 ${theme==='dark'?'bg-gray-700 text-white':null} `}>
      
      <header className={`md:flex justify-between container mx-auto py-4 items-center sm:flex flex row `} >
        <h1 className={`text-2xl font-bold `}>Where in the world?</h1>
        {theme==='dark'?<p onClick={toggleTheme} className="font-semibold items-center inline-block cursor-pointer"><IoMoon className="mr-2 inline-block" /> Dark Mode </p>:<p onClick={toggleTheme} className="font-semibold items-center inline-block cursor-pointer"><IoMoonOutline className="mr-2 inline-block" /> Dark Mode </p>}
      </header>

    </div>

  )
}
export default Header