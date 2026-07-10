import React, { useState } from 'react'
import '../App.css'
const Toggle = () => {
    const [theme,setTheme] = useState("light")
    const ToggleTheme = ()=>{
        setTheme(theme==="light"?"dark":"light")
    }
  return (
    <div className={theme}>
        <h1 className={theme}>{theme}</h1>
        <button onClick={ToggleTheme}>change to {theme==="light"?"dark":"light"}</button>
    </div>
  )
}

export default Toggle