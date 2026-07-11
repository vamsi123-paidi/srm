import React, { useState } from 'react'
import { themeContext } from './themeContext'
const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light")
  return (
    <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider