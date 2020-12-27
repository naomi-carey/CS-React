import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterMain = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-bottom: 10px;
  padding: 20px;
  background-color: #white;
  color: white;
`;

const Navbar = () => (
  /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
  <nav>
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
  </nav>
);

export default Navbar;
