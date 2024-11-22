import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        console.log("Response", response);
        setProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <div className="product-container">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-desctription">{product.description0}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
