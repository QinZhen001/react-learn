import React, { useState, useEffect } from 'react'


export default function () {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(count +1)
    },1000)
    return () => clearInterval(id)
  },[count])


  return (
    <div>
      {count}
    </div>
  )
}
