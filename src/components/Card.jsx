import styles from "./Card.module.css";
import { useState } from "react";
const Card = () => {
  const [cantidad, setCantidad] = useState(0);
  return (
    <div className={styles.card}>
      <h2 className={styles.tituloCard}>Titulo</h2>

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
  );
};

export default Card;
