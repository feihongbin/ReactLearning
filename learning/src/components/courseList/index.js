import React, { Component } from 'react'

import CourseItem from './CourseItem'
const courseInfo = [
    { field: '0', course_name: '数据结构' },
    { field: '1', course_name: '操作系统' },
    { field: '0', course_name: '计算机组成原理' },
    { field: '1', course_name: '计算机网络' },
]
export default class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseData: courseInfo
        }
    }
    filterData(data, field) {
        if (field === '-1') {
            return data;
        }
        return data.filter((item) => item.field === field)
    }
    render() {
        const { courseData } = this.state;
        const { curField } = this.props
        return (
            <div>
                <ul>
                    {
                        this.filterData(courseData, curField).map((item, index) => {
                            return (
                                <CourseItem key={index} item={item} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}