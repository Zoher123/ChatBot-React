import { Component } from "react";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    const navStyle = {
      color: "white",
    };
    return (
      <>
        <nav className="nav">
          <h3>Logo</h3>
          <ul className="nav-links">
            <Link style={navStyle} to="/ ">
              Home
            </Link>
            <Link style={navStyle} to="/about ">
              About
            </Link>
            <Link style={navStyle} to="/chat ">
              chat
            </Link>
          </ul>
        </nav>
      </>
    );
  }
}
