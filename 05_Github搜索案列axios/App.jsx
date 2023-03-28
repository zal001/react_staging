import React, { Component } from 'react'
import Search from "./component/Search"
import List from "./component/List"

export default class App extends Component {

  state = {  //初始状态
    userList: [], //user初始值为数组
    isFirst: true,  //是否第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: '', //存储请求相关的错误信息
  }
  // 更新APP的state
  updateAppState = (stateObj) => {
    console.log(stateObj, '数据')
    this.setState(stateObj)
  }
  render() {
    return (
      <div>
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
