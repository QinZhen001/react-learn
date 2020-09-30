import React, { Component, useState } from "react";
import Meno from "./components/Memo";

export default function Day3() {
  const [value, setValue] = useState(0);
  const [other, setOther] = useState( {
    aaa:"aaa",
    bbb:"bbb",
    ccc:"ccc"
  })


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

  return (
    <div>
      <button onClick={click1}>触发 Meno组件 render</button>
      {/* <button onClick={click2}>Meno组件不render</button> */}
      <Meno value={value} name={'asdad'} other={other}></Meno>
    </div>
  );
}
