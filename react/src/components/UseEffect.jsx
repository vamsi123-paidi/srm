import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [other,setOther] = useState(0)
    useEffect(()=>{
        console.log('useEffect redered')
    },[count])
  return (
    <div>
        hello{count},{other} 
        <button onClick={()=>setCount(count+1)}>
            increment
        </button>
        <button onClick={()=>setOther(other+1)}>
            other
        </button>
    </div>
  )
}

export default UseEffect