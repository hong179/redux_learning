// 该文件专门为Count组件间生成action对象
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction=data=>({type:INCREMENT,data})

export const createDecrementAction=data=>({type:DECREMENT,data})

export const createIncrementAsynAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}


