import React, { Component } from 'react';
import logo from './../images/icons8-soccer-filled-100.png';

export class HeaderComp extends Component {
  render() {
    return (
      <header className="container header">
        <img src={logo} alt="Let's play soccer" className="headerLogo"/>
      </header>
    )
  }
}

export default HeaderComp;
