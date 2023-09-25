import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CAT_Men from "./CAT_men.json";
import CAT_Women from "./CAT_women.json";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartPopup } from "../../redux/actions/DisplayCart.action";
import styles from "./NavComponent.module.css";
import { Col, Row } from "react-bootstrap";
import dataProduct from "../../../public/data-product/data.json";
import { useState, useRef, useEffect } from "react";
interface MenuItem {
  path: string;
  name: string;
}

interface SubmenuProps {
  categoryData: MenuItem[][];
}

const Submenu: React.FC<SubmenuProps> = ({ categoryData }) => {
  return (
    <div className={styles.submenu}>
      <div className={styles.submenu_content}>
        {categoryData.map((subMenuItems, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
            {subMenuItems.map((item, itemIndex) => (
              <NavLink key={itemIndex} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </Box>
        ))}
      </div>
    </div>
  );
};

const NavComponent = () => {
  const [inputSearch, setInputSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // navigate login or user
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        resultRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !resultRef.current.contains(event.target as Node)
      ) {
        setShowResult(false);
        setInputSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleInputFocus = () => {
    setShowResult(true);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };
  const resultSearch = dataProduct.filter((item) => {
    return inputSearch
      .trim()
      .toLowerCase()
      .split(" ")
      .every((word) =>
        item.product_name.toLowerCase().split(" ").includes(word)
      );
  });
  const dispatch = useDispatch();
  const numberItemCart = useSelector((state: any) =>
    state.cartItemReduceer.reduce((acc: any, item: any) => {
      return (acc = acc + item.qty);
    }, 0)
  );

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          zIndex: "501",
          top: "0",
          bgcolor: "#fff",
        }}>
        <div className={`container-fluid ${styles.header}`}>
          <div className="row h-100 justify-content-between">
            <div className="d-lg-none my-auto col-1">
              <NavLink to="/">
                <div className={styles.img}>
                  <img
                    src="http://localhost:5173\public\images\logo-graceful-2.svg"
                    alt=""
                  />
                </div>
              </NavLink>
            </div>
            <div className="col-6 d-lg-block d-none my-auto">
              <div className={styles.menu_left}>
                <NavLink to="/">
                  <div className={styles.img}>
                    <img
                      src="http://localhost:5173\public\images\logo-graceful-2.svg"
                      alt=""
                    />
                  </div>
                </NavLink>
                <div className={styles.menu}>
                  <div>
                    <NavLink to="/women">Nữ</NavLink>
                    <Submenu categoryData={CAT_Women} />
                  </div>
                  <div>
                    <NavLink to="/men">Nam</NavLink>
                    <Submenu categoryData={CAT_Men} />
                  </div>
                  <div>
                    <NavLink to="/child">Trẻ em</NavLink>
                  </div>
                  <div>
                    <NavLink to="/newmen">Nam 2</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 col-lg-6 my-auto">
              <div className={styles.menu_right}>
                <div className={`${styles.search} d-none d-sm-block my-auto`}>
                  <div
                    className={styles.search_input_group}
                    ref={inputRef}
                    onFocus={handleInputFocus}>
                    <div className={styles.search_btn}></div>
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      className={styles.search_input}
                      onChange={handleChangeInput}
                      value={inputSearch}
                    />
                  </div>
                  {showResult && inputSearch !== "" && (
                    <div className={styles.search_result} ref={resultRef}>
                      <div className={styles.item_search}>
                        {resultSearch.length > 0
                          ? resultSearch.map((item, index) => (
                              <Link
                                to={`/product/${item.id}`}
                                style={{
                                  color: "white",
                                  textDecoration: "none",
                                }}
                                onClick={() => {
                                  setShowResult(false), setInputSearch("");
                                }}
                                key={index}>
                                <div
                                  className={styles.item_search_info}
                                  key={index}>
                                  <Row className="p-3">
                                    <Col xs={3}>
                                      <div
                                        className={
                                          styles.item_search_info_image
                                        }>
                                        <img src={item.imageUrl[0]} alt="" />
                                      </div>
                                    </Col>
                                    <Col xs={9} className="my-auto">
                                      <div
                                        className={
                                          styles.item_search_info_name
                                        }>
                                        <h6>{item.product_name}</h6>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </Link>
                            ))
                          : inputSearch !== "" && (
                              <div className={styles.item_text}>
                                <Row>
                                  <Col>
                                    <h6 style={{ textAlign: "center" }}>
                                      Không có kết quả !
                                    </h6>
                                  </Col>
                                </Row>
                              </div>
                            )}
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.group_icon}>
                  <div className={styles.store}>
                    <div>
                      <StorefrontIcon />
                    </div>
                    <span>Cửa hàng</span>
                  </div>
                  <div
                    className={styles.account}
                    onClick={() => {
                      isLoggedIn
                        ? navigate("/userprofile")
                        : navigate("/signin");
                    }}>
                    <div>
                      <AccountCircleIcon />
                    </div>
                    <span>Tài khoản</span>
                  </div>
                  <div
                    className={styles.cart}
                    onClick={() => dispatch(toggleCartPopup())}>
                    <div>
                      {" "}
                      <ShoppingCartIcon />
                    </div>
                    <span>Giỏ hàng</span>
                    <span className={styles.count}>{numberItemCart}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default NavComponent;
