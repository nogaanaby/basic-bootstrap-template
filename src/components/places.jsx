import React, { Component } from 'react'
import china from '../turrists/china.png';
import paris from '../turrists/paris.png';
import japan from '../turrists/japan.png';
import Template1 from './template1';

class Places extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="page places">
        <div className="place">
          <Template1
            title='China'
            subtitle='Best City Ever'
            paragraph='Tables are slightly adjusted to style, collapse borders, and ensure consistent text-align throughout. '>
            <img className="homeLogo" src={china} width="150" height="150" alt=""/>
          </Template1>
        </div>
        <div className="place">
          <Template1
            title='Paris'
            subtitle='Best City Ever'
            paragraph='Tables are slightly adjusted to style, collapse borders, and ensure consistent text-align throughout.'>
            <img className="homeLogo" src={paris} width="150" height="150" alt=""/>
          </Template1>
        </div>
        <div className="place">
          <Template1
            title='Japan'
            subtitle='Best City Ever'
            paragraph='Tables are slightly adjusted to style, collapse borders, and ensure consistent text-align throughout.'>
            <img className="homeLogo" src={japan} width="150" height="150" alt=""/>
          </Template1>
        </div>
      </div> 
    );
  }
}
 
export default Places;