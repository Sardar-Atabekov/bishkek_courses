import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation';
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

      </div>
    );
  }
}

export default App;
