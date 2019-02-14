import React, { Component } from 'react';
import './css/Navigation.css';
import  Content from './Content';
import 'antd/lib/menu/style/css';
import { Menu, Icon } from 'antd';
import { Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'


const API = "http://46.101.146.101:8081/categories-subcategories/";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigations extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titles: [
            ]
        };
    }
    componentDidMount() {
        fetch(API, {mode: 'cors'}, {method: 'get'})
            .then(response => response.json())
            .then(json => this.setState({titles: json}))
    }

    render() {
        let {titles} = this.state;
        console.log(titles);
        return (
            <div style={{ width: 256 }} className="menu">
                <h1 className="logo">BishkekCourses</h1>
                <Menu mode="vertical" className="all-categories" style={{ width: 257,  background:6849}}>
                    {titles.map((one)=>{
                        return(
                            <SubMenu className="titles" key={one.id} title={<Link to={{pathname: /${title}/, state: { courses: one.title}}} className="one-title">{one.title}</Link>} >
                                <MenuItemGroup style={{ width: 250}} className="sub-categories">
                                    {one.subcategories.map((sub)=>{
                                        return(
                                            <Menu.Item className="sub-titles" key={sub.id}><Link to={{pathname: /${ sub.title }/, state: { courses: sub.title}}} key={sub.id} className="sub-title">{sub.title}</Link></Menu.Item>
                                        );
                                    })}
                                </MenuItemGroup>
                            </SubMenu>
                        );
                    })}
                </Menu>
            </div>
        )

    }
}
export default Navigations;