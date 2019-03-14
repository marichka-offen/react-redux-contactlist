import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // CHECK FOR ERRORS
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    // SUBMIT CONTACT //

    // CLEAR STATE
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // RETURN TO HOMEPAGE AFTER SUBMIT
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <TextInputGroup
              label="Name:"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.handleChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email:"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.handleChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone:"
              phone="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.handleChange}
              error={errors.phone}
            />

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-success btn-block mt-5"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
