import React, { Component } from 'react'
import night from '../turrists/night.png';
import Places from './places';
class About extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="about">
        <img className="night" src={night} alt=""/>
        <div className="details">
          <div className="detail">
            <h1>Managment</h1>
            <h6>The Hole World Around Us</h6>
            <small><b>Phone:</b> 123-456-7890
              <br />
              <b>Email:</b> info@mysite.com</small>
          </div>
          <div className="detail">
            <h1>Architecture</h1>
            <h6>The Hole World Above Us</h6>
            <small><b>Phone:</b> 123-456-7890
              <br />
              <b>Email:</b> info@mysite.com</small>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;