import React, { useContext } from 'react'
import {themeContext} from '../context/themeContext'

const Toggle = () => {
    const {theme,setTheme} = useContext(themeContext)
    const handleClick = ()=>{
        setTheme(theme==="light"?"dark":"light")
    }
  return (
    <div>
        {theme}
        <button onClick={handleClick}>toggle the theme</button>
    </div>
  )
}

export default Toggle