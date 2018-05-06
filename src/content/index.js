import React, { Component } from 'react'
import Topics from '../topics'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

class Content extends Component {
  render() {
    const tabMap = {
      all: '全部',
      good: '精华',
      share: '分享',
      ask: '问答',
      job: '招聘',
      dev: '客户端测试'
    }
    return (
      <div id="content">
        <Router>
          <div className="panel">
            <div className="header">
              {
                Object.keys(tabMap).map(tab => {
                  return <NavLink activeClassName="current-tab" to={`/${tab}`} className="topic-tab" key={tab}>{tabMap[tab]}</NavLink>
                })
              }
            </div>

            <div className="inner no-padding">
              {/* <Topics /> */}
              <Route exact path="/:tab" component={Topics} />
            </div>
          </div>

        </Router>
      </div>
    )
  }
}

export default Content