import React, { Component } from 'react'
// 引入 store  用于获取store中保存的状态
import store from "../../redux/store"

export default class Count extends Component {

    // componentDidMount() {
    //     // 检测redux中状态的变化，  只要变化， 就调用render更新当前组件
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    // 加法
    increment = () => {
        const { selectNumber: { value } } = this
        // 通知store更新状态
        store.dispatch({ type: 'increment', data: value * 1 })
    }
    // 减法
    decrement = () => {
        const { selectNumber: { value } } = this
        store.dispatch({ type: 'decrement', data: value * 1 })
    }
    // 奇数再加
    incrementIfAdd = () => {
        const { selectNumber: { value } } = this
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch({ type: 'increment', data: value * 1 })
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
                <h1>当前求和为： {store.getState()}</h1>
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
