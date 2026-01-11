import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="products">
      {products.map((item) => (
        <Link to={`/product/${item.id}`} key={item.id} className="card">
          <img src={item.image} />
          <h4>{item.title}</h4>

          <div className="rating">
            {"★".repeat(Math.round(item.rating.rate))}
          </div>

          <p className="price">₹{Math.round(item.price * 18)}</p>
        </Link>
      ))}
    </div>
  );
};

export default Product;
