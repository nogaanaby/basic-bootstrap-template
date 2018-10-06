import React, { Component } from 'react'
import night from '../turrists/night.png';

class About extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="about">
      <img className="night" src={night} alt=""/>
        
      </div> 
    );
  }
}
 
export default About;