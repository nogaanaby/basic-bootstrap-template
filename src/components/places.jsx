import React, { Component } from 'react'
import Place from './place';

class Places extends Component {
  constructor(props){
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div className="places">
      <Place
        title={this.props.firstPlaceTitle}
        img={this.props.firstPlace}/>
      <Place
        title={this.props.secondPlaceTitle}
        img={this.props.secondPlace}/>
      <Place
        title={this.props.thirdPlaceTitle}
        img={this.props.thirdPlace}/>
      </div> 
    );
  }
}
 
export default Places;