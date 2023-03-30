import { ADD_PERSON } from "../constants/constant";


const defaultPersons = [{
    name: '王五',
    age: 18
}]
export default function personReducer(perState = defaultPersons, action) {
  console.log('perStateperState',perState);
    // actions接受两个参数  第一个为上一次的返回值  第二个为要加工数据的方法
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        case ADD_PERSON:
            return [data,...perState]
        default:
            return perState
    }
}