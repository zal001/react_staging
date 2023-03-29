import React, { Component } from 'react'



export default class Count extends Component {



    // 加法
    increment = () => {
        const { selectNumber: { value } } = this
        // 通知store更新状态
    }
    // 减法
    decrement = () => {
        const { selectNumber: { value } } = this
    }
    // 奇数再加
    incrementIfAdd = () => {
        const { selectNumber: { value } } = this
        // const count = store.getState()
        // if (count % 2 !== 0) {
        // }
    }
    // 异步再加
    incrementAsyncAdd = () => {
        const { selectNumber: { value } } = this
    }
    render() {
        return (
            <div>
                <h1>当前求和为： ???</h1>
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
