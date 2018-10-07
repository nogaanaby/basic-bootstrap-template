import React, { Component } from 'react'
import Places from './places'

import china from '../turrists/china.png';
import paris from '../turrists/paris.png';
import japan from '../turrists/japan.png';
import landmark from '../turrists/landmark.png';
import liberty from '../turrists/liberty.png';
import roma from '../turrists/roma.png';
import london from '../turrists/london.png';
import night from '../turrists/night.png';

class Carusel extends Component {
  constructor(props){
    super(props);
    this.state = { 

    }
  }
  render() { 
    return ( 
      <div className="carusel">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <h2 className="carusel-title">What's Your Favorite Place?</h2>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Places className="d-block w-100"
                firstPlace={paris}
                secondPlace={china}
                thirdPlace={japan}
                firstPlaceTitle='Paris'
                secondPlaceTitle='China'
                thirdPlaceTitle='Japan'/>
            </div>
            <div className="carousel-item">
              <Places className="d-block w-100"
                firstPlace={landmark}
                secondPlace={china}
                thirdPlace={liberty}
                firstPlaceTitle='Amsterdam'
                secondPlaceTitle='China'
                thirdPlaceTitle='Liberty'/>
            </div>
            <div className="carousel-item">
              <Places className="d-block w-100"
                firstPlace={london}
                secondPlace={japan}
                thirdPlace={roma}
                firstPlaceTitle='london'
                secondPlaceTitle='Japan'
                thirdPlaceTitle='Roma'/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div> 
    );
  }
}
 
export default Carusel;