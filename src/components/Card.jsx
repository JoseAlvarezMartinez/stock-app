import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import CardImg from "../assets/cardImg.png";
const Card = ({ producto }) => {
  const [cantidad, setCantidad] = useState(producto.cantidad);
  const [opciones, setOpciones] = useState(false);

  useEffect(() => {
    producto.cantidad = cantidad;
  }, [cantidad]);
  return (
    <div className={styles.card}>
      <div className={styles.options}>
        <SlOptionsVertical
          onClick={() => setOpciones(!opciones)}
          color="#fff"
        />
      </div>
      <div className={styles.test}>
        <div
          className={`${
            opciones ? styles.opcionesActivas : styles.opcionesInactivas
          } `}
        >
          <p>Editar Cantidades</p>
          <p>Eliminar Articulo</p>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <img
          src={producto.img}
          alt="Imagen del producto"
          className={styles.cardImg}
        />
        <div className={styles.linea}></div>
        <div>
          <h2 className={styles.tituloCard}>{producto.nombre}</h2>

          <div className={styles.contenedorCantidades}>
            <button
              disabled={cantidad == 0}
              onClick={() => setCantidad(cantidad - 1)}
            >
              -
            </button>
            <p className={styles.cantidades}>{cantidad}</p>
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
