import React, { Component } from 'react'
import qs from 'qs'
const details = [
    { id: '01', title: '你好张奥林' },
    { id: '02', title: '你好孙国平' },
    { id: '03', title: '你好王德发' }
]
export default class Details extends Component {

    render() {
        // 接收params参数
        // const { props:{match:{params:{id,title}}}} = this

        // 接收search参数
        // const { props: { location: { search } } } = this
        // const {id,title} = qs.parse(search.slice(1))

        // 接收state参数
        const { props: { location: { state: { id, title } } } } = this
        return (
            <div className="Details-box">
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{details.find(item => item.id === id)?.title}</li>
                </ul>
            </div>
        )
    }
}
