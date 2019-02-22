import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './css/About.css';
import Navigation from './Navigation';

class AboutCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        const API = `http://46.101.146.101:8081/courses/${this.props.match.params.id}/`;
        fetch(API)
            .then(response => response.json())
            .then(json => this.setState({data: json}))
    }
    render() {
        const { data } = this.state;

        console.log(data);
        console.log(data.branches);
        return (
        <div className="wrapper">
                <div className="header">
                    <Navigation/>
                </div>

                    <div className='course-content'>
            <main className="detailed">
                <article className="about">
                    <div className="about-course">
                        <img className="logo_course" src={data.logo_image_url} />
                        <div className="course">
                            <h3 className="title">{data.title}</h3>
                            <div className="status">{data.status}</div>
                            <div> Добавлен <span>{data.added} </span> </div>
                            <div> Обновлен <span>{data.updated}</span> </div>
                        </div>
                    </div>
                    <div className="Contacts">
                        <p className="tel"> Телофон <span> </span></p>
                        <p  className="Facebook"> Facebook <span> </span></p>
                        <p className="location"> Адрес <span> </span></p>
                    </div>
                </article>
                <article className="description">
                    <h3>Описания</h3>
                    <div className="description-course">
                        {data.description}
                    </div>
                </article>
            </main>
            </div>
        </div>
        )
    }
}
export default AboutCourse;