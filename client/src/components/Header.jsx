import React from "react";
// import { Container } from "reactstrap";
import "../styles/header.sass";
class Header extends React.Component {
  handleClick = () => {
    this.props.onButtonClick();
  };
  render() {
    return (
      <section className="headerWrapper">
        <div className="burgerMenu" onClick={this.handleClick}>
          <i class="fas fa-bars"></i>
        </div>
        <div className="headerWrapper__tools"></div>
      </section>
    );
  }
}
export default Header;
