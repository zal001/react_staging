import React, { Component } from 'react'



export default class Count extends Component {



    // 加法
    increment = () => {
        const { selectNumber: { value } } = this
        this.props.increment(value * 1)
        // 通知store更新状态
    }
    // 减法
    decrement = () => {
        const { selectNumber: { value } } = this
        this.props.decrement(value * 1)
    }
    // 奇数再加
    incrementIfAdd = () => {
        const { selectNumber: { value } } = this
        const { count } = this.props
        if (count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    // 异步再加
    incrementAsyncAdd = () => {
        const { selectNumber: { value } } = this
        this.props.incrementAsync(value, 2000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为： {this.props.count}</h1>
                <select name="" id="" ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfAdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsyncAdd}>异步加</button>&nbsp;
            </div>
        )
    }
}
