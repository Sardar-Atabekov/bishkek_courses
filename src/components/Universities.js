import React, { Component} from 'react';

const API = 'http://46.101.146.101:8081/universities';

class Universities extends Component {
    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({university: json}))
    }

    render() {
        return (
            <div>Universities</div>
        )
    }
}

export default Universities;