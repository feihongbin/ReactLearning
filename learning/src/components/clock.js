import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({date: new Date()});
    }
    render() {
        return (
            <div>
                <h1>现在是北京时间</h1> 
                <h2>{ this.state.date.toLocaleTimeString() }</h2>
            </div>
        )
    }
}