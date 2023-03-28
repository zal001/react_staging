// 创建外壳组件
import React,{Component} from 'react'
import Hello from "./component/Hello"
import Welcome from "./component/Welcome"
// const {Component} = React


// 暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
               <Hello/>
               <Welcome/>
            </div>
        )
    }
    }