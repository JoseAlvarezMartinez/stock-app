import React from "react";
import styles from "./Modal.module.css";
const Modal = () => {
  return (
    <div className={styles.modal}>
      <h2>Agregar Producto</h2>
      <input type="text" placeholder="Nombre del Producto" />
      <input type="number" placeholder="Cantidad comprada" />
      <input type="file" />
    </div>
  );
};

export default Modal;
