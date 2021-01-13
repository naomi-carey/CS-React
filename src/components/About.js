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
        As a teacher for the last 18 years I have had the priveledge to teach in
        many different environments and social settings. I began teaching in
        Ecuador, at the Colegio Americano de Quito, which is a private IB league
        school as a preschool teacher for about 5 years. After this I accepted a
        teaching position in Denver Public Schools as a bilingual teacher. I
        have taught English and Spanish throughout my and I am passionate about
        education and believe it is a fundamental right for everyone. I have
        worked with students from very different backgrounds and countries and
        this has allowed me to discover the richness and magnificence of each
        individual.{" "}
      </AboutParagraph>
      <br />{" "}
      <AboutParagraph>
        My commitment to my students is to provide them with the right amount of
        support and encouragement in order for them to develop the necessary
        skills and confidence to take their learning to the next level. I
        believe that the most important part of teaching is to believe in your
        students so they can believe in themselves. I want to facilitate the
        learning process so that each person learns based on their
        interests/abilities and at the same time help them develop skills in
        other needed areas . <br />
      </AboutParagraph>
      <AboutParagraph>
        To me education is a dialogue where we listen to one another to find the
        best that is within. I am extremely passionate about bilingualism
        because I believe that it allows people to get to know themselves and
        their culture from a different set of eyes. Language learning expands
        your vision and experience and allows more empathy. I have been teaching
        individual Spanish classes to adults for the past 2 years and really
        enjoy sharing my own culture while getting to know someone else's
        culture. I am recharged by sharing my experience with others while
        getting to know them as well.
      </AboutParagraph>
    </div>
  );
}
