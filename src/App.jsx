import Card from "./components/Card/Card";

import dog from "./assets/dog.jpg";
export default function App() {
  return (
    // sending props to my  cards 
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Card titre="test" img={dog} link="/animation" />
      <Card titre="test2" img={dog} link="/popup" />
      <Card titre="test3" img={dog} link="counter" />
    </div>
  );
}
