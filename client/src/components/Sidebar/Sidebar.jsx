import React from "react";
import "../../styles/sidebar.sass";
import { Link } from "react-router-dom";

export class Sidebar extends React.Component {
  render() {
    const { isOpen } = this.props;
    return (
      <div className={`wrapper__sideNavBar ${isOpen ? "show" : "hide"}`}>
        <div>
          <h1 className="wrapper__brandName">ToDo</h1>
        </div>
        <nav className="navBar">
          <Link to="/" className="navBar__link">
            Home
          </Link>
          <Link to="/settings" className="navBar__link">
            Settings
          </Link>
        </nav>
      </div>
    );
  }
}
// class SideNavBar extends React.Component {
//   render() {
//     const { isOpen } = this.props;
//     return (
//       <Collapse isOpen={isOpen} className="wrapper__sideNavBar">
//         <div className="wrapper__brandName">
//           <h1>To Do</h1>
//         </div>
//         <nav className="nav-bar">
//           <a className="nav-bar__link" href="/">
//             Home
//           </a>
//           <a className="nav-bar__link" href="/">
//             Settings
//           </a>
//         </nav>
//       </Collapse>
//     );
//   }
// }
