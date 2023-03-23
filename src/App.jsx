import "./App.css";
import Card from "./components/Card";
import { productos } from "./productos";
import { useState, useEffect } from "react";
function App() {
  const [productosStock, setProductosStock] = useState(productos);
  const [productoFiltrado, setProductoFiltrado] = useState([]);
  const [productoInput, setProductoInput] = useState("");
  const [cardId, setCardId] = useState(null);
  useEffect(() => {
    const filtrado = productosStock.filter((producto) =>
      producto.nombre.toLowerCase().includes(productoInput)
    );
    setProductoFiltrado(filtrado);
  }, [productoInput]);
  return (
    <>
      <h1 className="stock">Control de Stock</h1>
      <input
        onChange={(e) => setProductoInput(e.target.value.toLowerCase())}
        type="text"
        placeholder="Buscar Producto"
      />
      <div className="CardContainer">
        {productoFiltrado &&
          productoFiltrado.map((producto) => (
            <Card setCardId={setCardId} cardId={cardId} key={producto.nombre} producto={producto} />
          ))}
        {!productoInput &&
          productosStock.map((producto) => (
            <Card key={producto.nombre} producto={producto} />
          ))}
        {productoFiltrado.length === 0 && <h2>El producto no esta en stock</h2>}
      </div>
    </>
  );
}

export default App;
