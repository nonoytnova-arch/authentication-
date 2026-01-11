import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="detail">
      <img src={product.image} />

      <div>
        <h2>{product.title}</h2>

        <div className="rating">
          {"★".repeat(Math.round(product.rating.rate))}
        </div>

        <h3 className="price">₹{Math.round(product.price * 80)}</h3>

        <p>{product.description}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
