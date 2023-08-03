import React, { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import Products from "../api/products.json";
import ProductItem from "./ui/ProductItem";

function Favorites() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Products);
  }, []);

  return (
    <div>
      <Title>Favoriler</Title>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden ">
        {product.length &&
          product.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Favorites;