import styles from "./Card.module.css";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import CardImg from "../assets/cardImg.png";
const Card = () => {
  const [cantidad, setCantidad] = useState(0);
  return (
    <div className={styles.card}>
      <div className={styles.options}>
        <SlOptionsVertical color="#fff" />
      </div>
      <div className={styles.cardContainer}>
        <img
          src={CardImg}
          alt="Imagen del producto"
          className={styles.cardImg}
        />
      <div className={styles.linea}></div>
        <h2 className={styles.tituloCard}>Nombre del Producto</h2>

        <div className={styles.contenedorCantidades}>
          <button
            disabled={cantidad == 0}
            onClick={() => setCantidad((cantidad) => cantidad - 1)}
          >
            -
          </button>
          <p className={styles.cantidades}>{cantidad}</p>
          <button onClick={() => setCantidad((cantidad) => cantidad + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
