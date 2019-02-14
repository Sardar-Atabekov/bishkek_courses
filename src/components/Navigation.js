import React, { Component } from 'react';
import './css/Navigation.css';
import 'antd/lib/menu/style/css';
import { Menu } from 'antd';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Courses from "./Courses";

const API = "http://46.101.146.101:8081/categories-subcategories/";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {

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
        return (
            <div style={{ width: 256 }} className="menu">
                <h1 className="logo">BishkekCourses</h1>
                <Menu mode="vertical" className="all-categories" style={{ width: 257,  background:6849}}>
                    {titles.map((one)=>{
                        return(
                            <SubMenu className="titles" key={one.id} title={<Link to={{pathname: `/${one.title}/`, state: { courses: one.title}}} className="one-title">{one.title}</Link>} >
                                <MenuItemGroup style={{ width: 250}} className="sub-categories">
                                    {one.subcategories.map((sub)=>{
                                        return(
                                            <Menu.Item className="sub-titles" key={sub.id}><Link to={{pathname: `/${one.title}/${ sub.title }/`, state: { courses: sub.title}}} key={sub.id} className="sub-title">{sub.title}</Link></Menu.Item>
                                        );
                                    })}
                                </MenuItemGroup>
                            </SubMenu>
                        );
                    })}
                </Menu>
                <a href={'/'}>University</a>

                <BrowserRouter>
                    <Switch>
                        <Route path='' exact component={}/>
                        <Route path='courses' component={Courses} />
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }

}
export default Navigation;