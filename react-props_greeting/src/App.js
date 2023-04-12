import "./styles.css";

export default function App() {
  return <Greeting name="Mar" />;
}

function Greeting({ name }) {
  return <h1>hello {name}</h1>;
}
