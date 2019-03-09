import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import University from "./components/Universities";
import AboutUniversity from './components/AboutUniversity';
import Courses from "./components/Courses";
import Subcategories from './components/Subcategories';
import AboutCourse from "./components/AboutCourse";
import DetectedCourse from "./components/DetectedCourse";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/navigation" component={Navigation}/>
                    <Route path="/courses/:id" component={Courses} />
                    <Route path="/subcategories/:id" component={Subcategories} />
                    <Route path="/subcategory/:id" component={AboutCourse} />
                    <Route path="/universities/" component={University} />
                    <Route path="/university/:id" component={AboutUniversity} />
                    <Route path="/searched/" component={DetectedCourse} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;

