import React, { Component } from 'react'
import PropTypes from "prop-types"
import './index.css'


export default class Item extends Component {

    static propTypes = {
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        done:PropTypes.bool.isRequired
    }

    state = {mouse:false}
    // 监听鼠标移入移出的API
    handleMouse(flag){
        return () => {
            this.setState({mouse:flag})
        }
    }
    // 勾选，取消勾选某一个todo的回调
    handleCheck = (id) => {
        return (event) =>{
            console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }
    }
    // 删除一个todo的回调
    handleDelete = (id) => {
         if(window.confirm('确定删除吗')){
            this.props.deleteTodo(id)
         }else{
            alert('用户点击了取消删除')
         }
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse?'#add':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button  className="btn btn-danger" onClick={() => this.handleDelete(id)} style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}