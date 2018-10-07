import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/header'
import Home from './components/home'
import Contact from './components/contact/contact'
import About from './components/about'
import Carusel from './components/carusel'
import './App.css';

class App extends Component {

  state = {
    currpage: ''
  }

  scroll = (page) => {
    this.refs[page].scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App">
      <Header
       scrollTo={this.scroll}/>
        <div ref="home">
          <Home/>
        </div>
        <div ref="places">
          <Carusel/>
        </div>
        <div ref="about">
          <About/>
        </div>
        <div ref="contact">
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
