import React, { Component } from 'react'
import Count from './containers/Count'
// 引入 redux中的store
import store from "./redux/store"

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}/>
      </div>
    )
  }
}
