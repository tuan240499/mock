import { Formik, Form, Field } from 'formik';
import React from 'react';
import styles from "./Payment.module.css"

interface PaymentFormValues {
  paymentMethod: string;
}

const initialValues: PaymentFormValues = {
  paymentMethod: '',
};

const Payment: React.FC = () => {
  const handleSubmit = (values: PaymentFormValues) => {
    console.log(values);

  };

  return (
    <div className={styles.Payment} >

    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <h5>Phương thức thanh toán</h5>
          <div className='form-group'>
        <label className={styles.PaymentLabel} >
          <Field type="radio" name="paymentMethod" value="cashOnDelivery" />
          <img src="https://canifa.com/assets/images/cod.svg" alt="" />
          Thanh toán khi nhận hàng
        </label>
        <br />

        <label className={styles.PaymentLabel} >
          <Field type="radio" name="paymentMethod" value="vnpay" />
          <img src="https://canifa.com/assets/images/vnpay.svg" alt="" />
          Thanh toán bằng VNpay
        </label>
        <br />

        <label className={styles.PaymentLabel} >
          <Field type="radio" name="paymentMethod" value="shoppePay" />
          <img src="https://canifa.com/assets/images/shopeepay.svg" alt="" />
          Thanh toán bằng shoppePay
        </label>
        <br />

          </div>

        
      </Form>
    </Formik>
    </div>
  );
};

export default Payment;