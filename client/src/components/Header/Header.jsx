import React from "react";
import "../../styles/header.sass";
// import { Media } from "reactstrap";

export class Header extends React.Component {
  handleClick = () => {
    this.props.onButtonClick();
  };
  render() {
    return (
      <section className="headerWrapper">
        <div className="burgerMenu" onClick={this.handleClick}>
          <i class="fas fa-bars"></i>
        </div>
        <div className="headerWrapper__tools">
          <button className="headerWrapper__button">Add ToDo</button>
          {/* <Media left href="#">
            <Media object data-src="../../assets/avatar.png" alt="avatar" />
          </Media> */}
        </div>
      </section>
    );
  }
}
