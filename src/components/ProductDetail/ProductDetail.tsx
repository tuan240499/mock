import styles from "./ProductDetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ServiceComponent from "../ServiceComponent/ServiceComponent";
import { useState, useEffect } from "react";
import AppServices from "../../services/AppServices";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/actions/CartItem.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SlideCardItem from "../SlideCardItem/SlideCardItem";
export function convertPriceVnd(props: number) {
  let newPrice;
  return (newPrice = props.toLocaleString("it-IT", {
    style: "decimal",
  }));
}
export interface data {
  id: string;
  product_name: string;
  price: number;
  sale: {
    isSale: boolean;
    priceSale: number;
  };
  imageUrl: string[];
  sizes: string[];
  colors: string[];
  category: string;
}

export default function ProductDetail() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const navigate = useNavigate();
  const notifyError = (message: string, config: any) =>
    toast.error(message, config);
  const notifySuccess = (message: string, config: any) =>
    toast.success(message, config);
  const toastError = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };
  const toastSucess = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
  };
  console.log("render");

  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    AppServices.getUser().then((data) => {
      setData(data);
    });
  }, []);
  const dataRender = data
    .map((item) => item)
    .filter((item: data) => item.id === params.id);
  const itemRender: data = dataRender[0];
  const relatedProduct = data
    .map((item) => item)
    .filter(
      (item: data) =>
        item.category === itemRender.category && item.id !== itemRender.id
    );
  const [currentColor, setCurrentColor] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  const isColorSelected = (color: string) => {
    return currentColor === color ? styles.selected : "";
  };
  const isSizeSelected = (size: string) => {
    return currentSize === size ? styles.selected : "";
  };

  let currentItemChoose = {};
  if (itemRender) {
    currentItemChoose = {
      id: itemRender.id,
      product_name: itemRender.product_name,
      price: itemRender.price,
      sale: itemRender.sale,
      imageUrl: itemRender.imageUrl[0],
      color: currentColor,
      size: currentSize,
      qty: 1,
    };
  }
  const verifyAddItem = (payload: any) => {
    if (payload.size !== "" && payload.color !== "") {
      dispatch(addItemToCart(payload));
      notifySuccess(
        `Đã thêm thành công sản phẩm ${payload.product_name} vào giỏ hàng`,
        toastSucess
      );
    }
    if (payload.size !== "" && payload.color == "") {
      notifyError("Vui lòng chọn màu  cho sản phẩm !", toastError);
    }
    if (payload.size == "" && payload.color !== "") {
      notifyError("Vui lòng chọn  size cho sản phẩm !", toastError);
    }
    if (payload.size == "" && payload.color == "") {
      notifyError("Vui lòng chọn màu và size cho sản phẩm !", toastError);
    }
  };
  const verifyPayItem = (payload: any) => {
    if (payload.size !== "" && payload.color !== "") {
      dispatch(addItemToCart(payload));
    }
    if (payload.size !== "" && payload.color == "") {
      notifyError("Vui lòng chọn màu  cho sản phẩm !", toastError);
    }
    if (payload.size == "" && payload.color !== "") {
      notifyError("Vui lòng chọn  size cho sản phẩm !", toastError);
    }
    if (payload.size == "" && payload.color == "") {
      notifyError("Vui lòng chọn màu và size cho sản phẩm !", toastError);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [itemRender]);
  return (
    <div>
      <div className={styles.breadcrumbs}>
        <ul className={styles.itembred}>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/men">Nam</Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.wrap} container-fluid`}>
        <div className="row">
          <div className="col-12 col-lg-7">
            <Carousel
              showArrows={false}
              className={styles.gallery}
              autoPlay
              infiniteLoop>
              {itemRender &&
                itemRender.imageUrl.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="col-12 col-lg-5">
            <div className={styles.info_item}>
              <h1 className={styles.product_name}>
                {itemRender && itemRender.product_name}
              </h1>
              <div className={styles.product_sku}>
                <strong className={styles.type}>Mã sản phẩm: </strong>
                <div>{itemRender && itemRender.id}</div>
              </div>
              {itemRender && itemRender.sale.isSale ? (
                <div className={styles.price_box}>
                  <span className={styles.normal_price}>
                    <span className={styles.price}>
                      {convertPriceVnd(itemRender.sale.priceSale)} đ
                    </span>
                  </span>
                  <span className={styles.old_price_box}>
                    <span className={styles.sale_price}>
                      {convertPriceVnd(itemRender.price)} đ
                    </span>
                    <span className={styles.percent_sale}>
                      -
                      {(
                        ((itemRender.price - itemRender.sale.priceSale) /
                          itemRender.price) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  </span>
                </div>
              ) : (
                <div className={styles.price_box}>
                  <span className={styles.normal_price}>
                    <span className={styles.price}>
                      {itemRender && convertPriceVnd(itemRender.price)} đ
                    </span>
                  </span>
                </div>
              )}
              <div className={styles.color_box}>
                <span className={styles.color_label}>
                  <span>Màu sắc: </span>
                  <span style={{ fontWeight: "500" }}>{currentColor}</span>
                </span>
                <div className={styles.color_option}>
                  {itemRender &&
                    itemRender.colors.map((item, index) => (
                      <div
                        className={`${styles.box_wrap} ${isColorSelected(
                          item
                        )}`}
                        onClick={() => setCurrentColor(item)}
                        key={index}>
                        <div
                          className={styles.item_color}
                          style={{ backgroundColor: item }}></div>
                      </div>
                    ))}
                </div>
              </div>
              <div className={styles.size_box}>
                <span className={styles.color_label}>
                  <span>Kích cỡ: </span>
                  <span style={{ fontWeight: "500" }}>{currentSize}</span>
                </span>
                <div className={styles.color_option}>
                  {itemRender &&
                    itemRender.sizes.map((item, index) => (
                      <div
                        key={index}
                        className={`${styles.box_wrap} ${isSizeSelected(item)}`}
                        onClick={() => setCurrentSize(item)}>
                        {item}
                      </div>
                    ))}
                </div>
              </div>
              <div className={styles.product_options_actions}>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-warning btn-lg"
                    type="button"
                    onClick={() => verifyAddItem(currentItemChoose)}>
                    Thêm vào giỏ hàng
                  </button>

                  <button
                    className="btn btn-danger btn-lg"
                    type="button"
                    onClick={() => {
                      verifyPayItem(currentItemChoose);
                      navigate(
                        currentColor !== "" && currentSize !== "" && isLoggedIn
                          ? "/order"
                          : currentColor !== "" &&
                            currentSize !== "" &&
                            !isLoggedIn
                          ? "/signin"
                          : "."
                      );
                    }}>
                    Mua ngay
                  </button>
                </div>
              </div>
              <div className={styles.items_information}>
                <div className={styles.item_information}>
                  <div className={styles.item_title}>Mô tả</div>
                  <div className={styles.item_content}>
                    Áo cộc tay cổ bẻ, dáng ngắn, eo ôm vừa, chất liệu interlock
                    dầy dặn, thoải mái, dễ chịu cho người mặc, phù hợp với đi
                    chơi, đi làm, thời tiết mùa thu, mùa xuân. Chất liệu Cotton
                    Polyester - Ưu điểm của nguyên liệu: Bề mặt lì, chắc dày
                    dặn, dấu dáng cho người mặc, ít nhăn.- Phom dáng: Phù hợp
                    với phom dáng vừa đến rộng. - Mùa: Phù hợp thời điểm giao
                    mùa (Xuân và Thu).
                  </div>
                </div>
                <div className={styles.item_information}>
                  <div className={styles.item_title}>Chất liệu</div>
                  <div className={styles.item_content}>
                    60% polyester 40% cotton
                  </div>
                </div>
                <div className={styles.item_information}>
                  <div className={styles.item_title}>Hướng dẫn sử dụng</div>
                  <div className={styles.item_content}>
                    Giặt máy ở chế độ nhẹ, nhiệt độ thường. Không sử dụng hóa
                    chất tẩy có chứa Clo. Phơi trong bóng mát. Sấy khô ở nhiệt
                    độ thấp. Là ở nhiệt độ thấp 110 độ C. Giặt với sản phẩm cùng
                    màu. Không là lên chi tiết trang trí.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceComponent />
      <div className={`container-fluid ${styles.container_related}`}>
        <h4>Gợi ý cho bạn</h4>
      </div>
      <SlideCardItem props={relatedProduct} />
    </div>
  );
}
