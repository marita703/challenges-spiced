import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialRooms = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useState(initialRooms);
  const [lightsOn, setLightsOn] = useState(0);

  function handleToggle(id) {
    const newRooms = rooms.map((room) =>
      room.id === id ? { ...room, isOn: !room.isOn } : room
    );
    setRooms(newRooms);
    setLightsOn(newRooms.filter((newRoom) => newRoom.isOn).length);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleToggle={handleToggle}
        rooms={rooms}
        lightsOn={lightsOn}
      />
    </Layout>
  );
}
