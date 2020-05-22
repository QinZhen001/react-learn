import React, { useState, Component } from 'react';
import LikeButton from "./components/LikeButton"

interface IShowResult{
  message:string,
  status:string
}

interface IThemeProps {
  [key: string]:{color: string; background: string;}
}

// ----------------------


const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
     color: '#fff',
     background: '#222',
   }
}


export const ThemeContext = React.createContext(themes.light)


const TsTest: React.FC = () => {
  const [ show, setShow ] = useState(true)
  return (
    <div>
      <ThemeContext.Provider value={themes.dark}>
            123
      </ThemeContext.Provider>
    </div>
  )
}

export default TsTest


