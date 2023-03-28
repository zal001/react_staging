import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

const  Header = class extends Component {
  forward = () => {
    this.props.history.go(1)
  }

  back = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="top">顶部资源
        <button onClick={this.forward}>前进</button>
        <button onClick={this.back}>后退</button>
        <button onClick={this.go}>GO</button>
      </div>
    )
  }
}


// withRouter可以加工一般组件，让一般组件具备路由组件索特有的API
export default withRouter(Header)
