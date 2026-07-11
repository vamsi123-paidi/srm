import React, { useContext } from 'react'
import { themeContext } from '../context/themeContext'

const NavbarComp = () => {
    const {theme,setTheme} = useContext(themeContext)
  return (
    <div>
        {theme} is form nav bar component
    </div>
  )
}

export default NavbarComp