import data from "../../../public/data-product/data.json";
import { Col, Row } from "react-bootstrap";
import styles from "./NewMen.module.css";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";
import { useEffect, useState } from "react";
import RenderCardItem from "../../components/NewCardItem/NewCardItem";

export default function NewMenPage() {
  console.log("re-render");
  const listColors = [
    "Black",
    "Silver",
    "Gray",
    "White",
    "Maroon",
    "Red",
    "Purple",
    "Fuchsia",
    "Green",
    "Lime",
    "Olive",
    "Yellow",
    "Navy",
    "Blue",
    "Teal",
    "Aqua",
  ];
  const listSizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSliderChange = ({ min, max }: { min: number; max: number }) => {
    setFilterSearch((prevState: any) => ({
      ...prevState,
      priceMinFilter: min,
      priceMaxFilter: max,
    }));
  };

  const [filterSearch, setFilterSearch] = useState<any>({
    category: "",
    size: [],
    color: [],
    priceMinFilter: 0,
    priceMaxFilter: 2000000,
  });

  const dataFilter = data
    .map((item) => item)
    .filter((item) => {
      if (
        (filterSearch.category !== ""
          ? filterSearch.category == item.category
          : true) &&
        filterSearch.size.every((value: any) => item.sizes.includes(value)) &&
        filterSearch.color.every((value: any) => item.colors.includes(value)) &&
        (item.sale.isSale ? item.sale.priceSale : item.price) >
          filterSearch.priceMinFilter &&
        (item.sale.isSale ? item.sale.priceSale : item.price) <
          filterSearch.priceMaxFilter
      ) {
        return true;
      }
      return false;
    });
  return (
    <div className={`container-fluid  ${styles.container}`}>
      <Row>
        <Col xs={12} sm={2} md={3}>
          <div className={styles.cate_left}>
            <div className={styles.label}>Danh mục</div>
            <ul>
              <li>
                <button
                  className={`${styles.filter_item} ${
                    filterSearch.category.includes("ao") ? styles.active : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => ({
                      ...prevState,
                      category: "ao",
                    }))
                  }
                >
                  Áo
                </button>
              </li>
              <li>
                <button
                  className={`${styles.filter_item} ${
                    filterSearch.category.includes("quan") ? styles.active : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => ({
                      ...prevState,
                      category: "quan",
                    }))
                  }
                >
                  Quần
                </button>
              </li>
              <li>
                <button
                  className={`${styles.filter_item} ${
                    filterSearch.category.includes("do-mac-ngoai")
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => ({
                      ...prevState,
                      category: "do-mac-ngoai",
                    }))
                  }
                >
                  Đồ mặc ngoài
                </button>
              </li>
              <li>
                <button
                  className={`${styles.filter_item} ${
                    filterSearch.category.includes("do-mac-nha")
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => ({
                      ...prevState,
                      category: "do-mac-nha",
                    }))
                  }
                >
                  Đồ mặc nhà
                </button>
              </li>
              <li>
                <button
                  className={`${styles.filter_item} ${
                    filterSearch.category.includes("do-mac-trong")
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => ({
                      ...prevState,
                      category: "do-mac-trong",
                    }))
                  }
                >
                  Đồ mặc trong
                </button>
              </li>
              <li>
                <button
                  className={`${styles.filter_item} ${
                    filterSearch.category.includes("phu-kien")
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => ({
                      ...prevState,
                      category: "phu-kien",
                    }))
                  }
                >
                  Phụ kiện
                </button>
              </li>
            </ul>
            <div className={styles.label}>Kích cỡ</div>
            <div className={styles.size_option}>
              {listSizes.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.box_wrap} ${
                    filterSearch.size.includes(item) ? styles.selected : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => {
                      if (
                        prevState.size.length > 0 &&
                        prevState.size.includes(item)
                      ) {
                        return {
                          ...prevState,
                          size: [
                            ...prevState.size
                              .map((value: any) => value)
                              .filter((value: any) => value !== item),
                          ],
                        };
                      } else
                        return {
                          ...prevState,
                          size: [...prevState.size, item],
                        };
                    })
                  }
                >
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.label}>Màu sắc</div>
            <div className={styles.color_option}>
              {listColors.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.box_wrap} ${
                    filterSearch.color.includes(item) ? styles.selected : ""
                  }`}
                  onClick={() =>
                    setFilterSearch((prevState: any) => {
                      if (
                        prevState.color.length > 0 &&
                        prevState.color.includes(item)
                      ) {
                        return {
                          ...prevState,
                          color: [
                            ...prevState.color
                              .map((value: any) => value)
                              .filter((value: any) => value !== item),
                          ],
                        };
                      } else
                        return {
                          ...prevState,
                          color: [...prevState.color, item],
                        };
                    })
                  }
                >
                  <div
                    className={styles.item_color}
                    style={{ backgroundColor: item }}
                  ></div>
                </div>
              ))}
            </div>
            <div className={`${styles.label} d-none d-lg-block`}>
              Khoảng giá
            </div>
            <div style={{ position: "relative" }} className="d-none d-lg-block">
              <MultiRangeSlider
                min={0}
                max={2000000}
                onChange={handleSliderChange}
              />
            </div>
          </div>
        </Col>
        <Col xs={12} sm={10} md={9}>
          {dataFilter.length > 0 ? (
            <>
              <RenderCardItem dataItem={dataFilter} itemPerRow={3} />
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h2 style={{ textAlign: "center", fontWeight: "800" }}>
                Không có kết quả !
              </h2>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
