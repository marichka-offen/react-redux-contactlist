import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/layout/Header";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Contacts from "./components/contacts/Contacts";
import EditContact from "./components/contacts/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
