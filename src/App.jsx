import React, { Component } from 'react'
import { Button, Space } from 'antd';
import { MessageTwoTone } from '@ant-design/icons'
import 'antd/dist/reset.css'

export default class App extends Component {
  render() {
    return (
      <div>App
        <Space wrap>
          <Button type="primary">Primary Button</Button>
          <MessageTwoTone  />
        </Space>
      </div>
    )
  }
}
