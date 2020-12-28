import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input";

const H3 = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  font-style: italic;
`;

const Bullets = styled.li`
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  margin-left: 30px;

  font-size: 18px;
`;

const P = styled.p`
  padding: 10px;

  font-size: 18px;
`;
const Button = styled.button`
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
const Div = styled.div`
  text-align: center;
`;

export default class Home extends Component {
  state = {
    showInput: false,
  };

  showInput = () => {
    this.setState({
      showInput: !this.state.showInput,
    });
  };

  render() {
    return (
      <div>
        <H3>
          They say learning a new language is like growing a second soul...what
          are you waiting for!
        </H3>
        <P>Offering private classes, semi-private clases and group classes.</P>
        <Bullets>
          <strong>Private Classes</strong> – Are the most effective and
          convenient way of learning Spanish as it gives you the freedom to
          learn at your own pace and schedule your classes around your busy
          schedule.
        </Bullets>
        <Bullets>
          <strong>Semi-Private</strong> - Are ideal for couples, siblings,
          friends, family members, or work colleagues with similar Spanish level
          who are looking to learn Spanish in a small group.
        </Bullets>
        <Bullets>
          <strong>Group Classes</strong> - If you are looking for a more
          affordable option but still the quality one-one attention, a small
          group is the way to go.
        </Bullets>
        <Div>
          <Button onClick={this.showInput}>Schedule Here</Button>
        </Div>
        {this.state.showInput && <Input />}
      </div>
    );
  }
}
