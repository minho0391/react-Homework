import "./App.css";
import Card from "./components/Card";

function App() {
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: "EZTECH",
  };

  const { name, price, brand } = product;

  return (
    <div>
      <Card name={name} price={price} brand={brand} />
    </div>
  );
}

export default App;
