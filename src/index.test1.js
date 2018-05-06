import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: 'chwech'
}
// 在jsx中使用js表达式, 表达式需在大括号内
const element = (
  <h1>hello, {user.firstName}</h1>
)

// jsx本身其实也是一种表达式
// jsx就是js对象

function greet(user) {
  if (user) {
    return (<h1>hello, {user.firstName}, {new Date().toLocaleTimeString()}</h1>)
  }
}

function tick(){
  const element1 = greet(user)
  ReactDOM.render(element1, document.getElementById('root'));
}

setInterval(tick, 1000)

// 组件
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}






