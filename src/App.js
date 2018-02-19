import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import List from './components/Search-list.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
