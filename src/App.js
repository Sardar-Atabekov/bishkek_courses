import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import University from "./components/Universities";
import Courses from "./components/Courses";
import About_university from './components/About_university';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={Navigation} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/universities/" component={About_university} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

