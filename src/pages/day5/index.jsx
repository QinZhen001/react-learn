import React from 'react'
import ComA from './components/ComA'
import ComB from './components/ComB'
import ComC from './components/ComC'

// export default class Day5 extends React.Component{
//   constructor(props) {
//     super(props)
//     this.state = {
//       inputValue: '',
//     }
//   }
//   handerChange = (e) => this.setState({ inputValue: e.target.value })
//   render() {
//     const { inputValue } = this.state
//     return (
//       <div>
//         {/*  我们增加三个子组件 */}
//         <ComA />
//         <ComB />
//         <ComC />
//         <div className="box">
//           <input value={inputValue} onChange={(e) => this.handerChange(e)} />
//         </div>
//         {/* 我们首先来一个列表循环 */}
//         {new Array(10).fill(0).map((item, index) => {
//           console.log('列表循环了')
//           return <div key={index}>{item}</div>
//         })}
//         {/* 这里可能是更复杂的结构 */
//         /* ------------------ */}

//         <p></p>
//       </div>
//     )
//   }
// }

// 浅比较  并不会触发console
class Text extends React.PureComponent {
  render() {
    console.log(this.props)
    return <div>hello,wrold</div>
  }
}

// 理解PureComponent
export default class Day5 extends React.Component {
  state = {
    data: { a: 1, b: 2 },
  }
  handerClick = () => {
    const { data } = this.state
    data.a++
    this.setState({ data })
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <button onClick={this.handerClick}>点击</button>
        {/* 不会触发Text的render */}
        <Text data={data} />
         {/* 会触发Text的render */}
         {/* <Text data={{ ...data }} /> */}
      </div>
    )
  }
}
