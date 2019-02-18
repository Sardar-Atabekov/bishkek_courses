import React, { Component } from 'react';

const API = 'http://46.101.146.101:8081/universities/';

class About_university extends Component {
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
            <div id='container' className='main'>
                {data.map(data  =>
                    <div className="content" key={data.id}>
                        <img src={data.main_image_url} className="images" />
                    </div>
                )}
            </div>

        )
    }
}

export default About_university;