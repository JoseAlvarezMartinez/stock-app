import "./App.css";
import Card from "./components/Card";
import { productos } from "./productos";
import { useState, useEffect } from "react";
function App() {
  const [cardId, setCardId] = useState(null);
  const [productosStock, setProductosStock] = useState(
    JSON.parse(localStorage.getItem("productos")) ?? productos
  );

  function eliminarProducto(id) {
    const filtrado = productosStock.filter(
      (producto) => producto.nombre !== id
    );
    setProductosStock(filtrado);
  }

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productosStock));
  }, [productosStock]);

  return (
    <>
      <h1 className="stock">Control de Stock</h1>
      <div className="inputContainer"></div>
      <div className="CardContainer">
        {productosStock.map((producto) => (
          <Card
            setCardId={setCardId}
            cardId={cardId}
            key={producto.nombre}
            producto={producto}
            productosStock={productosStock}
            eliminarProducto={eliminarProducto}
          />
        ))}
      </div>
    </>
  );
}

export default App;
