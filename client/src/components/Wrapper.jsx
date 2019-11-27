import React from "react";
import SideNavBar from "./SideNavBar";
import Header from "./Header";
import Main from "./Main";
import "../styles/wrapper.sass";
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideNavBarOpen: true
    };
  }
  handleButtonClick = () => {
    this.setState({ isSideNavBarOpen: !this.state.isSideNavBarOpen });
  };

  render() {
    return (
      <section className="wrapper">
        <SideNavBar isOpen={this.state.isSideNavBarOpen} />
        <section
          className={`wrapper__rightSide ${
            this.state.isSideNavBarOpen ? "show" : "hide"
          }`}
        >
          <Header onButtonClick={this.handleButtonClick} />
          <Main />
        </section>
      </section>
    );
  }
}

export default Wrapper;
