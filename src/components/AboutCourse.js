import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AboutCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            error: null,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        const API = `http://46.101.146.101:8081/categories/${this.props.match.params.id}/`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }
    render() {
        const { data } = this.state;

        console.log(data);
        return (
            <div>
                <div key={data.id}>
                    <h1>Course</h1>
                </div>
            </div>
        )
    }
}
export default AboutCourse;