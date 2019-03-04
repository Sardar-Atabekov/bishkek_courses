import React, { Component } from 'react';
import {Menu} from "antd/lib/menu";
import Navigation from './Navigation';
import './css/About.css';

class AboutUniversity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        const API = `http://46.101.146.101:8081/universities/${this.props.match.params.id}/`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }

    componentWillMount = async() => {
        const API = await fetch(`http://46.101.146.101:8081/universities/${this.props.match.params.id}/`);
        const response = await API.json();
        this.setState({contacts: response.contacts})
    };

    render() {
        const {data}  = this.state;
        console.log(data);
        return (
            <div>
                <Navigation/>
                <div className="logo_neobis-block">
                    <img className="logo_neobis" src="./css/logo/neobis_logo.png" alt="neobis"/>
                </div>
                <div className="detailed course-content">
                    <article className="about">
                        <div className="about-course">
                            <img className="logo_course" src={data.logo_image_url} />
                        </div>
                        <div className="Contacts">
                            {this.state.contacts && this.state.contacts.map((contact) => {
                                return (
                                    <div key={contact.type}>
                                        <p>{contact.type}</p>
                                        <p>{contact.contact}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                    <article className="description">
                        <h3>Описания</h3>
                        <div className="description-course">
                            {data.description}
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default AboutUniversity;