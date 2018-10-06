import React, { Component } from 'react'
import china from '../turrists/china.png';
import paris from '../turrists/paris.png';
import japan from '../turrists/japan.png';
import night from '../turrists/night.png';
import Place from './place';

class Places extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="places">
      <Place
        title='china'
        img={china}/>
      <Place
        title='paris'
        img={paris}/>
      <Place
        title='Japan'
        img={japan}/>
      </div> 
    );
  }
}
 
export default Places;