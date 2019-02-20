import React, { Component } from 'react';

class AboutCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: [],
        };
    }
    componentDidMount() {
        const API = `http://46.101.146.101:8081/categories/${this.props.match.params.id}/`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({course: json}))
    }
    render() {
        const { course } = this.state;

        console.log(course);
        return (
            <div id='container' className='main' key={course.id}>
                <h1>About course</h1>
            </div>
        )
    }
}
export default AboutCourse;