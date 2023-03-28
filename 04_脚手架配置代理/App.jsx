import React, { Component } from 'react'
import "./App.css"



export default class App extends Component {
  getStudents = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/api1/students')
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        console.log('数据', xhr.response)
      }
    }
  }
  geTteacher = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/api2/teacher')
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        console.log('数据', xhr.response)
      }
    }
  }
  render() {
    return (
      <div className="todo-container">
        <button onClick={this.getStudents}>点我发送ajax请求学生数据</button>
        <button onClick={this.geTteacher}>点击发送ajax请求老师数据</button>
      </div>
    )
  }
}
