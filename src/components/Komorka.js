import React from "react";
import { StyledKomorka } from "./styles/StyledKomorka";
import { TETROMINOS } from "../tetrominos";

// React.memo makes sure we only re-render the changed cells
const Komorka = ({ type }) => (
  <StyledKomorka type={type} color={TETROMINOS[type].color}>
    {console.log("rerender cell")}
  </StyledKomorka>
);

export default React.memo(Komorka);
