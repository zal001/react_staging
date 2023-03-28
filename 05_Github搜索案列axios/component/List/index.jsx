import React, { Component } from 'react'
import "./index.css"
import Item from "../Item"

export default class List extends Component {
    render() {
        const { props: { userList, isFirst, isLoading, err } } = this
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
