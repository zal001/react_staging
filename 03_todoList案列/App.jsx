import React, { Component } from 'react'
import "./App.css"
import Header from "./component/Header"
import List from "./component/List"
import Footer from "./component/Footer"


export default class App extends Component {
  // 状态在哪里 操作状态的方法就在哪里
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打豆豆', done: false }
    ]
  }

  // 接收header组件传递过来的参数,  接收的参数是todo对象
  addTodo = (todoObj) => {
    console.log('todoObj', todoObj)
    // 获取原todos
    const { todos } = this.state
    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  // 用于勾选和取消勾选的API
  updateTodo = (id, done) => {
    console.log(id, done)
    // 获取状态中的todos
    const { todos } = this.state
    const todosList = todos.map(item => {
      if (item.id === id) {
        return { ...item, done }
      } else {
        return item
      }
    })
    console.log('更新数据', todosList)
    this.setState({
      todos: todosList
    })
  }
  // 用于删除一个todo的API
  deleteTodo = (id) => {
    // 获取状态中的todos
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id != id
    })
    // 修改state中的状态
    this.setState({ todos: newTodos })
  }

  // 删除所有已完成事件的 API
  deleteAllTrue = () => {
    // 获取状态中的todos
    const { todos } = this.state
    const todosList = todos.filter(item => {
      return !item.done
    })
    // 更新state中的状态
    this.setState({ todos: todosList })
  }

  // 控制全选 /  全不选的API
  setTodosDone = (done) => {
    // 获取状态
    const { todos } = this.state
    const newTodos = todos.map(todosObj => {
      return { ...todosObj, done }
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} deletAllTrue={this.deleteAllTrue} setTodosDone={this.setTodosDone} />
        </div>
      </div>
    )
  }
}
