import React, { Component } from 'react';
import './css/Content.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import About_university from './About_university';
const API = 'http://46.101.146.101:8081/universities/';



class Universities extends Component {
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
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошло не так...');
                }
            })
            .then(responseJSON => {this.setState({ data: responseJSON, isLoading: false })})
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {

        const { data, isLoading, error } = this.state;
        if (isLoading) {
            return <p className='SMS'>Loading ...</p>;
        }
        if (error) {
            return <p className='SMS'>{error.message}</p>;
        }

        return (
            <Router>
            <div id='container' className='main'>
                {data.map(data  =>
                    <div className="content" key={data.id}>
                        <Link to={`/universities/${data.title}/`}><img src={data.main_image_url} className="images" /></Link>
                        <h3 className="title">{data.title}</h3>
                        <div className="description_content">
                            <p className="description">{data.description} </p>
                        </div>
                    </div>
                )}
                {/*<Route path={`universities/${data.title}/} component={About} />*/}
            </div>
            </Router>
        )
    }
}

export default Universities;