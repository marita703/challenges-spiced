import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    { id: 1338, name: "🫑 pepper", color: "green" },
    { id: 1339, name: "🍎 apple", color: "red" },
    { id: 1340, name: "🍑 peach", color: "orange" },
    { id: 1341, name: "🫐 Blueberry", color: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, index) => {
        return <Card key={index} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
