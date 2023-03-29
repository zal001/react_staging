import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count: 0
    }
    // 加法
    increment = () => {
        const { selectNumber: { value }, state: { count } } = this
        this.setState({
            count: value * 1 + count
        })
    }
    // 减法
    decrement = () => {
        const { selectNumber: { value }, state: { count } } = this
        console.log('seletNumber', value)
        this.setState({
            count: count - value * 1
        })
    }
    // 奇数再加
    incrementIfAdd = () => {
        const { selectNumber: { value }, state: { count } } = this
        if (count % 2 !== 0) {
            this.setState({
                count: value * 1 + count
            })
        }
    }
    // 异步再加
    incrementAsyncAdd = () => {
        const { selectNumber: { value }, state: { count } } = this
        setTimeout(() => {
            this.setState({
                count: value * 1 + count
            })
        }, 500)
    }
    render() {
        return (
            <div>
                <h1>当前求和为： {this.state.count}</h1>
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
