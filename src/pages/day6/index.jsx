import React from 'react'
let num = 0

export default class Day6 extends React.Component {
  state = {
    list: new Array(9999).fill(0).map(() => {
      num++
      return num
    }),
    scorllBoxHeight: 500 /* 容器高度(初始化高度) */,
    renderList: [] /* 渲染列表 */,
    itemHeight: 60 /* 每一个列表高度 */,
    bufferCount: 8 /* 缓冲个数 上下四个 */,
    renderCount: 0 /* 渲染数量 */,
    start: 0 /* 起始索引 */,
    end: 0 /* 终止索引 */,
  }

  listBox = null
  scrollBox = null
  scrollContent = null

  componentDidMount() {
    const { itemHeight, bufferCount } = this.state
    /* 计算容器高度 */
  }

  render() {
    console.log("render")
    const { list, scorllBoxHeight, itemHeight ,start ,end } = this.state
    const renderList = list.slice(start,end)
    
    return <div className="list_box" 
                ref={(node) => this.scrollBox = node}
            > 
              <div></div>
            </div>
  }
}
