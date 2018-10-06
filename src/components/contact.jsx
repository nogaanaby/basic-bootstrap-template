import React, { Component } from 'react'
import day from '../turrists/day.png';

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="contact">
      <img className="day" src={day} width="350" height="150" alt=""/>
        <form className="form">
          <h4>Write Us A Message!</h4>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label>Your Message Goes Here</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </div> 
    );
  }
}
 
export default Contact;