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


function muFunc(maybeString:string | undefined | null){
  const onlyString:string = maybeString!
}





let xxxx!:number
initialize()
console.log(2 * xxxx)
function initialize(){
  xxxx = 10
}



// ----------------------------------------------------------------------


interface TState {
  name:string,
  age:number,
  like: string[]
}

interface TSingleState extends Pick<TState,'name' | 'age'>{

}

const obj:TSingleState = {
  name:"asd",
  age:123
}


// ----------------------------------------------------------------------



// function loggingIdentity<T>(arg:T):T{
//   // Property 'length' does not exist on type 'T'.ts(2339)
//   console.log(arg.length)
//   return arg
// }


interface Lengthwise  {
  length:number 
}

function loggingIdentity<T extends Lengthwise>(arg:T):T{
  console.log(arg.length)
  return arg
}


// loggingIdentity(3)
loggingIdentity({
  val:3,
  length:10
})


// start => children4 => children2 => 3 = children5 => children7 => > 6


type Pick<T,K extends keyof T> = {
  [key in K]:T[key]
}










