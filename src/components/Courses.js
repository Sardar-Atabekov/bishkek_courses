import React, { Component } from 'react';

const API = 'http://46.101.146.101:8081/courses/';

class Courses extends Component {
    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({courses: json}))
    }

    render() {
        return (
            <div>Courses</div>
        )
    }
}

export default Courses;