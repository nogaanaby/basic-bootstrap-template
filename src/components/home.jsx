import React, { Component } from 'react'
import Template1 from './template1';
import london from '../turrists/london.png';

class Home extends Component {
  state = {  }
  render() { 
    return (
      <div className="page home">
      <Template1
        title='London'
        subtitle='Best City Ever'
        paragraph='Tables are slightly adjusted to style, collapse borders, and ensure consistent text-align throughout. Additional changes for borders, padding, and more come with the .table class.Tables are slightly adjusted to style, collapse borders, and ensure consistent text-align throughout. Additional changes for borders, padding, and more come with the .table class.'>
        <img className="homeLogo" src={london} width="200" height="200" alt=""/>
      </Template1>
      </div> 
    );
  }
}
 
export default Home;