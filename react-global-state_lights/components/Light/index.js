import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, onToggle, room }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(room.id);
      }}
      isOn={room.isOn}
    >
      <Icon isOn={room.isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{room.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
