import React, { useState, useEffect } from 'react'

function longResolve(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },5000)
  })
}


// 当我们点击多次Count按钮
// 观察console
// 输出 count 0 count 1 count 2 ......  
// useEffect 在创建时就已经捕获了count的值 (会创建一个闭包 每次都是当前的值)
export default function () {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    longResolve().then(()=>{
     console.log('count',count)
    })
  },[count])


  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Count: {count}
      </button>
    </div>
  )
}
