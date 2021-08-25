import React, { Component } from 'react'
//引入store,用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreator,专门用于创建action对象
import {createIncrementAction,createDecrementAction,createIncrementAsynAction} from '../../redux/count_action'
export default class Count extends Component {

    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
   
    //加法
    increment = ()=>{
        const {value} = this.selectNumer
        store.dispatch(createIncrementAction(value*1))

    }
    // 减法
    decrement = ()=>{
        const {value} = this.selectNumer
        store.dispatch(createDecrementAction(value*1))
    }
    //当前求和奇数再加
    incrementIfOdd = ()=>{
        const {value} = this.selectNumer
        const count =store.getState()
        if(count%2!==0){
            store.dispatch(createIncrementAction(value*1))
        }
    }
    //异步加
    incrementAsync = ()=>{
        const {value} = this.selectNumer
        // setTimeout(() => {
            store.dispatch(createIncrementAsynAction(value*1,500))    
        // }, 500);

    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumer = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
