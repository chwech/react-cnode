import React from 'react';
import ReactDOM from 'react-dom';

// 定义组件(函数式)
// function Clock(props) {
//   return (
//     <div>
//       <h1>chwech, hello world</h1>
//       <h2>{props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)

// 定义组件（类）
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // 挂载
  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    )
  }
  // 卸载
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  tick() {
    // 更新组件局部状态
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>chwech, hello world</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)