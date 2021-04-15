import React from 'react'
import FlipDown from './component/FlipDown'

const props = {
  timeUnit:[],
  theme:1,
  type:4,
  endDate:0
}

const Day11 = () => {
  return <div>
    <FlipDown {...props}></FlipDown>
  </div>
};

export default Day11;

