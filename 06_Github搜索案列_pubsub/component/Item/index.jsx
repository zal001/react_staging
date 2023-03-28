import React, { Component } from 'react'
import "./index.css"

export default class Item extends Component {
    render() {
        const { props: { avatarUrl, avatarId } } = this
        return (
            <div className="item-box">
                <div className="img-box">
                    <img src={avatarUrl} alt="测试" />
                </div>
                <div className="title">{avatarId}</div>
            </div>
        )
    }
}
