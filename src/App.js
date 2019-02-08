import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation';
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route path="/" component={Navigation}/>
          </div>
        </Router>

    );
  }
}

export default App;
