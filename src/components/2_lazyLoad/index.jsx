import React, { Component, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
export default class Demo extends Component {
    render() {
        return (
            <div className='dome'>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className="list-group">
                            {/* 在react中靠路由链接实现切换组件 */}
                            <NavLink className="list-group-item" activeClassName="aguigu" to="/about">About</NavLink>
                            <NavLink className="list-group-item" activeClassName="aguigu" to="/home" >Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Suspense >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
