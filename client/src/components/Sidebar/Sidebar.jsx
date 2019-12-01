import React from "react";
import "../../styles/sidebar.sass";
import { Link } from "react-router-dom";

export class Sidebar extends React.Component {
  render() {
    const { isOpen } = this.props;
    return (
      <div className={`wrapper__sideNavBar ${isOpen ? "show" : "hide"}`}>
        <div>
          <h1 className="wrapper__brandName">
            <i class="far fa-circle"></i>ToDo
          </h1>
        </div>
        <nav className="navBar">
          <Link to="/" className="navBar__link home">
            <i class="fas fa-home"></i>Home
          </Link>
          <Link to="/settings" className="navBar__link settings">
            <i class="fas fa-cog"></i>Settings
          </Link>
        </nav>
      </div>
    );
  }
}
