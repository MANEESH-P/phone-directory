import React, { Component } from "react";
import { Fade } from "react-animation-components";
import { Media, Button } from "reactstrap";

class Contact extends Component {
  render() {
    var deleteContact = this.props.deleteContact;
    const leadercontent = this.props.data.map(contact => {
      return (
        <Fade in>
          <div className="col-12 mt-5">
            <Media tag="li">
              <Media body className="col-3 ml-12 contactcards">
                <Media heading>Name :{contact.name}</Media>
                <p>Number :{contact.number}</p>
                <Button
                  color="danger"
                  onClick={() => {
                    deleteContact(contact);
                  }}
                >
                  Delete
                </Button>
              </Media>
            </Media>
          </div>
        </Fade>
      );
    });
    return leadercontent;
  }
}
export default Contact;
