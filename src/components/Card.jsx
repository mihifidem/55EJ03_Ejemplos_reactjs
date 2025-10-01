// components/Card.jsx
import { Link } from "react-router-dom";

function Card({ id, name, price, children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        width: "200px",
      }}
    >
      <h3>{name}</h3>
      <p>{price} €</p>
      {children && <div>{children}</div>}
      <Link to={`/products/${id}`} style={{ color: "blue" }}>
        Ver detalles
      </Link>
    </div>
  );
}

export default Card;
