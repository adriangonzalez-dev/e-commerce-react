import React,{useContext} from 'react'
import ThemeContext from '../context/themeProvider'

export const useTheme = () => {
  return useContext(ThemeContext)
}