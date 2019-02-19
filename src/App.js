import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import University from "./components/Universities";
import AboutUniversity from './components/AboutUniversity';
import Courses from "./components/Courses";
import Subcategories from './components/Subcategories';
import AboutCourse from "./components/AboutCourse";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Navigation} exact/>
                    <Route path="/courses/:id" component={AboutCourse} />
                    <Route path="/subcategories/:id" component={Subcategories} />
                    <Route path="/universities/" component={University} />
                    <Route path="/universities/:id" component={AboutUniversity} exact/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

