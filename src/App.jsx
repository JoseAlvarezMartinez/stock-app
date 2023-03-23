import "./App.css";
import Card from "./components/Card";
import { productos } from "./productos";
import { useState, useEffect } from "react";
function App() {
  const [productosArray, setProductosArray] = useState([]);

  return (
    <>
      <h1 className="stock">Control de Stock</h1>
      <div className="CardContainer">
        {productos.map((producto) => (
          <Card producto={producto} />
        ))}
      </div>
    </>
  );
}

export default App;
