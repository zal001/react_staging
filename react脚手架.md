# react脚手架

## 一，使用create-react-app创建应用   （vue和react都是SPA应用 单页面应用）

### 1.1.1  react脚手架

> 脚手架

- 包含了所有需要的配置(语法检查，jsx编译，devServer)
- 下载好了所有相关的依赖
- 可以直接运行一个简单的效果

> react提供了一个用于创建react项目的脚手架库：create-react-app

> 项目的整体技术架构为： react + webpack + es6 + eslint

> 使用脚手架开发项目的特点：模块化，组件化，工程化

### 1.1.2创建项目并启动

1. 全局安装： npm install -g create-react-app   (全局安装之后再电脑的任何地方都可以使用)
2. 切换到想创建项目的目录，使用命令：create-react-app  hello-react
3. 进入项目文件夹： cd hello-react
4. 启动项目: npm start

### 1.1.3下载依赖

```react
npm add prop-types  /  yarn  add prop-types
```

## 二，配置代理

1. 找到package.json文件  在里面加入 "proxy":"代理地址"

2. 在src文件下添加添加配置文件(setupProxy.js)

   ```js
   const { createProxyMiddleware } = require('http-proxy-middleware')
   
   module.exports = function (app) {
       app.use(
           createProxyMiddleware('/api1', { //api是需要转发的请求（所有带有/api1前缀的请求都会转发给5000）
               target: 'http://localhost:5000', //配置转发目标地址（能返回数据的服务地址）
               changeOrigin: true,//控制服务器的请求头中host的值
            /*
             changeOrigin:true 服务器收到的请求头中host为:localhost:5000
             changeOrigin：false  服务器收到的请求头部中的host为：localhost:3000
            */   
               pathRewrite: { '^/api1': '' } //去除请求前缀，保证交给后台故武器的是正常请求地址（必须配置）
           }),
           createProxyMiddleware('/api2', {
               target: 'http://localhost:4999',
               changeOrigin: true,
               pathRewrite: { '^/api2': '' }
           })
       )
   }
   
   ```
 ## 三， 消息订阅与发布机制
   - 工具库： PubSubJS

   - 下载:  npm install pubsub-js --save

   - 使用:

     1) import   PubSub  from  'pubsub-js'  //引入

     2)PubSub.subscribe('delete', function(data){})   //订阅
   
     3)PubSub.publish('delete',data)  //发布消息

## 四，React路由( npm install react-router-dom)

### 1，对SPA应用的理解

- 单页Web应用（single page web application, SPA）
- 整个页面只有一个完整的页面
- 点击页面中的链接不会刷新页面，只会做页面的局部更新
- 数据都需要通过ajax请求获取，并在前端异步展现

### 2,    路由的理解

### 3, react  路由的基本使用
> 引入:  import { BrowserRouter } from "react-router-dom"
> ​           import { Link, Route } from 'react-router-dom'     
1. 明确好界面中的导航区，展示区
2. 导航区的a标签改为Link标签
    <Link to='/xxx' component={Deom}>
3. 展示区写Route标签进行路径的匹配
   <Route path='/xxx' component={Demo}>
4. <App>的最外侧包裹一个<BrowserRouter>或者<HashRouter>

### 4，react路由组件与一般组件的区别

- 写法不同:  

  - 一般组件: <Demo/>
  - 路由组件: <Route path='/demo' component={Demo}>

- 存放位置不同
  - 一般组件: components
  - 路由组件: pages
- 接受到的props不同:
     - 一般组件: 写组件标签时传递了什么 就能接收到什么
  - 路由组件: 接收到三个固定的属性 
            - history:
                    go:f go(n)
                    goBack:f goBack()
                    goForward: f goForward()
                    push: f push(path,state)
                    replace: f replace(path,state)
        - location:
            pathname: '/about'
            search: ''
            state:undefined
        - match:
        params:{}
        path:'/about'
        url:'/about'

### 5, NavLink与封装NavLink

1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
2. 标签体内容是一个特殊的标签属性
3. 通过this.props.children可以获取标签体内容

### 6, Switch的使用

1. 通常情况下， path和component是一一对应的关系
2. Switch可以提高路由匹配效率（单一匹配），如果不加switch即使路由匹配到了还是会依旧向下查找

### 7,解决多级路径刷新页面样式丢失的问题

1. pubilc/index.html  中 引入样式不写 ./  写  / （常用）
2. public/index.html  中 引入样式时不写  ./ 写 %PUBLIC_URL%（常用）
3. 使用HashRouter路由模式（路径前面加#）

### 8, 路由的严格匹配与模糊匹配

1. react默认使用的是模糊匹配（【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 开启严格匹配： <Route exact path="./xxx" component={xxx}>
3. 严格匹配不要随便开启， 需要再开  有些时候开启会导致无法继续匹配二级路由

### 9, Redirect的使用

1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由

2. 具体编码

   ```jsx
   <Switch>
     <Route path="/about" component={About}>
     <Route path="/home" component={Home}>
     <Redirect to="about" />
    </Switch>
   ```
### 10, 嵌套路由

   1. 注册子路由时要写上俘虏有得path值
   2. 路由的 每次  匹配时按照注册路由的顺序进行的

### 11，像路由组件传递参数

   >   params参数：
   >
   > ​    路由链接（携带参数）:<Link to='/demo/test/tom/18'>详情</Link>
   >
   > ​    注册路由（声明接收）:<Route path='demo/test/:name/:id' component={xxx}>
   >
   > ​    接收参数: const {id,title} = this.props.match.params

   > search参数：
   >
   > ​     路由链接（携带参数): <Link* to={`/demo?id=${*item*.id}&title=${*item*.title}`}>详情</Link>
   >
   > ​     注册路由（无需声明，正常注册即可）: <Route path='/demo' components={xxx}>
   >
   > ​     接收参数; this.props.location.search
   >
   > ​     备注:获取到的search是urlencoded编码字符串，需要借助querystring解析 react自带 直接引入 import qs from 'qs'     

   > state参数:
   >
   > ​     路由链接 (携带参数): <Link* to={{ pathname: `/demo/detail`, state: { id: xxx, title: xxx } }}>xxx</Link*>
   >
   > ​     注册路由(无需声明，正常注册即可)：<*Route* path='`/demo/detail`' component={Details} />
   >
   > ​     接收参数:this.props.location.state
   >
   > ​     备注: 刷新也可以保留住参数

### 12,push与replace模式

   1. params和search传参默认都是push模式  即压栈的方式进行操作的  =>  可以回退 如果想要设置成replace模式  即替换掉所有  --》不能回退的话 只用在Route标签上添加replace模式就行

### 13，编程式路由导航

   ```jsx
   // 主要利用路由组件props中的history实例上的方法
   const {history:router} = this.props
     // replace方式跳转
        router.replace(path)  //可使用params，search，state三种模式
     // push方式跳转
        router.push(path)  //可使用param， search， state三种模式跳转
     // 前进/回退 n个页面
        router.push(n)     //n为正数则前进 否则为后退
   ```

###  14, withRouter之让普通组件变成路由组件

   ```jsx
   import {withRouter} from 'react-router-dom'
   // withRouter可以加工一般组件，让一般组件具备路由组件索特有的API
   // witherRouter的返回值是一个新组件
   ```

### 15, BrowserRouter与HashRouter的区别

   1. 底层原理不一样：
      - BrowserRouter使用的是H5的history API， 不兼容IE9及以下版本
      - HashRouter使用的是URL的哈希值  
      - BrowserRouter的兼容性比HashRouter的差 因为HashRouter底层使用的是URL的哈希值 可以兼容到IE9 但是意义不大
   2. path表现形式不一样
      - BrowserRouter的路径中没有#，列如localhost:3000/demo/test
      - HashRouter的路径包含#，列如：localhost:3000/#/demo/test
   3. 刷新后对理由state参数的影响
      - BrowserRouter没有任何影响，因为BrowserRouter操作的是浏览器的history属性，把state保存在history中
      - HashRouter刷新后悔导致路由state参数的丢失
   4. 备注： HashRouter可以用于解决一些路径错误相关的问题

## 五，React UI  组件库

### 5.1  React流行的开源 React UI 组件库

#### 5.1.1 meaterial-ui（国外）

1. 官网： http://www.material-ui.com/#/
2. github:  https://github.com/callemall/material-ui

#### 5.1.2  ant-design(国内蚂蚁金服)

1. 官网：https://ant.design/index-cn
2. Github：https://github.com/ant-design/ant-design
3. 安装   npm  install antd  /  yarn install antd

#### 5.1.3 ant-design(按需引入)

1. 当前代码库同步到git上的情况下 打开项目所在文件夹的终端 进行 npm run eject

## 六, redux

### 6.1   redux理解

####       6.1.1学习文档

- 英文: https://redux.js.org/
- 中文: https://www.redux.org.cn/
- Github: https://github.com/reactjs/redux

####    6.1.2redux是什么

1. redux是一个专门用于做状态管理的JS库（不是react插件库）
2. 他可以用在react  angular vue等项目中，但基本与react配合使用
3. 作用: 集中式管理react应用中的多个组件共享状态

#### 6.1.3 什么情况下需要使用redux

1. 某个组件的状态，需要让其他组件可以随时拿到（共享）

2. 一个组件需要改变另一个组件的状态(通信)

3. 总体原则：  能不用就不用，如果不用比较吃力才考虑使用

#### 6.1.4redux工作流程

### 6.2 resux的三个核心概念

#### 6.2.1 action

1. 动作对象

2. 包含2个属性

   - type: 标识属性，值为字符串，唯一，必要属性
   - data：数据属性，值类型任意，可选属性

3. 例子：{type:"ADD_STUDENT"，data：｛name:'tom',age:'18'｝}
#### 6.2.2 reducer

1. 用于初始化状态，加工状态
2. 加工时，根据旧的state和action，产生新的state的纯函数

#### 6.2.3  store

1. 将state，action， reducer 联系在一起的对象
2. 如何得到此对象？
    1） import {createStore} from 'redux'
    2)    import reducer from './reducers'
3. 此对象的功能？

### 6.3 求和案列_react-redux基本使用

1. 明确两个概念：
   - UI组件： 不能使用任何redux的api，只负责页面的呈现，交互等
   - 容器组件：负责和redux通信，将结果交给UI组件
2. 如何创建一个容器组件——靠react-redux的connect函数
   - connect（mapStateToProps,mapDispatchToProps）(UI组件)
     - ---mapStateToProps：映射状态,返回值是一个对象
     - ---mapDispatchToProps：映射操作状态的方法，返回值是一个对象
3. 备注：容器组件中的store是靠props传进去的，而不是再容器组件中直接引入
4. 备注：mapDispatchToProps，也可以是一个对象


### 6.4 求和案列_ react-redux优化

1. 容器组件和UI组件整个一个文件
2. 无需自己给容器组件传递store,给<App/>包裹一个<Provider store={store}>即可
3. 使用了react-redux后也不用再自己监测redux中状态的改变了，容器组件可以自动完成这个动作
4. mapDispatchToProps也可以简单的写成一个对象
5. 一个组件要和redux“打交道”要经过那几步？
   - 定义好UI组件---不暴露
   - 引入connect生成一个容器组件，并暴露

### 6.5 纯函数和高阶函数

####   6.5.1纯函数

1. 一类特别的函数：只要是同样的输入（实参），必定得到同样的输出
2. 必须遵循以下一些约束：
   - 不得改写参数数据
   - 不会产生任何副作用，列如网络请求，输入和输出设备
   - 不能调用Date.now()或者Math.random()等不纯的方法
3. redux的reducer函数必须是一个纯函数

#### 6.5.2 高阶函数

1. 一类特别的函数：参数是函数或者返回的是函数
2. 常见的高阶函数:
   1. 定时器设置函数
   2. 数组的forEach()/map()/filter()/reduce()/find()/bind()
   3. promise

### 6.5.3 求和案列_react-redux开发者工具的使用

1. npm install redux-devtools-extension  /   yadn add redux-devtools-extension
2. store中进行配置
   - import  { composeWithDevTools} from 'redux-devtools-extension'
   - const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))


   ####    

