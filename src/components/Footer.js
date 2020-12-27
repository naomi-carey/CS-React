import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { SiSkypeforbusiness } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";

const FooterMain = styled.div`
  background-color: #383838;
  padding-top: 3em;
  position: relative;
  color: white;
  padding: 5px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListUnstyled = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;
export default function Footer() {
  return (
    <FooterMain>
      <div className="container">
        <Row>
          {/* Column 1 */}
          <div className="col">
            <h4>Spanish with Carla Inc.</h4>
            <ListUnstyled>
              <li>(800) 555-1224</li>
              <li>123 Teach St.</li>
              <li>Boulder, Colorado USA</li>
              <li>
                {" "}
                <HiOutlineMail />
              </li>
            </ListUnstyled>
          </div>
          {/* Colulmn 2 */}
          <div className="col">
            <h4>Social Media</h4>
            <ListUnstyled>
              <li>
                <GoMarkGithub />
              </li>
              <li>
                <AiFillTwitterCircle />
              </li>
              <li>
                <SiSkypeforbusiness />
              </li>
            </ListUnstyled>
          </div>

          {/* Column 3  */}

          <div className="col">
            <h4>FAQ</h4>
            <ListUnstyled>
              <li>Practical tips for studying</li>
              <li>Realistic goals</li>
              <li>Host Families</li>
            </ListUnstyled>
          </div>
        </Row>
        {/* Copyright */}
        <div className="different">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Spanish with Carla Inc | All rights
            reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </FooterMain>
  );
}
