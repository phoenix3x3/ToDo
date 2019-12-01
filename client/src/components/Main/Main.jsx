import React from "react";
import "../../styles/global.sass";
import "../../styles/main.sass";
// import { Card } from "./Card";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../../actions/itemActions";
import PropTypes from "prop-types";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
class Main extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }
  onDeleteClick = id => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    return (
      <section className="mainWrapper">
        <Container>
          <h2 className="title_toDo">To Do</h2>

          {/* make it in 1 component */}
          <ListGroup>
            <TransitionGroup className="mainWrapper__cards">
              {items
                .filter(item => !item.isCompleted)
                .map(({ _id, name, description, date }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem className="card">
                      <div className="card__toDo">
                        <i className="far fa-clock"></i>
                        {date}
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(this, _id)}
                        >
                          &times;
                        </Button>
                      </div>
                      <h3>{name}</h3>
                      {description}
                    </ListGroupItem>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ListGroup>
          <h2 className="title_completed">Completed</h2>
          <ListGroup>
            <TransitionGroup className="mainWrapper__cards">
              {items
                .filter(item => item.isCompleted)
                .map(({ _id, name, description }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem className="card">
                      <div className="card__completed">
                        <i className="far fa-check-circle"></i>Completed!
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(this, _id)}
                        >
                          &times;
                        </Button>
                      </div>
                      <h3>{name}</h3>
                      {description}
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

export default connect(mapStateToProps, { getItems, deleteItem })(Main);
