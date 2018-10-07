import React, { Component } from 'react'
import Template1 from './template1';
import map from '../turrists/map.png';

class About extends Component {
  state = {  }
  render() { 
    return (
      <div className="page about">
      <Template1
        title='Your City Guide'
        titleClassName='title-is-2'
        subtitleClassName='subtitle-is-2'
        pClassName='small-p'
        subtitle='Hello, We Are So Awesome'
        paragraph='Tables are slightly adjusted to style, collapse borders, and ensure consistent.
        Tables are slightly adjusted to style, collapse borders, and ensure consistent.'>
        <img className="map-logo" src={map} width="240" height="130" alt=""/>
      </Template1>
      </div> 
    );
  }
}
 
export default About;