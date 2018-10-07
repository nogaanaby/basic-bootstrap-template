import React, { Component } from 'react'

class Template1 extends Component {
  constructor(props){
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div className="page">
        <a href="#">
          {this.props.children}
        </a>
        <h1 className={this.props.titleClassName}>{this.props.title}</h1>
        <h5 className={this.props.subtitleClassName}>{this.props.subtitle}</h5>
        <small className={this.props.pClassName}>{this.props.paragraph}</small>
      </div> 
    );
  }
}
 
export default Template1;