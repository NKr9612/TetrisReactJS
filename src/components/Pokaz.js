import React from "react";
import { StyledPokaz } from "./styles/StyledPokaz";

const Pokaz = ({ gameOver, text }) => (
  <StyledPokaz gameOver={gameOver}>{text}</StyledPokaz>
);

export default Pokaz;
