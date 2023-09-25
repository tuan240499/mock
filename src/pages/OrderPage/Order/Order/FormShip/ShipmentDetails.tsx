import React from "react";
import styles from "./ShipmentDetails.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

interface UserForm {
  user: string;
  phoneNumber: string;
  province: string;
  district: string;
  address: string;
  addressType: string;
  note: string;
}

export const ReactFormik: React.FC = ({
  orderDetail,
  updateField,
}: {
  orderDetail: UserForm;
  updateField: (field: Partial<UserForm>) => void;
}) => {
  const VietnamProvinces: string[] = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Hải Phòng",
    "Đà Nẵng",
    "Cần Thơ",
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bạc Liêu",
    "Bắc Kạn",
    "Bắc Giang",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Dương",
    "Bình Định",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];

  const VietnamDistricts: string[] = {
    "Hà Nội": [
      "Ba Đình",
      "Hoàn Kiếm",
      "Hai Bà Trưng",
      "Đống Đa",
      "Cầu Giấy",
      "Thanh Xuân",
      "Hà Đông",
      "Long Biên",
      "Nam Từ Liêm",
      "Bắc Từ Liêm",
      "Tây Hồ",
      "Hoàng Mai",
      "Thanh Trì",
      "Gia Lâm",
      "Sóc Sơn",
      "Đông Anh",
      "Mê Linh",
    ],
  };

  const validate = (values: UserForm) => {
    console.log(values);
    let errors: Record<string, string> = {};

    if (!values.user) {
      errors.user = "Vui lòng nhập họ tên người nhận hàng!";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "Vui lòng nhập số điện thoại người nhận hàng!";
    }

    if (!values.province) {
      errors.province = "Vui lòng chọn tỉnh thành!";
    }

    if (!values.district) {
      errors.district = "Vui lòng chọn quận huyện!";
    }

    if (!values.address) {
      errors.address = "Vui lòng nhập địa chỉ người nhận!";
    }

    if (!values.addressType) {
      errors.addressType = "Vui lòng chọn loại địa chỉ người nhận!";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={orderDetail}
      validate={validate}
      onSubmit={(values: UserForm, formikHelpers) => {
        console.log(values, formikHelpers);
        formikHelpers.resetForm();
      }}
    >
      {() => (
        <Form>
          <div className={styles.formShip}>
            <h5>Thông Tin Giao Hàng</h5>
            <div className="form-group">
              <label
                htmlFor="user"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Họ và Tên
                <Field
                  type="text"
                  name="user"
                  className="form-control"
                  value={orderDetail.user}
                  onChange={(e) => updateField({ user: e.target.value })}
                />
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="phoneNumber"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Số điện thoại
                <Field
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  value={orderDetail.phoneNumber}
                  onChange={(e) => updateField({ phoneNumber: e.target.value })}
                />
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="province"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Tỉnh / Thành phố
                <Field
                  as="select"
                  name="province"
                  className="form-control"
                  value={orderDetail.province}
                  onChange={(e) => updateField({ province: e.target.value })}
                >
                  <option value="">Chọn tỉnh thành</option>
                  {VietnamProvinces.map((province, index) => (
                    <option key={index} value={province}>
                      {province}
                    </option>
                  ))}
                </Field>
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="district"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Huyện
                <Field
                  as="select"
                  name="district"
                  className="form-control"
                  value={orderDetail.district}
                  onChange={(e) => updateField({ district: e.target.value })}
                >
                  <option value="">Chọn huyện</option>
                  {Object.keys(VietnamDistricts).map((city) =>
                    VietnamDistricts[city].map((district, index) => (
                      <option
                        key={`${city}-${index}`}
                        value={`${city}-${district}`}
                      >
                        {`${city} - ${district}`}
                      </option>
                    ))
                  )}
                </Field>
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="addressType"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Loại địa chỉ
                <Field
                  as="select"
                  name="addressType"
                  className="form-control"
                  value={orderDetail.addressType}
                  onChange={(e) => updateField({ addressType: e.target.value })}
                >
                  <option value="">Chọn loại địa chỉ</option>
                  <option value="Công Ty">Công Ty</option>
                  <option value="Nhà ở">Nhà Riêng</option>
                </Field>
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="address"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Địa chỉ
                <Field
                  type="text"
                  name="address"
                  className="form-control"
                  value={orderDetail.address}
                  onChange={(e) => updateField({ address: e.target.value })}
                />
              </label>
            </div>

            <div className="form-group">
              <label
                htmlFor="note"
                className={`${styles.labelShipmentDetails} ${styles.titleShipmentDetails}  ${styles.errorShipmentDetails}`}
              >
                Ghi chú
                <Field
                  as="textarea"
                  name="note"
                  className="form-control"
                  value={orderDetail.note}
                  onChange={(e) => updateField({ note: e.target.value })}
                />
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReactFormik;
