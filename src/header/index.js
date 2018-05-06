import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <div className="container">
            <a className="brand" href="/">
              <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
            </a>

            <form id="search_form" className="navbar-search" action="/search">
              <input type="text" id="q" name="q" className="search-query span3" value="" />
            </form>
            <ul className="nav pull-right">
              <li><a href="/">首页</a></li>
              
              <li>
                  <a href="/my/messages">
                    
                    未读消息
                  </a>
              </li>
              
              <li><a href="/getstart">新手入门</a></li>
              <li><a href="/api">API</a></li>
              
              <li><a href="/about" target="">关于</a></li>
              
              
              <li><a href="/setting">设置</a></li>
              <li>
                <a href="/signout" data-method="post" rel="nofollow">退出</a>
              </li>
              
            </ul>
            <a className="btn btn-navbar" id="responsive-sidebar-trigger">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header