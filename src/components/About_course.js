import React, { Component } from 'react';
import {Link} from "react-router-dom";

const API = 'http://46.101.146.101:8081/courses/13';

class About_course extends Component {
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
                    <h1>work</h1>
                    <h1>{data.id}</h1>
                </div>
            </div>
        )
    }
}

export default About_course;