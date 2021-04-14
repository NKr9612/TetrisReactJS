import styled from "styled-components";
//stylowanie siatki
export const StyledEtap = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  padding: 10px;
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #444;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;
