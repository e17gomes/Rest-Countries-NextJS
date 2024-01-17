import React from "react"
import { IoMoonOutline } from "react-icons/io5";
import Input from './SearchBar'
function Header() {
const darkmode = ()=>{
  document.body
}

  return (
 
    <div className="items-center shadow-md  py-4 ">
      <header className="md:flex justify-between container mx-auto py-4 items-center sm:grid p-10">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <p className="font-semibold items-center flex cursor-pointer"><IoMoonOutline className="mr-2" /> Dark Mode</p>
      </header>
      
      </div>
   
  )
}
export default Header