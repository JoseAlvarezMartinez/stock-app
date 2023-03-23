import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import CardImg from "../assets/cardImg.png";
const Card = ({ setCardId, cardId, producto, productosStock }) => {
  const [cantidad, setCantidad] = useState(producto.cantidad);
  const [opciones, setOpciones] = useState(false);
  console.log(producto?.img)
  useEffect(() => {
    producto.cantidad = cantidad;
    localStorage.setItem("productos", JSON.stringify(productosStock));
  }, [cantidad]);
  useEffect(() => {
    if (cardId == producto.nombre) {
      return setOpciones(true);
    }
    setOpciones(false);
  }, [cardId]);
  return (
    <div className={styles.card}>
      <div className={styles.options}>
        <SlOptionsVertical
          onClick={() => {
            setCardId(producto.nombre);
            setOpciones(!opciones);
          }}
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
