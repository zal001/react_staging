import React, { Component } from 'react'

// 类式组件
// class Demo extends Component {
//     state = { count: 0 }

//     add = () => {
//         this.setState(state => ({ count: this.state.count + 1 }))
//     }
//     render() {
//         return (
//             <div>
//                 <h1>当前求和为{this.state.count}</h1>
//                 <button onClick={this.add}>点我+1</button>
//             </div>
//         )
//     }
// }

function Demo() {
    const [count, setCount] = React.useState(0)  //传入一个参数  返回一个数组 该数组包含两个元素第一个元素为想要的状态 第二个元素为更新状态的方法
    console.log(count, setCount)
    function add() {
        // setCount(count + 1)  第一种写法
        // setCount(value => value+1)   第二种写法
    }
    return (
        <div>
            <h1>当前求和为{count}</h1>
            <button onClick={add}>点我+1</button>
        </div>
    )
}


export default Demo
