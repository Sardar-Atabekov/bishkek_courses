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
    componentWillMount = async() => {
        // this.setState({ isLoading: true });
        const API = await fetch(`http://46.101.146.101:8081/universities/${this.props.match.params.id}/`);
        const response = await API.json();
        this.setState({contacts: response.contacts})
    }

    render() {
        const data  = this.state.data;
        return (
            <div className="wrapper">
                <div className="header">
                    <Navigation/>
                </div>
                <div className='course-content'>

                    <div className="about">
                        <div className="about-course">
                            <img src={data.logo_image_url} className="logo_course" alt={'univer'}/>
                            <div className="course">
                                <h3 className='title'>{data.title}</h3>
                                <div className="status">Status</div>
                                <div> Добавлен <span> </span> </div>
                                <div> Обновлен <span> </span> </div>
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
                            </div>

                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AboutUniversity;