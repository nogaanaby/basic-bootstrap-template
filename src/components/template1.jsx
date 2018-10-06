import React, { Component } from 'react'

class Template1 extends Component {
  constructor(props){
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div className="page home">
        <a href="#">
          {this.props.children}
        </a>
        <h1 className="title">{this.props.title}</h1>
        <h5 className="subTitle">{this.props.subtitle}</h5>
        <small className="form-text text-muted">{this.props.paragraph}</small>
      </div> 
    );
  }
}
 
export default Template1;