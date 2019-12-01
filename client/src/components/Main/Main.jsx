import React from "react";
import "../../styles/main.sass";
// import { Card } from "./Card";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";
import PropTypes from "prop-types";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class Main extends React.Component {
  // state = {
  //   items: [
  //     { id: uuid(), name: "First Task", isCompleted: true },
  //     { id: uuid(), name: "Second Task", isCompleted: false },
  //     { id: uuid(), name: "Third Task", isCompleted: true },
  //     { id: uuid(), name: "Fourth Task", isCompleted: false }
  //   ],
  //   countToDo: 0,
  //   countCompleted: 0
  // };

  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { items } = this.props.item;
    // const { countToDo } = this.state;
    return (
      <section className="mainWrapper">
        <Container>
          <h2 className="title_toDo">To Do</h2>

          {/* make it in 1 component */}
          <ListGroup>
            <TransitionGroup className="mainWrapper__cards">
              {items
                .filter(item => item.isCompleted)
                .map(({ id, name }) => (
                  <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem className="card">
                      <div className="card__toDo">
                        <i class="far fa-clock"></i>
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={() => {
                            this.setState(state => ({
                              items: state.items.filter(item => item.id !== id)
                            }));
                          }}
                        >
                          &times;
                        </Button>
                      </div>
                      {name}{" "}
                    </ListGroupItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ListGroup>
          <h2 className="title_completed">Completed</h2>
          <ListGroup>
            <TransitionGroup className="mainWrapper__cards">
              {items
                .filter(item => !item.isCompleted)
                .map(({ id, name }) => (
                  <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem className="card">
                      <div className="card__completed">
                        <i class="far fa-check-circle"></i>Completed!
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={() => {
                            this.setState(state => ({
                              items: state.items.filter(item => item.id !== id)
                            }));
                          }}
                        >
                          &times;
                        </Button>
                      </div>
                      {name}{" "}
                    </ListGroupItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </section>
    );
  }
}

Main.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(Main);
