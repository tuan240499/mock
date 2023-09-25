import React, { useState } from "react";
import { toast, ToastContainer, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Order.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../../../redux/actions/CartItem.action";

function areAllFieldsFilled(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      if (value === undefined || value === null || value === "") {
        return false;
      }
    }
  }
  return true;
}

interface OrderDetails {
  orderValue: number;
  discount: number;
  deliveryFee: number;
  loyaltyPoints: number;
  totalAmount: number;
  orderDetail: {
    user: string;
    phoneNumber: string;
    province: string;
    district: string;
    address: string;
    addressType: string;
    note: string;
  };
}

const Order: React.FC<OrderDetails> = ({
  orderValue,
  discount,
  deliveryFee,
  loyaltyPoints,
  totalAmount,
  orderDetail,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentStatus, setPaymentStatus] = useState("");

  const handlePayment = () => {
    console.log(orderDetail);
    console.log(areAllFieldsFilled(orderDetail));
    if (!areAllFieldsFilled(orderDetail)) {
      toast.error("Vui lòng nhập đầy đủ thông tin", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return;
    }

    setPaymentStatus("Thanh toán thành công");
    toast.success("Thanh toán thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
    dispatch(clearCart());
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderDetails}>
        <h5>Chi tiết đơn hàng </h5>
        <div className={styles.item}>
          <span className={styles.label}>Giá trị đơn hàng:</span>
          <span className={styles.value}>{orderValue.toLocaleString()} ₫</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Chiết khấu:</span>
          <span className={styles.value}>{discount.toLocaleString()} ₫</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Phí giao hàng:</span>
          <span className={styles.value}>{deliveryFee.toLocaleString()} ₫</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Điểm KHTT:</span>
          <span className={styles.value}>+{loyaltyPoints}</span>
        </div>
        <hr />
        <div className={styles.item}>
          <span className={styles.label1}>Tổng tiền thanh toán:</span>
          <span className={styles.value}>{totalAmount.toLocaleString()} ₫</span>
        </div>
        <Button
          variant="contained"
          color="error"
          className={styles.button}
          onClick={handlePayment}
        >
          Thanh Toán
        </Button>
      </div>
      <ToastContainer transition={Zoom} />
    </div>
  );
};

export default Order;
