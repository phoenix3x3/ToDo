import React from "react";
import "../../styles/header.sass";
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
          <button className="headerWrapper__button">
            Add ToDo
            {/* <span className="summary-symbol">+</span>Add ToDo */}
          </button>
          <div>
            <img src="" alt="avatar" />
          </div>
        </div>
      </section>
    );
  }
}
