import React, { useEffect, useState } from 'react'
import root from './index'

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
    const [count, setCount] = useState(0)  //传入一个参数  返回一个数组 该数组包含两个元素第一个元素为想要的状态 第二个元素为更新状态的方法

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            console.log('##')
            // clearInterval(timer)
        }
    }, [])

    // 加的回调
    function add() {
        // setCount(count + 1)  第一种写法
        setCount(value => value + 1)  // 第二种写法
    }
    // 卸载组件的回调
    function u222nmount() {
        root.unmount()
    }
    return (
        <div>
            <h1>当前求和为{count}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick={u222nmount}>点我卸载组件</button>
        </div>
    )
}


export default Demo
