import React, { Component } from 'react';
import './css/About.css'
import {Link} from "react-router-dom";
import {Menu} from "antd/lib/menu";

class AboutUniversity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        const API = `http://46.101.146.101:8081/universities/${this.props.match.params.id}/`;

        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }

    render() {
        const { data } = this.state;
        console.log(data.contacts);
        return (
            <div className="wrapper">
                <div className="detailed">
                    <div className="about">
                        <div className="about-course">
                            <img src={data.logo_image_url} className="logo" alt={'univer'}/>
                            <div className="course">
                                <h3 className='title'>{data.title}</h3>
                                <div className="status">Status</div>
                                <div> Добавлен <span> </span> </div>
                                <div> Обновлен <span> </span> </div>
                            </div>
                        </div>
                        {/*<div className="Contacts">*/}
                            {/*{data.contacts.map((contact) =>*/}
                                {/*<div> {contact.contact} </div>*/}
                            {/*)}*/}
                        {/*</div>*/}
                        {/*<div className="location">{data.branches.map(add => <div>{add.address}</div>)}</div>*/}

                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUniversity;