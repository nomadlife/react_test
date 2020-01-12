import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          WEB <span className="badge badge-pill badge-secondary">{"?"}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
