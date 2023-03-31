import React, { Component } from 'react'
// 引入 redux中的store
import store from "./redux/store"
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {
  render() {
    return (
      <div>
        <Count store={store}/>
        <hr />
        <Person/>
      </div>
    )
  }
}
