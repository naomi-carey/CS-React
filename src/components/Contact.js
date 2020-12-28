import React from "react";
import styled from "styled-components";

const ContactInput = styled.input`
  width: 175px;
  height: 40px;
  border: black solid 1px;
  align-items: flex-start;
  font-size: 18px;
`;

export default function Contact() {
  return (
    <div>
      <form>
        <ContactInput placeholder="First Name"></ContactInput>
        <ContactInput placeholder="Last Name"></ContactInput>
        <ContactInput placeholder="Email"></ContactInput>
        <ContactInput placeholder="You Message"></ContactInput>
      </form>
    </div>
  );
}
