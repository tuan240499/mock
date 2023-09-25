import { NewCardItem } from "../NewCardItem/NewCardItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./SlideCardItem.module.css";
export default function SlideCardItem(props: any) {
  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    lg: {
      breakpoint: { max: 1200, min: 992 },
      items: 4,
    },
    md: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 768, min: 576 },
      items: 2,
    },
    xs: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={`container-fluid btn-slide-custom ${styles.container}`}>
      <Carousel responsive={responsive} autoPlay={true}>
        {props.props.map((item: any, index: any) => (
          <div key={index} className={styles.card_wrap}>
            <NewCardItem
              key={index}
              id={item.id}
              imageUrl={item.imageUrl}
              colors={item.colors}
              product_name={item.product_name}
              sale={item.sale}
              price={item.price}
              sizes={[]}
              category={""}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
