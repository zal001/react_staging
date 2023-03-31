import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonObj } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        let personObj = { name, age }
        this.props.addPerson(personObj)
        this.nameNode.value = this.ageNode.value = ''
    }
    componentDidMount() {
        console.log('props', this.props)
    }
    render() {
        return (
            <div>
                <h1>Count组件的求和为{this.props.count}</h1>
                <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
                <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.persons.map((item, index) => <li key={index}>{'名字' + item.name + '---年龄' + item.age}</li>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({ persons: state.personReducer, count: state.countReducer }),
    {
        addPerson: createAddPersonObj
    }
)(Person)
