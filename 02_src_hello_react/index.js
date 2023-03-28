// 引入React 核心库
import React from "react"
// 引入ReactDOM
import {createRoot} from 'react-dom/client'
// 引入App组件
import App from "./App"

// 渲染到App页面
const root = createRoot(document.getElementById('root'))
root.render(<App/>)

