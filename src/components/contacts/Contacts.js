import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Fin the Human",
        email: "fin@ooo.com",
        phone: "111-111-1111"
      },
      {
        id: 2,
        name: "Jake the Dog",
        email: "jake@ooo.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "BMO",
        email: "bmo@ooo.com",
        phone: "333-333-3333"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
