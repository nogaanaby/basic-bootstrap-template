import React, { Component } from 'react'
import day from '../turrists/day.png';
import china from '../turrists/china.png';
import location from '../turrists/location.png';

class Header extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      openMobileNav: false
    }
  }

  render() {
    return ( 
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-green navbar-light">
        <a className="navbar-brand" href="#home">
          <img src={china} width="100" height="100" alt=""/>
          Tourists Guide
        </a>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbar_collapse" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse' id="navbar_collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home"
                onClick={() => this.props.scrollTo('home')}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#places">places</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"
                onClick={() => this.props.scrollTo('contact')}>contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> 
    );
  }
}
 
export default Header;