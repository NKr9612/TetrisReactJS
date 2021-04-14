import styled from "styled-components";
//stylowanie napisow wyswietlajacych
export const StyledPokaz = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid gray;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.endGame ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;
