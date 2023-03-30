import { ADD_PERSON } from "../constants/constant";


// 创建增加一个人的axios对象
export const createAddPersonObj = personObj => ({ type: ADD_PERSON, data:personObj })