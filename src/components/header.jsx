import React, { Component } from 'react'
import day from '../turrists/day.png';
import china from '../turrists/china.png';

class Header extends Component {
  
  state = { 
    openMobileNav: false
  }

  render() { 
    return ( 
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-green navbar-light">
        <a className="navbar-brand" href="#">
          <img src={china} width="100" height="100" alt=""/>
        </a>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbar_collapse" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse' id="navbar_collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link btn-outline-info" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-info" href="#">places</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-info" href="#">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn-outline-info" href="#">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> 
    );
  }
}
 
export default Header;