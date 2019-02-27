import React, { Component } from 'react';

class DetectedCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        const API = `http://46.101.146.101:8081/courses/search/?search=бокс`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}
export default DetectedCourse;