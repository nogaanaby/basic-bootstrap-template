import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Home from './components/home'
import Contact from './components/contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
        <Home></Home>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
