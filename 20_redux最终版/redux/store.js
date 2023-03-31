/* 
        该文件专门用于暴露一个store对象， 对整个应用只有一个store对象
*/

// 引入 createStore， 专门用于创建redux中最为核心的store对象
import { createStore,applyMiddleware,combineReducers } from 'redux'
// 引入 redux-devtools-extension
import{composeWithDevTools} from 'redux-devtools-extension'
// 引入为Count组件服务的reducer
import countReducer from "./reducers/count"
// 引入为Person组件服务的reducer
import personReducer from "./reducers/person"
// 引入redux-thunk  用于支持异步action
import thunk from 'redux-thunk'
// 合并reducer
const allReducer = combineReducers({countReducer,personReducer})
// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))