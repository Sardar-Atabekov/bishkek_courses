import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './css/Content.css'
import Navigation from './Navigation';

class Courses extends Component {
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
            <div id='container' className='main' key={data.id}>
                {data.map((data)  =>
                    <div className="content" key={data.id}>
                        <Link to={{pathname: `courses/${data.id}`, state: { courseId: data.id} }}> <img src={data.main_image_url} className="images" alt='course' /></Link>
                        <h3 className="title">{data.title}</h3>
                        <div className="description_content">
                            <p className="description">{data.description} </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Courses;