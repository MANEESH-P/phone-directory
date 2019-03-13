import React, { Component } from "react";
import Header from "./header";
import Contact from "./contact";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }
  deleteContact(contact) {
    var d = this.state.data;
    var index = d.indexOf(contact);
    if (index > -1) {
      d.splice(index, 1);
    }
    this.setState({
      data: d
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.toggleModal();
    var d = this.state.data;
    d.push({
      name: this.name.value,
      number: this.number.value
    });
    this.setState({
      data: d
    });
  }

  onChange(field, value) {
    this.setState({ [field]: value });
  }

  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState({ [fieldName]: fieldValue });
  }

  render() {
    var deleteContact = this.deleteContact;
    return (
      <div>
        <Header />
        <button
          type="button"
          class="btn btn-primary addcontact"
          onClick={this.toggleModal}
        >
          Add Contact +
        </button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add Contact</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Contact Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  innerRef={input => (this.name = input)}
                  onChange={this.onFieldChange.bind(this)}
                  data={this.state.data.name}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="number">Phone Number</Label>
                <Input
                  type="text"
                  id="number"
                  name="number"
                  innerRef={input => (this.number = input)}
                  onChange={this.onFieldChange.bind(this)}
                  data={this.state.data.number}
                />
              </FormGroup>
              <h4 className="font-weight-light">Subscriber to be added -</h4>
              <p>Name: {this.state.name}</p>
              <p>Number: {this.state.number}</p>
              <Button type="submit" value="submit" color="primary">
                Add
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <Contact
          deleteContact={deleteContact.bind(this)}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Main;
