import Navbar from "@/components/Navbar"
import React from  "react"
import Footer from "@/components/Footer" 



const layout = ({children}:{children:React.ReactNode}) =>{
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default layout