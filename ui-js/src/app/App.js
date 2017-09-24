import React, { Component } from 'react';

import './App.css';

import Header from '../containers/header/Header.jsx';
import Content from '../containers/content/Content.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Content />
      </div>
    );
  }
}

export default App;
