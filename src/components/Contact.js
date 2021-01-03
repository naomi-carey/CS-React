import React from "react";
import styled from "styled-components";
import contact from "./contact.jpg";
import ContactForm from "./ContactForm";

const ContactImg = styled.div`
  display: flex;
  height: 50vh;
  background: url(${contact}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  justify-content: flex-start;
`;

// const ContactInput = styled.input`
//   width: 175px;
//   height: 40px;
//   border: black solid 1px;
//   align-items: flex-start;
//   font-size: 18px;
// `;

export default function Contact() {
  return (
    <div>
      <ContactImg />
      <ContactForm />
      {/* <form>
        <ContactInput placeholder="First Name"></ContactInput>
        <ContactInput placeholder="Last Name"></ContactInput>
        <ContactInput placeholder="Email"></ContactInput>
        <ContactInput placeholder="You Message"></ContactInput>
      </form> */}
    </div>
  );
}
