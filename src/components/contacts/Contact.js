import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  handleDelete = id => {
    // DELETE CONTACT
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down ml-1"
            style={{ cursor: "pointer" }}
          />

          <div style={{ float: "right" }}>
            <Link to={`/contact/edit/${id}`}>
              <i className="fas fa-pencil-alt p-2 text-dark" />
            </Link>
            <i
              className="fas fa-times text-danger"
              onClick={this.handleDelete.bind(this, id)}
            />
          </div>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
