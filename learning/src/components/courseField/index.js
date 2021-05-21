import React, { Component } from 'react'
import FieldItem from './FieldItem'

const fieldInfo = [
    {
        field: '0',
        field_name: '课程0'
    },
    {
        field: '1',
        field_name: '课程1'
    }
]
export default class CourseField extends Component {

    constructor(props) {
        super(props);
        this.state = { fieldData: fieldInfo }
    }

    render() {
        const { fieldData } = this.state;
        const { user,curField, changeCourseField } = this.props
        return (
            <div>
                <FieldItem key={-1} item={{ field: '-1', field_name: '全部课程' }} curField={curField} changeCourseField={() => changeCourseField('-1','xiaoming')} />
                {
                    fieldData.map((item, index) => {
                        return (
                            <FieldItem key={index} item={item} curField={curField}  changeCourseField={() => changeCourseField(item.field,'zhangsan')} />
                        )
                    })
                }
            </div>
        )
    }
}