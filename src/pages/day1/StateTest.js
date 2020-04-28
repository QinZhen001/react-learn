import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(), 
      counter: 1 
    };
    // this.changeCounter = this.changeCounter.bind(this)
  }


  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ 
        date: new Date(), 
        counter: 1 
      });
    }, 1000);

    // 批量操作：对同一个key多次操作会合并，会执行最后一次
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log("cb" + this.state.counter); // 2
    });

    console.log(this.state.counter); // 1

    this.setState((prev) => {
      console.log("prev", prev.counter); // 2
      return prev.counter;
    });

    setTimeout(() => {
      console.log("setTimeout", this.state.counter); // 2
    }, 0);

    document.body.addEventListener("click", this.changeCounter);
  }

  changeCounter(){
    console.log(this)
    debugger
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("changeCounter", this.state.counter); // 3
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default class SatateTest extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}
