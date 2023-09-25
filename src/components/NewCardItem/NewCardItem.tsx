import { Link } from "react-router-dom";
import { convertPriceVnd, data } from "../ProductDetail/ProductDetail";
import styles from "./NewCardItem.module.css";
import { Row, Col } from "react-bootstrap";
import { Fragment } from "react";
export function NewCardItem(props: data) {
  return (
    <div className={styles.product_item}>
      <div className={styles.product_item_photo}>
        <Link
          to={`/product/${props.id}`}
          className={styles.product_image_container}
        >
          <div>
            <img src={props.imageUrl[0]} alt="" />
          </div>
        </Link>
      </div>
      <div className={styles.product_item_details}>
        <div className={styles.colors_option}>
          {props.colors.map((item, index) => (
            <div key={index} className={`${styles.box_wrap}`}>
              <div
                className={styles.item_color}
                style={{ backgroundColor: item }}
              ></div>
            </div>
          ))}
        </div>
        <h3 className={styles.product_item_name}>
          <Link to={`/product/${props.id}`}>{props.product_name}</Link>
        </h3>
        {props.sale.isSale ? (
          <div className={styles.price_box}>
            <span className={styles.normal_price}>
              <span className={styles.price}>
                {convertPriceVnd(props.sale.priceSale)} đ
              </span>
            </span>
            <span className={styles.old_price_box}>
              <span className={styles.old_price}>
                {convertPriceVnd(props.price)} đ
              </span>
              <span className={styles.percent_sale}>
                -
                {(
                  ((props.price - props.sale.priceSale) / props.price) *
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
                {convertPriceVnd(props.price)} đ
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
interface render1 {
  dataItem: any;
  itemPerRow: any;
}

export default function RenderCardItem(props: render1) {
  return (
    <div className="container-fluid">
      <Row>
        {props.dataItem &&
          props.dataItem.map((item: any, index: any) => (
            <Fragment key={index}>
              <Col
                xs={10}
                sm={6}
                md={12 / props.itemPerRow}
                className="d-sm-block d-none"
              >
                {NewCardItem(item)}
              </Col>
              <Col
                xs={12}
                sm={6}
                md={12 / props.itemPerRow}
                className="d-sm-none m-auto"
              >
                {NewCardItem(item)}
              </Col>
            </Fragment>
          ))}
      </Row>
    </div>
  );
}
