'use client'
import { useContext } from "react";
import { ThemeContext } from "../context/contexts";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    const year =new Date()
    const currentYear = year.getFullYear()
  return (
    <footer className={`${theme==='dark'?' bg-gray-800 border-gray-600  text-white':null}  border-t text-center`} >
    <div className="container text-center px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    © {currentYear}  Maded by Eduardo Gomes
    </div>
  </footer>
  )
}

export default Footer
