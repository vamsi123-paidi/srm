import React, { useState } from 'react'

const InputExe = () => {
    const [input,setInput] = useState('')
  return (
    <div>
        <h1>{input}</h1>
        <input type="text"  placeholder='enter to print below...' onInput={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default InputExe