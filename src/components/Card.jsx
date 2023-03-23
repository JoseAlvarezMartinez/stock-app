import styles from "./Card.module.css";
import { useState } from "react";
const Card = () => {
  const [cantidad, setCantidad] = useState(0);
  return (
    <div className={styles.card}>
      <h2 className={styles.tituloCard}>Titulo</h2>

      <button>-</button>
      <p></p>
      <button>+</button>
    </div>
  );
};

export default Card;
