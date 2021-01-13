import React from "react";
import hola from "./hola.jpg";
import styled from "styled-components";

const BannerImg = styled.div`
  display: flex;
  height: 60vh;
  background: url(${hola}) center center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 10px;
  margin-bottom: 15px;
`;
export default function Banner() {
  return (
    <div>
      <BannerImg />
    </div>
  );
}
