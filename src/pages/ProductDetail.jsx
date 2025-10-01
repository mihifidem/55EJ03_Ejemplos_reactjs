// pages/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";

function ProductDetail() {
  const { id } = useParams(); //leemos el id de la URL
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Producto no encontrado </h2>
        <Link to="/products">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <p>
        <strong>Precio:</strong> {product.price} €
      </p>
      <p>
        <strong>Descripción:</strong> {product.description}
      </p>

      <Link to="/products">Volver al catálogo</Link>
    </div>
  );
}

export default ProductDetail;
