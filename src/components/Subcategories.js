import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Content.css'

class Subcategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
        const { data } = this.state;
        console.log(data);

        return (
            <div id='container' className='main' key={data.id}>
            {data.map((data)  =>
                    <div className="content" key={data.id}>
                        <Link to={`/subcategory/${data.id}`}> <img src={data.main_image_url} className="images" alt='course' /></Link>
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

export default Subcategories;