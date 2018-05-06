import React, { Component } from 'react'
import { fetchTopics } from '../api'
class Topics extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: []
    }
  }
  componentDidMount() {
    this.getTopics()
  }
  getTopics() {
    const params = {
      tab: this.props.match.params.tab
    }
    fetchTopics(params).then(res => {
      this.setState({
        topic: res.data
      })
    })
  }
  render() {
    return (
      <div id="topic_list">
        {this.state.topic.map(topic => {
          return <TopicsItem topic={topic} key={topic.id}/>
        })}
      </div>
    )
  }
}
class TopicsItem extends Component {
  render() {
    const topic = this.props.topic
    return (
      <div className="cell">
        <a className="user_avatar pull-left" href={`https://cnodejs.org/user/${topic.author.loginname}`}>
          <img src={topic.author.avatar_url} title="ai-recognition" alt={topic.author.loginname} />
        </a>
        <span className="reply_count pull-left">
          <span className="count_of_replies" title="回复数">
            {topic.reply_count}
          </span>
          <span className="count_seperator">/</span>
          <span className="count_of_visits" title="点击数">
            {topic.visit_count}
          </span>
        </span>
        <span className="last_time pull-right">
          <span className="last_active_time">36 分钟前</span>
        </span>

        <div className="topic_title_wrapper">
          <Tab tab={topic.tab} top={topic.top} />
          <a className="topic_title" href="/topic/5aed544b02591040485baaf8" title="{topic.title}">
            {topic.title}
          </a>
        </div>
      </div>
    )
  }
}

class Tab extends Component {
  render() {
    const tab = this.props.tab
    const top = this.props.top
    const tabMap = {
      ask: '问答',
      share: '分享',
      job: '工作',
      good: '精华',
      dev: '测试'
    }
    
    return (
      <span className={top ? 'put_top' : 'topiclist-tab'}>{top ? '置顶' : tabMap[tab]}</span>
    )
  }
}
export default function(props) {
  return <Topics {...props} key={props.match.params.tab}/>
}