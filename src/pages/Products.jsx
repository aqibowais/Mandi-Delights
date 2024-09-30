import React, { useState } from "react";
import { ProductData } from "../constants/productData";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
const Products = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState([]);

  return (
    <div className="relative flex flex-row flex-wrap mx-auto justify-around">
      {ProductData.map((products,index) => {
        return (
          <ProductCard
          key={index}
            data={products}
            setIsModal={setIsModal}
            setCurrentProduct={setCurrentProduct}
          />
        );
      })}
      {isModal && <ProductModal onClose={setIsModal} currentProduct={currentProduct} />}
    </div>
  );
};

export default Products;
