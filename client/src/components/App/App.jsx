import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { Main } from "../Main";
import "../../styles/global.sass";
import "../../styles/app.sass";
import "bootstrap/dist/css/bootstrap.min.css";
export class App extends React.Component {
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
        <Sidebar isOpen={this.state.isSideNavBarOpen} />
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
