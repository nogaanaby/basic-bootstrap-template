import React, { Component } from 'react'
import Form from './form'
import Details from './details'
import './contact.css';

class Contact extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="contact">
        <Form></Form>
        <Details></Details>
      </div> 
    );
  }
}
 
export default Contact;