import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import University from "./components/Universities";
import AboutUniversity from './components/AboutUniversity';
import Courses from "./components/Courses";
import Subcategories from './components/Subcategories';
import AboutCourse from "./components/AboutCourse";
import SearchField from "./components/SearchField";
import DetectedCourse from "./components/DetectedCourse";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Navigation} exact/>
                    <Route path="/courses" component={Courses} exact/>
                    <Route path="/courses/:id" component={Courses} />
                    <Route path="/course/:id" component={AboutCourse} />
                    <Route path="/subcategories/:id" component={Subcategories} />
                    <Route path="/subcategory/:id" component={AboutCourse} />
                    <Route path="/universities/" component={University} />
                    <Route path="/university/:id" component={AboutUniversity} />
                    <Route path="/search" component={SearchField} />
                    <Route path="/searchingCourses" component={DetectedCourse} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

