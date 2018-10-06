import React, { Component } from 'react'
import Template1 from './template1';

class Place extends Component {
  constructor(props){
    super(props);
    this.state = { 
      iconWidth: this.getFirstDimantions()
    }
  }

  getFirstDimantions = () => {
    const screenWidth = document.body.clientWidth
    if(screenWidth < 500){
      return screenWidth/4
    } else {
      return screenWidth/6
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.changeIconWidth)
  }

  changeIconWidth = () => {
    const screenWidth = document.body.clientWidth
    if(screenWidth < 500){
      this.setState({iconWidth: screenWidth/4})
    } else {
      this.setState({iconWidth: screenWidth/6})
    }
  }

  render() { 
    return ( 
        <div className="place">
          <Template1
            title={this.props.title}
            titleClassName='place-title'
            subtitleClassName='place-subtitle'
            pClassName='place-p'
            subtitle='Best City Ever'
            paragraph=''>
            <img className="homeLogo" src={this.props.img} width={this.state.iconWidth} height={this.state.iconWidth} alt=""/>
          </Template1>
        </div> 
    );
  }
}
 
export default Place;