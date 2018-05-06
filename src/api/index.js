import axios from 'axios'

export async function fetchTopics(params) {
  // 请求数据
  let { data } = await axios.get('https://cnodejs.org/api/v1/topics', { params })
  return data
}