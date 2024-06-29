'use client'
import { useContext } from "react";
import { ThemeContext } from "../context/contexts";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    const year =new Date()
    const currentYear = year.getFullYear()
  return (
    <footer className={`${theme==='dark'?' bg-gray-800  text-white':null}  border`} >
    <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    {currentYear} 
     
    </div>
  </footer>
  )
}

export default Footer
