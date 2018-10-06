import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/header'
import Home from './components/home'
import Contact from './components/contact/contact'
import Places from './components/places'
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
          <Places/>
        </div>
        <div ref="contact">
          <Contact/>
        </div>
        <div ref="about">
          
        </div>
      </div>
    );
  }
}

export default App;
