import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.setTodosDone(event.target.checked)
    }

    render() {
        const { deletAllTrue, todos } = this.props
        const doneCount = todos.reduce((per, todo) => per + (todo.done ? 1 : 0), 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === todos.length && todos.length !=0 ? true : false} onChange={this.handleCheckAll} />
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </label>
                <button className="btn btn-danger" onClick={deletAllTrue}>清除已完成任务</button>
            </div>
        );
    }
}
