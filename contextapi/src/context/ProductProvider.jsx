import React, { useEffect, useState } from 'react'
import { productContext } from './productContext'
const ProductProvider = ({children}) => {
    const [data,setdata] = useState([])
    async function fetchData(){
        try{
            const response =await fetch("https://fakestoreapi.com/products/")
            const output =await response.json()
            setdata(output)
        }catch{
            console.log("fetch unsucessful")
        }
    }
    useEffect(()=>{
        fetchData()
    },[data])
  return (
    <productContext.Provider value={{data}}>
        {children}
    </productContext.Provider>
  )
}

export default ProductProvider