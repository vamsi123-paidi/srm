import React, { useContext, useEffect } from 'react'
import { productContext } from '../context/productContext'
import '../App.css'
const Home = () => {
    const {data } = useContext(productContext)
    useEffect(()=>{
        console.log(data)
    },[])
  return (
    <div>
        {
            data.map((index)=>(
                <div className='container' key={index.id}>
                    <img src={index.image} alt={index.title} />
                    <h1>{index.title}</h1>
                    <h3>{index.price}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Home