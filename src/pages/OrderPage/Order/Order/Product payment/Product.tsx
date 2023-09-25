import React from "react";
import ProductPayment from "./ProductPayment";
import { useSelector } from "react-redux";

const Product: React.FC = () => {
  const dataFromCart = useSelector((state: any) => state.cartItemReduceer);
  console.log(dataFromCart);
  

  return (
    <div style={{ width: "100%" }}>
      <ProductPayment products={dataFromCart} />
    </div>
  );
};

export default Product;
