'use client'
import { ThemeProvider } from "../context/contexts";


export const Providers = ({children}:{children:React.ReactNode})=>{
    return(
        <>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </>
    )
}

