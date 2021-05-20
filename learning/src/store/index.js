import { createStore, combineReducers } from 'redux'

import CourseTabListReducer from './reducers/CourseTabList'

import courseTabListState from './states/CourseTabList'


const allReducers = combineReducers({
    courseTabList: CourseTabListReducer //这里有多少个reducer就写几个reducer
})

const store = createStore(allReducers, {
    courseTabList: courseTabListState   //这里有多少个state就写多少个state
});

export default store


// reducer  action   state
// 要先知道state里有什么