import React, { Component } from 'react';
import './css/Content.css'

const API = 'http://46.101.146.101:8081/universities/';

class Content extends Component {
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
                    throw new Error('Что-то пошла не так...');
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
            <div className='container'>
                {data.map(data  =>
                    <div className="content" key={data.id}>
                        {/*<img src={data.main_image_url} className="images" />*/}
                        <h3 className="title">{data.title}</h3>
                        <div className="description_content">
                            <p className="description">{data.description} </p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Content;