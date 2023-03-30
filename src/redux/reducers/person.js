import { ADD_PERSON } from "../constants/constant";


const defaultPersons = [{
    name: '王五',
    age: 18
}]
export default function personReducer(perState = defaultPersons, action) {
    console.log('perStateperState', perState);
    // actions接受两个参数  第一个为上一次的返回值  第二个为要加工数据的方法
    const { type, data } = action
    // 根据type决定如何加工数据
    switch (type) {
        case ADD_PERSON:  //若是添加一个人
            //    perState.unshift(data)   此处不可以这样写；这样会导致perState被改写了，personReducer就不是纯函数了
            return [data, ...perState]
        default:
            return perState
    }
}