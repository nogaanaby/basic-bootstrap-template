import React, { Component } from 'react'
import day from '../turrists/day.png';
import london from '../turrists/london.png';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="page home">
        <a href="#">
          <img className="homeLogo" src={london} width="200" height="200" alt=""/>
        </a>
        <h1 className="title">London</h1>
        <h5 className="subTitle">Best City Ever</h5>
        <small className="form-text text-muted">Tables are slightly adjusted to style, collapse borders, and ensure consistent text-align throughout. Additional changes for borders, padding, and more come with the .table class.Tables are slightly adjusted to style, collapse borders, and ensure consistent text-align throughout. Additional changes for borders, padding, and more come with the .table class.</small>
      </div> 
    );
  }
}
 
export default Home;