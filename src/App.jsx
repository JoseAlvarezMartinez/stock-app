import "./App.css";
import Card from "./components/Card";
import { productos } from "./productos";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
function App() {
  const [modal, setModal] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [inputBuscador, setInputBuscador] = useState("");
  const [productosStock, setProductosStock] = useState(
    JSON.parse(localStorage.getItem("productos")) ?? productos
  );
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  function eliminarProducto(id) {
    const filtrado = productosStock.filter(
      (producto) => producto.nombre !== id
    );
    setProductosStock(filtrado);
  }

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productosStock));
  }, [productosStock]);

  useEffect(() => {
    const filtrando = productosStock.filter((producto) =>
      producto.nombre.toLowerCase().includes(inputBuscador)
    );

    setProductosFiltrados(filtrando);
  }, [inputBuscador]);
  return (
    <main className="productosMain">
      <h1 className="stock">Control de Stock</h1>
      <div className="inputContainer">
        <input
          onChange={(e) => setInputBuscador(e.target.value.toLowerCase())}
          type="text"
          placeholder="Buscar Producto..."
        />
      </div>
      <div className="inputContainer"></div>
      <div className="CardContainer">
        {inputBuscador.length > 0
          ? productosFiltrados.map((producto) => (
              <Card
                setCardId={setCardId}
                cardId={cardId}
                key={producto.nombre}
                producto={producto}
                productosStock={productosStock}
                eliminarProducto={eliminarProducto}
              />
            ))
          : productosStock.map((producto) => (
              <Card
                setCardId={setCardId}
                cardId={cardId}
                key={producto.nombre}
                producto={producto}
                productosStock={productosStock}
                eliminarProducto={eliminarProducto}
              />
            ))}

        {productosFiltrados.length === 0 && (
          <h2 className="noStock">El producto no se encuentra en stock.</h2>
        )}
      </div>
      <div className="agregarProducto" onClick={() => setModal(true)}>
        +
      </div>
      {modal && <Modal />}
    </main>
  );
}

export default App;
