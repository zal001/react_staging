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
                            {/* <MyNavLink to={`/home/message/detail/?id=${item.id}/&title=${item.title}`}>{item.title}</MyNavLink> */}

                            {/* 像路由组件传递 search参数 */}
                            <MyNavLink to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</MyNavLink>
                        </li>)}
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Details}></Route> */}

                {/* search无需声明接受  只许取出来即可*/}
                <Route path='/home/message/detail' component={Details}/>
            </div>
        )
    }
}
