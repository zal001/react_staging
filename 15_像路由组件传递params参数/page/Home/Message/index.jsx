import React, { Component } from 'react'
import MyNavLink from '../../../component/MyNavLink'
import { Route } from 'react-router-dom'
import Details from "../Details"

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' }
        ]
    }
    render() {
        const { state: { messageArr } } = this
        return (
            <div className="message-box">
                <ul>
                    {messageArr.map(item =>
                        <li key={item.id}>
                            {/* 像路由组件传递 params参数 */}
                            <MyNavLink to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</MyNavLink>
                        </li>)}
                </ul>
                <hr />
                {/* {声明接收prams参数} */}
                <Route path='/home/message/detail/:id/:title' component={Details}></Route>
            </div>
        )
    }
}
