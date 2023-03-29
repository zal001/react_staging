/* 
  该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant"

// 返回值为同步的actions
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })

// 返回值为同步的actions  当action返回值为fn时  reducer认定他为异步axios
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}


