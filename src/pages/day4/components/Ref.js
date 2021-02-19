import React, { useEffect } from "react";

import './style.css'

export default function Ref(props){
  const {title } = props
  return (
    <div className='wrapper'>
      {title?<div>我是title：{title}</div>:''}
      <span>
        ref
      </span>  
    </div>
  )
} 

// Ref.displayName = 'Ref'