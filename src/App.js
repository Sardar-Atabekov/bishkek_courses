import React, { Component } from 'react';

import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation exact/>
      </div>
    );
  }
}

export default App;
