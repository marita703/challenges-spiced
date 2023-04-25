import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ handleToggle, rooms }) {
  return (
    <StyledLights>
      {rooms.map((room) => {
        return (
          <Light
            key={room.id}
            onToggle={handleToggle}
            name={room.name}
            room={room}
          />
        );
      })}
    </StyledLights>
  );
}
