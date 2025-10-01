// pages/Products.jsx
import Card from "../components/Card";
import { products } from "../../data/products";

function Products() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Catálogo de Productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <Card key={p.id} id={p.id} name={p.name} price={p.price}>
            {/* Children opcional */}
            <small>{p.description.slice(0, 30)}...</small>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
