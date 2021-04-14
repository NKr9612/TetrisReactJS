import React from "react";
import styled from "styled-components";

const StyledPrzyciskStart = styled.button`
  box-sizing: border-box;

  margin: 20px 0 20px 0;
  padding: 30px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: black;
  background: gray;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
`;

const PrzyciskStart = ({ callback }) => (
  <StyledPrzyciskStart onClick={callback}>Zacznij grę!</StyledPrzyciskStart>
);

export default PrzyciskStart;
