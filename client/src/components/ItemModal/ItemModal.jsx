import React from "react";
import {
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
import "../../styles/itemModal.sass";
class ItemModal extends React.Component {
  state = {
    modal: false,
    name: "",
    isCompleted: false,
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
        <button className="headerWrapper__button" onClick={this.toggle}>
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
                  name="description"
                  id="id"
                  placeholder="Add Decription"
                  onChange={this.onChangeDesc}
                />
                <button
                  className="button__addTask"
                  // style={{ marginTop: "2rem"; background-color: "rgb(14,26,53)" }}
                >
                  Add Task
                </button>
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
