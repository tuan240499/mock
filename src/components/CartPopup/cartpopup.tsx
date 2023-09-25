import styles from "./cartpopup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartPopup } from "../../redux/actions/DisplayCart.action";
import { Button, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseQtyItem,
  increaseQtyItem,
  removeItemCart,
} from "../../redux/actions/CartItem.action";
import { convertPriceVnd } from "../ProductDetail/ProductDetail";
import { useEffect, useState } from "react";

export default function CartPopupComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const cartIsShow = useSelector(
    (state: any) => state.displayCartReducer.isShow
  );
  const cartItem = useSelector((state: any) => state.cartItemReduceer);
  const dispatch = useDispatch();
  const totalPrice = cartItem.reduce((acc: any, item: any) => {
    const itemPrice = item.sale.isSale ? item.sale.priceSale : item.price;
    return acc + itemPrice * item.qty;
  }, 0);
  const totalPriceNotSale = cartItem.reduce((acc: any, item: any) => {
    return acc + item.price * item.qty;
  }, 0);
  const navigate = useNavigate();
  return (
    <div>
      <Offcanvas
        placement="end"
        show={cartIsShow}
        onHide={() => dispatch(toggleCartPopup())}>
        <Offcanvas.Header
          closeButton
          style={{ borderBottom: " 1px solid #edf1f5" }}>
          <Offcanvas.Title>
            <h4
              style={{
                fontFamily: '"Montserrat", sans-serif',
              }}>
              Giỏ hàng
            </h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        {cartItem.length > 0 ? (
          <Offcanvas.Body>
            <div className={styles.listItems}>
              {cartItem.map((item: any, index: any) => {
                return (
                  <div className={styles.item} key={index}>
                    <div className={styles.itemInfo}>
                      <div className={styles.itemPhoto}>
                        <div className={styles.itemPhotoWrapper}>
                          <Link to={`/product/${item.id}`}>
                            <img src={item.imageUrl} alt="" />
                          </Link>
                          <button
                            className={styles.remove_item_cart}
                            onClick={() =>
                              dispatch(removeItemCart(item))
                            }></button>
                        </div>
                      </div>
                      <div className={styles.itemDetails}>
                        <h3 className={styles.item_name}>
                          {item.product_name}
                        </h3>
                        <div className={styles.item_options}>
                          <div className={styles.item_option}>
                            <span
                              className={styles.box_wrap}
                              style={{ backgroundColor: item.color }}></span>
                            <span>{item.color}</span>
                          </div>
                          <div className={styles.item_option}>
                            <span>{item.size}</span>
                          </div>
                        </div>
                        <div className={styles.item_bottom}>
                          {item.sale.isSale ? (
                            <div className={styles.item_price}>
                              <span className={styles.old_price_box}>
                                <span className={styles.old_price}>
                                  {convertPriceVnd(item.price)}đ
                                </span>
                                <span className={styles.percent_sale}>
                                  -
                                  {(
                                    ((item.price - item.sale.priceSale) /
                                      item.price) *
                                    100
                                  ).toFixed(0)}
                                  %
                                </span>
                              </span>
                              <span className={styles.price}>
                                {convertPriceVnd(item.sale.priceSale)}đ
                              </span>
                            </div>
                          ) : (
                            <div className={styles.item_price}>
                              <span className={styles.price}>
                                {convertPriceVnd(item.price)}đ
                              </span>
                            </div>
                          )}

                          <div className={styles.item_qty}>
                            <button
                              className={`${styles.btn_qty} ${styles.qty_min}`}
                              onClick={() => dispatch(decreaseQtyItem(item))}>
                              -
                            </button>
                            <input
                              className={styles.input_qty}
                              value={item.qty}
                              readOnly={true}
                              disabled
                            />
                            <button
                              className={`${styles.btn_qty} ${styles.qty_max}`}
                              onClick={() => dispatch(increaseQtyItem(item))}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
            <div className={styles.sub_bottom}>
              <div className={styles.subtotal}>
                <span>Giá trị đơn hàng</span>
                <span>{convertPriceVnd(totalPriceNotSale)} đ</span>
              </div>
              <div className={styles.subtotal}>
                <span>Chiết khấu</span>
                <span style={{ color: "red" }}>
                  -{convertPriceVnd(totalPriceNotSale - totalPrice)} đ
                </span>
              </div>
              <div className={styles.subtotal} style={{ fontWeight: 700 }}>
                <span>Tạm tính</span>
                <span>
                  {convertPriceVnd(
                    totalPriceNotSale - (totalPriceNotSale - totalPrice)
                  )}{" "}
                  đ
                </span>
              </div>
              <div className="d-grid">
                <Button
                  variant="danger"
                  size="lg"
                  className={styles.checkout_btn}
                  onClick={() => {
                    dispatch(toggleCartPopup());
                    isLoggedIn ? navigate("/order") : navigate("/signin");
                  }}>
                  Thanh toán
                </Button>
              </div>
            </div>
          </Offcanvas.Body>
        ) : (
          <Offcanvas.Body>
            <div className={styles.wrap_empty}>
              <div className={styles.cart_item}>
                <div className={styles.empty_icon}>
                  <img
                    src="https://canifa.com/assets/images/mb/cart-empty.png"
                    alt=""
                  />
                </div>
                <p>Hiện chưa có sản phẩm trong giỏ hàng</p>
              </div>
            </div>
          </Offcanvas.Body>
        )}
      </Offcanvas>
    </div>
  );
}
