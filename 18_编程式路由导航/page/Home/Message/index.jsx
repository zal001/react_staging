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
    // 编程式导航  replace跳转
    replaceShow = (id, title) => {
        // 编写一段代码 让其自动实现 replace跳转 + params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转 + search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // replace跳转 + state参数
        this.props.history.replace('/home/message/detail', { id, title })
    }
    // 编程式导航 push跳转
    pushShow = (id, title) => {
        // 编写一段代码 让其自动实现push跳转
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转  +  search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // push跳转 + state参数
        this.props.history.push('/home/message/detail', { id, title })
    }

    // 编程式导航 前进一个页面
    forward = () => {
        this.props.history.goForward()
    }

    // 编程式导航 后退一个页面
    back = () => {
        this.props.history.goBack()
    }

    // 编程式导航  GO
    go = () => {
        this.props.history.go(2)
    }
    render() {
        const { state: { messageArr } } = this
        return (
            <div className="message-box">
                <ul>
                    {messageArr.map(item =>
                        <li key={item.id}>
                            {/* 像路由组件传递 params参数 */}
                            {/* <MyNavLink to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</MyNavLink> */}

                            {/* 像路由组件传递 search参数 */}
                            {/* <MyNavLink to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</MyNavLink> */}

                            {/* 像路由组件传递 state参数 */}
                            <MyNavLink to={{ pathname: `/home/message/detail`, state: { id: item.id, title: item.title } }}>{item.title}</MyNavLink>
                            <button onClick={() => this.pushShow(item.id, item.title)}>push查看</button>&nbsp
                            <button onClick={() => this.replaceShow(item.id, item.title)}>replcae查看</button>
                        </li>)}
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Details}></Route> */}

                {/* search无需声明接受  只许取出来即可*/}
                {/* <Route path='/home/message/detail' component={Details} /> */}

                {/* state无需声明接受  只许取出来即可*/}
                <Route path='/home/message/detail' component={Details} />



                <button onClick={this.forward}>前进</button>
                <button onClick={this.back}>后退</button>
                <button onClick={this.go}>GO</button>
            </div>
        )
    }
}
