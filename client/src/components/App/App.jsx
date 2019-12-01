import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "../store";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { Main } from "../Main";
import { Settings } from "../Settings";
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
      // <Provider store={store}>
      <Router>
        <section className="wrapper">
          <Sidebar isOpen={this.state.isSideNavBarOpen} />
          <section
            className={`wrapper__rightSide ${
              this.state.isSideNavBarOpen ? "show" : "hide"
            }`}
          >
            <Header onButtonClick={this.handleButtonClick} />
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </section>
        </section>
      </Router>
      // </Provider>
    );
  }
}
