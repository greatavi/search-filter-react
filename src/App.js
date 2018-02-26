import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import data from './data.js';
import SearchBody from './components/Search-body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBody data = {data}/>
      </div>
    );
  }
}

export default App;
