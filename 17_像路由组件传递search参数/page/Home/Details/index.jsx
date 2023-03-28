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
        const { props: { location: { search } } } = this
        const searchObj = qs.parse(search.slice(1))
        console.log('searchObj',searchObj);
        return (
            <div className="Details-box">
                <ul>
                    <li>ID:{searchObj.id}</li>
                    <li>TITLE:{searchObj.title}</li>
                    <li>CONTENT:{details.find(item => item.id === searchObj.id)?.title}</li>
                </ul>
            </div>
        )
    }
}
