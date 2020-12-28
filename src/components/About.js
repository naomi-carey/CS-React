import React from "react";
import carla from "./carla.jpg";
import styled from "styled-components";

const AboutImg = styled.div`
  display: flex;
  height: 50vh;
  background: url(${carla}) center center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  justify-content: flex-start;
`;

const AboutParagraph = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`;

export default function About() {
  return (
    <div>
      <AboutImg />

      <AboutParagraph>
        As an early education teacher for the last 15 years, I have partnered
        with our community to build relationships and support our students with
        social emotional resources and leadership skills.
      </AboutParagraph>
    </div>
  );
}
