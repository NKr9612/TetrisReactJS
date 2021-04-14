import React from "react";
import { StyledEtap } from "./styles/StyledEtap";

import Komorka from "./Komorka";

const Etap = ({ stage }) => (
  <StyledEtap width={stage[0].length} height={stage.length}>
    {/* mapowanie nowej tablicy z wierszy i kolumn */}
    {stage.map((row) =>
      row.map((cell, x) => <Komorka key={x} type={cell[0]} />)
    )}
  </StyledEtap>
);

export default Etap;
