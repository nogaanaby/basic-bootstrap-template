import React, { Component } from 'react'
import day from '../turrists/day.png';
import china from '../turrists/china.png';

class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <nav className="navbar navbar-expand-lg navbar-green navbar-light">
        <a className="navbar-brand" href="#">
          <img src={china} width="100" height="100" alt=""/>
        </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">places</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> 
    );
  }
}
 
export default Header;