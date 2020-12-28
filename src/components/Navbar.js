import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterMain = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-bottom: 10px;
  padding: 30px;
  background-color: #383838;
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #edd8a1;
     {
      -webkit-transition: color 1s;
      -moz-transition: color 1s;
      -ms-transition: color 1s;
      -o-transition: color 1s;
      transition: color 1s;
    }
    text-decoration: underline;
  }
`;

const Navbar = (props) => (
  /* IF YOU CHANGE THE LINK TO... REMEMBER TO CHANGE IT ON APP.JS ROUTE AS WELL. */
  <nav>
    <FooterMain>
      <li>
        <StyledLink to="/" onClick={props.showBanner}>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/philosophy" onClick={props.showBanner}>
          Philosophy
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/about" onClick={props.showAbout}>
          About
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/contact" onClick={props.showBanner}>
          Contact
        </StyledLink>
      </li>
    </FooterMain>
  </nav>
);

export default Navbar;
