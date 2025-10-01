// components/Card.jsx
import { Link } from "react-router-dom";
import styles from '../Card.module.css'

function Card({ id, name, price, children }) {
  return (
    <div className={styles.card}
      // style={{
      //   border: "1px solid #ccc",
      //   borderRadius: "8px",
      //   padding: "1rem",
      //   margin: "1rem",
      //   width: "200px",
      // }}
    >
      <h3 className="card">{name}</h3>
      <p>{price} €</p>
      {children && <div>{children}</div>}
      <Link to={`/products/${id}`} style={{ color: "fucsia"}}>
        Ver detalles
      </Link>

      
    </div>
  );
}

export default Card;
