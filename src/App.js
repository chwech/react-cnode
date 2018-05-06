import React, { Component } from 'react';
import './App.css';
import Content from './content'
import Header from './header'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id="main">
          <div id="sidebar">
            <div className="panel">
              <div className="inner">
                <p>CNode：Node.js专业中文社区</p>
                <div>
                  您可以
                  <a href="/signin">登录</a>
                  或
                  <a href="/signup">注册</a>
                  , 也可以
                  <a href="/auth/github">
                    <span className="span-info">
                      通过 GitHub 登录
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
