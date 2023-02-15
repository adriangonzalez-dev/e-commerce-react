import React,{createContext, useState} from 'react';

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState(false);
    const light={
      color1:'#E9F8F9',
      color2:'#C0EEF2',
      color3:'#537FE7',
      color4:'#181823',
    }
    const dark={
      color1:'#332C39',
      color2:'#C92C6D',
      color3:'#609EA2',
      color4:'#F0EEED',
    }

    const theme = {
      color: !mode ? light.color4 : dark.color4,
      backgroundColor: !mode ? light.color1 : dark.color1,
      transition: 'all 200ms ease'
    }

    const themeSection = {
      color: !mode ? light.color4 : dark.color4,
      backgroundColor: !mode ? light.color3 : dark.color3,
      transition: 'all 200ms ease'
    }

    const darkModeFunction = () => {
      setMode(!mode);
    }

  return (
    <ThemeContext.Provider value={{darkModeFunction,  mode, theme, themeSection}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
