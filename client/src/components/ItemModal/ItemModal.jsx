import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import "../../styles/header.sass";
import { addItem } from "../../actions/itemActions";
// import { throws } from "assert";

class ItemModal extends React.Component {
  state = {
    modal: false,
    name: "",
    description: "", //
    date: new Date() //
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChangeName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeDesc = e => {
    this.setState({ [e.target.description]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      description: this.state.description,
      date: this.state.date
    };

    //add item via addItem action
    this.props.addItem(newItem);

    //close modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <button
          //   color="dark"
          //   style={{ marginBottom: "2rem" }}
          className="headerWrapper__button"
          onClick={this.toggle}
        >
          Add ToDo
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add ToDo</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">ToDo</Label>
                <Input
                  type="text"
                  name="name"
                  id="id"
                  placeholder="Add Task"
                  onChange={this.onChangeName}
                />
                <Label for="item">Description</Label>
                <Input
                  type="text"
                  name="name"
                  id="id"
                  placeholder="Add Decription"
                  onChange={this.onChangeDesc}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Task
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
