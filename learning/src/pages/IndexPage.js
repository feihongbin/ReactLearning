import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Clock, CourseField, CourseList } from '../components/index'
import { changeCourseField } from '../store/actions/CourseTabList'
class IndexPage extends Component {


    render() {
        const { curField, changeCourseField } = this.props; //才有这步 这两个参数都是connect里函数们的返回值
        console.log(curField);
        return (
            <div>
                <Clock></Clock>
                <CourseField curField={curField} changeCourseField={changeCourseField} />
                <CourseList curField={curField} />
            </div>
        )
    }
}
export default connect(
    function mapStateToProps(state) {//有了这步
        // 想要什么state就拿什么state
        return {
            curField: state.courseTabList.curField
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            changeCourseField: (field) => dispatch(changeCourseField(field))
        }
    }

)(IndexPage);