import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import University from "./components/Universities";
import Courses from "./components/Courses";
import Subcategories from './components/Subcategories';
import About_university from "./components/About_university";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Navigation} exact/>
                    <Route path="/courses" component={Courses} />
                    <Route path="/courses/:id" component={Courses} />
                    <Route path="/courses/category/:id" component={Subcategories} />
                    <Route path="/universities/:id" component={University} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

