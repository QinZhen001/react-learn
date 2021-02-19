import React, { Component, useState, createRef, Children } from 'react'
import Meno from './components/Memo'
import Ref from './components/Ref'
import { add } from './utils/index'
import './index.css'

// const req = require.context('./components',true)
// console.log('req',req)
// const keys =  req.keys()

// console.log('req.id',req.id)
// console.log('keys',keys)
// const item =  req(keys[1])
// console.log('item',item)

// const resolve = req.resolve(keys[1])
// console.log('resolve',resolve)



export default function Day4(props) {
  const { children } = props
  const [value, setValue] = useState(0)
  const [other, setOther] = useState({
    aaa: 'aaa',
    bbb: 'bbb',
    ccc: 'ccc',
  })
  // const [ref,]
  const ref1 = createRef()

  function click1() {
    console.log('click', this)
    const newVal = value + 1
    setValue(newVal)
  }

  function click2() {
    let newOther = {
      ...other,
      aaa: other.aaa + 's',
    }
    setOther(newOther)
  }

  function click3() {
    console.log('ref1', ref1)
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      console.log('### child.type.name', child.type.name)
      return child
    })
  }

  const multiSetState = () => {
    for (let i = 0; i < 500; i++) {
      setTimeout(() => {
        setValue(value + i)
      })
    }
  }

  return (
    <div>
      <button onClick={click1}>触发 Meno组件 render</button>
      {/* <button onClick={click2}>Meno组件不render</button> */}
      <Meno value={value} name={'asdad'} other={other}></Meno>
      <div className="divider"></div>
      <Ref></Ref>
      <button onClick={click3} ref={ref1}>
        拿到ref
      </button>
      <h3>渲染 children</h3>
      {renderChildren()}
      <button onClick={multiSetState} ref={ref1}>
        multiSetState 多次SetState
      </button>
    </div>
  )
}
