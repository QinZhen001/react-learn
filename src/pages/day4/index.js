import React, { Component, useState,createRef  } from "react";
import Meno from "./components/Memo";
import Ref from './components/Ref'
import './index.css'

const req = require.context('./components',true)
console.log('req',req)
const keys =  req.keys()

console.log('req.id',req.id)
console.log('keys',keys)
const item =  req(keys[1])
console.log('item',item)

const resolve = req.resolve(keys[1])
console.log('resolve',resolve)


export default function Day3() {
  const [value, setValue] = useState(0);
  const [other, setOther] = useState( {
    aaa:"aaa",
    bbb:"bbb",
    ccc:"ccc"
  })
  // const [ref,]
  const ref1 = createRef()

  function click1() {
    console.log("click", this);
    const newVal = value + 1;
    setValue(newVal);
  }

  function click2(){
    let newOther = {
      ...other,
      aaa:other.aaa + 's'}
    setOther(newOther)
  }

  function click3(){
    console.log('ref1',ref1)
  }

  return (
    <div>
      <button onClick={click1}>触发 Meno组件 render</button>
      {/* <button onClick={click2}>Meno组件不render</button> */}
      <Meno value={value} name={'asdad'} other={other}></Meno>
      <div className='divider'></div> 
      <Ref></Ref>
      <button onClick={click3} ref={ref1}>拿到ref</button>
    </div>
  );
}
