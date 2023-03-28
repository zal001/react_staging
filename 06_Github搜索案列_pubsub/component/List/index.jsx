import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import "./index.css"
import Item from "../Item"

export default class List extends Component {
    state = {  //初始状态
        userList: [], //user初始值为数组
        isFirst: true,  //是否第一次打开页面
        isLoading: false, //标识是否处于加载中
        err: '', //存储请求相关的错误信息
    }

    // 组件即将挂载 用来做一些初始化的操作
    componentDidMount() {
        this.token = PubSub.subscribe('atguigu', (name, data) => {
            console.log('list组件接收到消息了')
            console.log(name, data)
        })
    }
    componentWillUnmount(){
        console.log('组件销毁 取消订阅')
        PubSub.unsubscribe(this.token)
    }
    // 更新APP的state
    updateAppState = (stateObj) => {
        console.log(stateObj, '数据')
        this.setState(stateObj)
    }

    render() {
        const { state: { userList, isFirst, isLoading, err } } = this
        return (
            isFirst ? '欢迎来到Github 请输入关键字搜索' :
                isLoading ? '加载中... 请稍后...' :
                    err ? <text>{err}</text> :
                        <div className="list-box">
                            {userList.map(item => {
                                return <Item key={item.id} avatarUrl={item.avatar_url} avatarId={item.id} />
                            })}
                        </div>
        )
    }
}
