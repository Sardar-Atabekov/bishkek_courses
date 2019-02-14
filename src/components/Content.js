import React, { Component } from 'react';
import './css/Content.css'

const API = 'http://46.101.146.101:8081/courses/';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Что-то пошла не так...');
                }
            })
            .then(responseJSON => {this.setState({ data: responseJSON, isLoading: false })})
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { data } = this.state;
        return (
            <div className="main">
                <div id='container'>
                    {data.map(data  =>
                        <div className="content" key={data.id}>
                            <h3 className="title">{data.title}</h3>
                            <div className="description_content">
                                <p className="description">{data.description} </p>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        );
    }
}
const Container = document.querySelector('main');
export default Content;