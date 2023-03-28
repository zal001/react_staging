import React, { Component } from 'react'

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
                    {messageArr.map(item => <li key={item.id}>{item.title}</li>)}
                </ul>
                <hr />
            </div>
        )
    }
}
