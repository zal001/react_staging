import React, { Component } from 'react'
import { Route,Redirect,Switch } from 'react-router-dom'
import MyNavLink from "../../component/MyNavLink"
import News from './News'
import Message from './Message'
import "./index.css"
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs list-group">
            <li>
              <MyNavLink className="list-group-item" to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink className="list-group-item" to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News} />
            <Route path='/home/message' component={Message} />
            <Redirect to="/home/news" />
            </Switch>
        </div>
      </div>
    )
  }
}
