import React from "react";
import "../../styles/sidebar.sass";
export class Sidebar extends React.Component {
  render() {
    const { isOpen } = this.props;
    return (
      <section className={`wrapper__sideNavBar ${isOpen ? "show" : "hide"}`}>
        <div>
          <h1 className="wrapper__brandName">ToDo</h1>
        </div>
        <nav className="navBar">
          <div className="navBar__link">
            <a href="/">Home</a>
          </div>

          <div className="navBar__link">
            <a href="/">Settings</a>
          </div>
        </nav>
      </section>
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
