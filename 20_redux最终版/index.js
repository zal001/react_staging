// 引入React 核心库
import React from "react"
// 引入ReactDOM
import { createRoot } from 'react-dom/client'
// 注册路由
import { BrowserRouter } from "react-router-dom"
// // 引入App组件
import App from "./App"
import store from "./redux/store"
import { Provider } from 'react-redux'
import "./App.css"

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>
)

// 监测redux中状态的改变， 如redux的状态发生了改变， 那么冲洗渲染App早已组件
// store.subscribe(() => {
//     // // 渲染到App页面
//     root.render(<BrowserRouter><App /></BrowserRouter>)
// })


// const root = createRoot(document.getElementById('root'))
// root.render(<App/>)

