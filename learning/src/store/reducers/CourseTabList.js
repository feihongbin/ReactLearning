import initialState from '../states/CourseTabList'
import {CHANGE_COURSE_FIELD} from '../actions/CourseTabList'
export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_COURSE_FIELD:
            // 在此不能修改原有的state，必须新建一个对象，然后再返回这个新的对象
            return {
                ...state,
                curField: action.field,
                user:action.user
            }
        default:
            return state;
    }
}
// reducer是一个纯函数，不能在reducer里面做的事情有
// 1.修改传入的参数
// 2.执行有副作用的操作，如API请求和路由跳转
// 3.调用非纯函数，如Date.now()或Math.random()

// reducer有两个传入值，一个是state，另外一个就是action
// reducer流程
// 1. 先判断action的type是什么
// 2. 对于不同的action的type返回不同的state，这个state必须是一个新的对象，而不能是作为参数传进来的对象


// 什么是纯函数
// 纯函数是指它的返回结果值依赖于它的参数，并且在执行过程中没有副作用的函数
// 1.只依赖于传入它的参数。这个是指函数的返回值不依赖于外部变量 let a = 1 const foo = (b) => a+b foo(2) 这就是一个非纯函数，因为它依赖了外部变量a相反 const foo = (a,b) => a+b 就是一个纯函数，因为它的只依赖于a,b且a,b都不是外部变量
// 2.函数执行过程没有副作用是指一个函数执行过程中没有产生外部可观察的变化

