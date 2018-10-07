import React, { Component } from 'react'
import night from '../../turrists/night.png';
import './contact.css';
class Details extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="contactDetails">
        <img className="night" src={night} alt=""/>
        <div className="details">
          <div className="detail detail1">
            <h1>Management</h1>
            <h6>The Whole World Around Us</h6>
            <small><b>Phone:</b> 123-456-7890
              <br />
              <b>Email:</b> info@mysite.com</small>
          </div>
          <div className="detail detail2">
            <h1>Architecture</h1>
            <h6>The Whole World Above Us</h6>
            <small><b>Phone:</b> 123-456-7890
              <br />
              <b>Email:</b> info@mysite.com</small>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Details;