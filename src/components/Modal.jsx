import { useState } from "react";
import styles from "./Modal.module.css";
import { productos } from "../productos";

const Modal = ({ setModal, setProductosStock }) => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    cantidad: 0,
    img: "",
  });
  return (
    <div className={styles.modal}>
      <h2>Agregar Producto</h2>
      <input
        onChange={(e) =>
          setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
        }
        type="text"
        placeholder="Nombre del Producto"
      />
      <input type="number" placeholder="Cantidad comprada" />
      <input
        type="file"
        onChange={(e) =>

          console.log(e.target.value)
        }
      />

      <button
        onClick={() => {
          setProductosStock((productoStock) => [
            ...productoStock,
            nuevoProducto,
          ]);
          setModal((modal) => setModal(!modal));
        }}
      >
        Agregar Producto
      </button>
    </div>
  );
};

export default Modal;
