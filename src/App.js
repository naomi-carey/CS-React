import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import Philosophy from "./components/Philosophy";
import About from "./components/About";
import Contact from "./components/Contact";

const H1 = styled.h1`
  text-align: center;
`;

export default class App extends Component {
  state = {
    showAbout: false,
    showBanner: true,
    showContact: false,
  };

  showBanner = () => {
    this.setState({
      showAbout: false,
      showBanner: true,
    });
  };

  showAbout = () => {
    this.setState({
      showAbout: true,
      showBanner: false,
    });
  };

  showContact = () => {
    this.setState({
      showAbout: false,
      showBanner: false,
      showContact: true,
    });
  };

  render() {
    return (
      <div>
        <Router>
          {" "}
          <div>
            <Navbar
              showAbout={this.showAbout}
              showBanner={this.showBanner}
              showContact={this.showContact}
            />
            <H1>Spanish Language Classes</H1>
            {this.state.showBanner && <Banner />}
            {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}{" "}
            <Switch>
              {}{" "}
              <Route path="/about">
                <About />
              </Route>{" "}
              <Route path="/contact">
                <Contact />{" "}
              </Route>{" "}
              <Route path="/philosophy">
                <Philosophy />{" "}
              </Route>{" "}
              <Route path="/">
                <Home />{" "}
              </Route>{" "}
            </Switch>{" "}
          </div>
          <Footer />{" "}
        </Router>
      </div>
    );

    // function Contact() {
    //   return <h2>Contact</h2>;
    // }
  }
}
