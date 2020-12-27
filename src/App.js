import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// const FooterMain = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   list-style-type: none;
//   margin-bottom: 10px;
//   padding: 20px;
//   background-color: #white;
//   color: white;
// `;

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <nav>
          <FooterMain>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/philosophy">Philosophy</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </FooterMain>
        </nav> */}
        <Banner />
        <Footer />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/philosophy">
            <Philosophy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
function Philosophy() {
  return <h2>Philosophy</h2>;
}

export default App;
