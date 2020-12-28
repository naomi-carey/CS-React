import React from "react";
import styled from "styled-components";

const InputMain = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputArea = styled.input`
  margin-right: 3px;
  border: 1px black solid;
  height: 30px;
  width: 150px;
  font-size: 18px;
`;

const SubmitDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SubmitButton = styled.button`

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

const InputText = styled.input`
  width: 475px;
  height: 100px;
  border: black solid 1px;
  align-items: flex-start;
  font-size: 18px;
`;

export default function Input() {
  return (
    <div className="input-form">
      <form>
        <InputMain>
          <InputArea placeholder="First Name"></InputArea>
          <InputArea placeholder="Last Name"></InputArea>
          <InputArea placeholder="Email"></InputArea>
        </InputMain>

        <InputMain>
          <InputText placeholder="Message here"></InputText>
        </InputMain>
      </form>
      <SubmitDiv>
        <SubmitButton>Submit</SubmitButton>
      </SubmitDiv>
    </div>
  );
}
