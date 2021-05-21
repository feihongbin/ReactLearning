const CHANGE_COURSE_FIELD = 'CHANGE_COURSE_FIELD'

// 这是一个‘action 创建函数’
function changeCourseField(field,user) {
    return {
        // 表示将要执行的动作
        type: CHANGE_COURSE_FIELD,
        field,
        user
    }
}
// 这个action创建函数需要传递给dispatch方法  就像这样 dispatch(changeCourseField)
// 在这个项目中 这一步被放在了pages/IndexPage.js中执行

export {
    CHANGE_COURSE_FIELD,
    changeCourseField
}

// action的使用步骤
// 1.定义字符串常量来作为action函数中的type，同时这个常量也需要导出
// 2.创建action创建函数，这个函数只需要返回，返回的内容必须包含type，另外再加一些其他属性，然后导出