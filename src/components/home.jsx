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
        titleClassName='title'
        subtitleClassName='subtitle'
        pClassName='small'
        subtitle='Best City Ever'
        paragraph='Tables are slightly adjusted to style, collapse borders, and ensure consistent.'>
        <img className="homeLogo" src={london} width="200" height="200" alt=""/>
      </Template1>
      </div> 
    );
  }
}
 
export default Home;