import React, { Component } from 'react'
import axios from "axios"
import "./index.css"

export default class Search extends Component {
    search = () => {
        const { keyWordElement: { value: keyWord } } = this
        // 发送请求前通知APP更新状态
        this.props.updateAppState({ isFirst: false, isLoading: true })
        axios.get('http://localhost:3000/api1/search/users?q=' + keyWord)
            .then((response) => {
                // 请求成功后 通知APP更新状态
                this.props.updateAppState({ isLoading: false, userList: response.data.items })
            }).catch(error => {
                // 请求失败后通知APP更新状态
                this.props.updateAppState({isLoading: false, err: '请求失败了' })
            })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div className="jumbotron-body">
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
