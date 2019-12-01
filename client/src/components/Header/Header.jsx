import React from "react";
import "../../styles/header.sass";
// import { Media } from "reactstrap";
import ItemModal from "../ItemModal/ItemModal";
export class Header extends React.Component {
  handleClick = () => {
    this.props.onButtonClick();
  };
  render() {
    return (
      <section className="headerWrapper">
        <div className="burgerMenu" onClick={this.handleClick}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="headerWrapper__tools">
          {/* <button className="headerWrapper__button">Add ToDo</button> */}
          <ItemModal />
        </div>
      </section>
    );
  }
}
