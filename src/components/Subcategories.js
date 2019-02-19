import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './css/Content.css'
import AboutCourse from "./AboutCourse";
class Subcategories extends Component {
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
        const API = `http://46.101.146.101:8081/subcategories/${this.props.match.params.id}/`;
        fetch(API)

            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }


    render() {
        const { data, isLoading, error } = this.state;

        console.log(data);

        return (
            <BrowserRouter>
            <div id='container' className='main' key={data.map.id}>
                {data.map((data)  =>
                    <div className="content" key={data.id}>
                        <Link to={`courses/${data.id}`}> SUBCATEGORY</Link>
                        <h3 className="title">{data.title}</h3>
                    </div>
                )}
                <Route path={`courses/:id`} component={AboutCourse} exact/>
            </div>
            </BrowserRouter>
        );
    }
}

export default Subcategories;