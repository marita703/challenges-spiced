import styled from "styled-components";

export default function BoxWithStyledComponent({ isBlack }) {
  return <StyledBox isBlack />;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;
