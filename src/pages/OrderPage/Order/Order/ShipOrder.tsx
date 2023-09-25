import { useState } from "react";

import { ReactFormik } from "./FormShip/ShipmentDetails";
import styles from "./ShipOrder.module.css";
import Payment from "./Payment/Payment";
import Product from "./Product payment/Product";
import Order from "./OrderForm/Order";
import { useSelector } from "react-redux";
import { useEffect } from "react";

type TOrderDetail = {
  user: string;
  phoneNumber: string;
  province: string;
  district: string;
  address: string;
  addressType: string;
  note: string;
};

const initOrderDetail: TOrderDetail = {
  user: "",
  phoneNumber: "",
  province: "",
  district: "",
  address: "",
  addressType: "",
  note: "",
};

const ShipOrder = () => {
  const dataFromCart = useSelector((state: any) => state.cartItemReduceer);
  const totalPrice = dataFromCart.reduce((acc: any, item: any) => {
    return acc + item.price * item.qty;
  }, 0);
  const totalPriceAfterSale = dataFromCart.reduce((acc: any, item: any) => {
    return acc + (item.sale.isSale ? item.sale.priceSale : 0) * item.qty;
  }, 0);

  const [orderDetail, setOrderDetail] = useState<TOrderDetail>(initOrderDetail);

  const updateFieldOrderDetail = (field: Partial<TOrderDetail>) => {
    setOrderDetail((prev) => ({ ...prev, ...field }));
  };

  useEffect(() => {
    console.log(orderDetail);
  }, [orderDetail]);

  return (
    <>
      <div className={styles.formContainer}>
        <div>
          <ReactFormik
            orderDetail={orderDetail}
            updateField={updateFieldOrderDetail}
          />

          <Payment />
          <Product />
        </div>
        <div className={`${styles.paymentContainer} order-container`}>
          <Order
            orderValue={totalPrice}
            discount={totalPrice - totalPriceAfterSale}
            deliveryFee={0}
            loyaltyPoints={0}
            totalAmount={totalPriceAfterSale}
            orderDetail={orderDetail}
          />
        </div>
      </div>
    </>
  );
};

export default ShipOrder;
