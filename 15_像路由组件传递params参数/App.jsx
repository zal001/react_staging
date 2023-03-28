import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from "./page/Home"    //Home是路由组件
import About from './page/About'  //About是路由组件
import MyNavLink from './component/MyNavLink'
import "./App.css"

export default class App extends Component {


  render() {
    return (
      <div className="appName">
        <div>
          <div className="row row-top">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row box">
            <div className="col-xs-2 leftRouterCom col-xs-offset-2">
              <div className="list-group">
                {/* 原生html中，靠<a>跳转不同的页面 */}
                {/* <a className="list-group-item" href="./about.html">About</a>
            <a className="list-group-item active" href="./home.html">Home</a> */}

                {/* 在react中靠路由链接实现切换组件 */}
                <MyNavLink className="list-group-item" activeClassName="aguigu" to="/about">About</MyNavLink>
                <MyNavLink className="list-group-item" activeClassName="aguigu" to="/home">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6 conten-box">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Switch>
                    <Route path="/about" component={About} exact />
                    <Route path="/home" component={Home}/>
                    <Redirect to="/about" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
