import React, { Component } from 'react'
import PropTypes from "prop-types"
import './index.css'
import {nanoid} from 'nanoid'



export default class Header extends Component {

    // 对接受的props类型以及必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        // 解构赋值获取keyCode,target
        const {code,target} = event
        // 判断是否是回车按键
        if(code !== 'Enter') return
        // 如果输入的事件为空则不添加todo
        if(target.value === ""){
            alert('添加的事件不能为空')
            return
        }
        // 准备好一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        // 清空input的数据
        target.value = ""
    }
    render() {
        return (
            <div className ="todo-header">
                <input  type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}