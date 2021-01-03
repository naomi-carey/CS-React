import React, { useState } from "react";
import styled from "styled-components";

const ContactInput = styled.input`
  width: 175px;
  height: 40px;
  border: black solid 1px;
  align-items: flex-start;
  font-size: 18px;
  margin-left: 20px;
`;

const ContactMessage = styled.textarea`
  width: 375px;
  height: 140px;
  border: black solid 1px;
  align-items: flex-start;
  font-size: 18px;
`;

const ContactButton = styled.button`
  background-color: #383838;
  border-radius: 25px;
  border: 1px solid black;
  width: 120px;
  height: 50px;
  text-align: center;
  color: white;
  font-family: "Oswald", sans-serif;
  
  box-shadow: 1px 1px;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover {
    color: #edd8a1;
     {
      -webkit-transition: color 1s;
      -moz-transition: color 1s;
      -ms-transition: color 1s;
      -o-transition: color 1s;
      transition: color 1s;
  
`;

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <ContactInput type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <ContactInput type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <ContactMessage id="message" required />
      </div>
      <ContactButton type="submit">{status}</ContactButton>
    </form>
  );
};

export default ContactForm;
