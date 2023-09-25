import React from "react";
import styles from "./ProductPayment.module.css";

interface Product {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  imageUrl: string;
  product_name: string;
  sale: any;
  isSale: boolean;
  priceSale: number;
  qty: number;
}

interface FormProps {
  products: Product[];
}

const ProductPayment: React.FC<FormProps> = ({ products }) => {
  return (
    <div className={styles.formContainer}>
      <h5>Sản Phẩm </h5>
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <div className={styles.productContainer}>
            <img
              src={product.imageUrl}
              alt={product.product_name}
              className={styles.productImage}
            />
            <div className={styles.productDetails}>
              <p className={styles.productName}>{product.product_name}</p>
              <p className={styles.productInfo}>
                {product.color} | {product.size}
              </p>
              <div className={styles.priceQuantityContainer}>
                <div className={styles.flexContainer}>
                  <p className={styles.price}>
                    Giá:{" "}
                    {product.sale.isSale
                      ? product.sale.priceSale
                      : product.price}
                    đ
                  </p>
                  <div className={styles.center}></div>
                </div>
                <p className={styles.quantity}>Số lượng: {product.qty}</p>
              </div>
            </div>
          </div>
          {index !== products.length - 1 && products.length > 1 && (
            <hr className={styles.separator} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductPayment;
