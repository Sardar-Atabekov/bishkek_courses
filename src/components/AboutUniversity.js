import React, { Component } from 'react';

class AboutUniversity extends Component {
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
        const API = `http://46.101.146.101:8081/universities/${this.props.match.params.id}/`;
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
        const { data } = this.state;

        return (
            <div>
                <h1>Univer</h1>
            </div>

        )
    }
}

export default AboutUniversity;