import { useState } from "react";
import CardComponent from "../../components/HotDealComponent/CardComponent";
import productData from "../../../public/data-product/data.json";
import styles from "./MenProduct.module.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink, useLinkClickHandler } from "react-router-dom";
// import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";
import Radio from "@mui/material/Radio";
import React from "react";

const BreadcrumbExample = () => {
  return (
  <div style={{marginBottom: "50px"}}>
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="men">
        Nam
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </div>
  );
}

const ProductsList = (props: any) => {
  return (
    <>
      {productData.filter((items) => items.category === props.type).map((item, i) => (
          <div key={i} className={styles.productItem}>
            <CardComponent 
              imageUrl={item.imageUrl}
              productName={item.product_name}
              salePrice={item.sale.priceSale}
              price={item.price}
              colors={item.colors}
              isSale={item.sale.isSale}
              id={item.id}
            />
          </div>
        ))}
    </>
  )
}

const ProductsSize = (props: any) => {
  return (
    <>
      <div className={styles.type} style={{marginRight: "1000px",paddingLeft: "32px"}}>
        <label className={styles.categoryItem} style={{border: "1px solid black"}} htmlFor="">{props.type}</label>
      </div>
      {productData.filter((items) => items.sizes.includes(`${props.type}`)).map((item, i) => (
          <div key={i} className={styles.productItem}>
            <CardComponent 
              imageUrl={item.imageUrl}
              productName={item.product_name}
              salePrice={item.sale.priceSale}
              price={item.price}
              colors={item.colors}
              isSale={item.sale.isSale}
              id={item.id}
            />
          </div>
        ))}
    </>
  )
}

const ProductsColor = (props: any) => {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <>
      <div className={styles.type} style={{marginRight: "1000px",paddingLeft: "32px"}}>
        <label className={styles.categoryItem} style={{border: "1px solid black"}} htmlFor="">
          {props.type}
        </label>
        <Radio
            {...controlProps('a')}
            sx={{
              color: `${props.type}`,
              // outlineOffset: "5px",
              background: `${props.type}`,
              padding: "0.1px",
              marginRight: "20px",
              '&.Mui-checked': {
                color: `${props.type}`,
                outline: `1px solid #333`,
              },
            }}
          />
      </div>
      
      {productData.filter((items) => items.colors.includes(`${props.type}`)).map((item, i) => (
        <div key={i} className={styles.productItem}>
          <CardComponent 
            imageUrl={item.imageUrl}
            productName={item.product_name}
            salePrice={item.sale.priceSale}
            price={item.price}
            colors={item.colors}
            isSale={item.sale.isSale}
            id={item.id}
          />
        </div>
        ))}
    </>
  )
}


const TypeProductsList = (props: any) => {
  return (
    <>
      {productData.filter((items) => items.category2 === props.type).map((item, i) => (
          <div key={i} className={styles.productItem}>
            <CardComponent 
              imageUrl={item.imageUrl}
              productName={item.product_name}
              salePrice={item.sale.priceSale}
              price={item.price}
              colors={item.colors}
              isSale={item.sale.isSale}
              id={item.id}
            />
          </div>
        ))}
    </>
  )
}


const Types = (props: any) => {

  return (
    <>
      <NavLink to="" className={styles.categoryItem}
        onClick={() => {props.setType(`${props.type1}`)
        }}
      >{props.type5}</NavLink>
      <NavLink to="" className={styles.categoryItem}
        onClick={() => {props.setType(`${props.type2}`)
        }}
      >{props.type6}</NavLink>
      <NavLink to="" className={props.type7 ? `${styles.categoryItem}` : ""}
        onClick={() => {props.setType(`${props.type3}`)
        }}
      >{props.type7}</NavLink>
      <NavLink to="" className={props.type8 ? `${styles.categoryItem}` : ""}
        onClick={() => {props.setType(`${props.type4}`)
        }}
      >{props.type8}</NavLink>
    </>
  )
}



const MenProductPage = () => {
  const [type, setType] = useState<string>("ao")
  // const [types, setTypes] = useState<string>("")

  const listColors = [
    "Black",
    "Silver",
    "Gray",
    "White",
    "Maroon",
    "Red",
    "Purple",
    "Pink",
    "Green",
    "Lime",
    "Olive",
    "Yellow",
    "Navy",
    "Blue",
    "Teal",
    "Aqua",
  ];
  const listTyp = [
    "mac-tren",
    "mac-duoi",
    "gia-tot-item",
    "dong-gia-tu-99k",
    "craceful-active-item",
    "craceful-trendy",

  ]

  const listType = {
    category: [
    "ao",
    "quan",
    "do-mac-ngoai",
    "do-mac-nha",
    "do-mac-trong",
    "phu-kien",
    "hang-moi",
    "gia-tot",
    "craceful-active",
    ],
    shirts: [
      "ao-phong",
    "ao-polo",
    "ao-so-mi",
    "ao-ba-lo",
    ],
    trousers: [
      "quan-shorts",
    "quan-jeans",
    "quan-ni",
    "quan-khaki",
    ],
    outerwear: [
    "chong-nang",
    "ao-khoac-ngan",
    "ao-khoac-gio",
    "ao-khoac-chan-bong",
    ],
    homelothes: [
    "bo-mac-nha",
    "quan-mac-nha",
    "ao-mac-nha",
    ],
    clothesInside: [
    "quan-lot-nam",
    "ao-mac-trong",
    "giu-nhiet",
    ],
    accessory: [
      "phu-kien-item",
    "do-dung-ca-nhan",
    ],
    newProducts: [
      "mac-tren",
      "mac-duoi",
    ],
    goodPrice: [
      "gia-tot-item",
      "dong-gia-tu-99k",
    ],
    cracefulActive: [
      "craceful-active-item",
      "craceful-trendy",
    ]


  }
  const listSizes = ["S", "M", "L", "XL", "XXL"];

  const [filterSearch, setFilterSearch] = useState<any>({
    category: "",
    size: [],
    color: [],
    priceMinFilter: 0,
    priceMaxFilter: 2000000,
  });

  // const handleSliderChange = ({ min, max }: { min: number; max: number }) => {
  //   setFilterSearch((prevState: any) => ({
  //     ...prevState,
  //     priceMinFilter: min,
  //     priceMaxFilter: max,
  //   }));
  // };

  return (
    <div className={styles.wrapper}>
      <BreadcrumbExample />
      
      <div className={styles.container}>

        <div className={styles.sideBar}>
          <h4 style={{marginBottom: "37px"}}>Danh mục</h4>
        
          <NavLink to="" className={styles.category} onClick={() => setType("ao")}>Áo</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("quan")}>Quần</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("do-mac-ngoai")}>Đồ Mặc Ngoài</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("do-mac-nha")}>Đồ Mặc Nhà</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("do-mac-trong")}>Đồ Mặc Trong</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("phu-kien")}>Phụ Kiện</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("hang-moi")}>Hàng mới</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("gia-tot")}>Giá tốt</NavLink>
          <NavLink to="" className={styles.category} onClick={() => setType("craceful-active")}>Craceful Active</NavLink>

          <div className={styles.label}>Kích cỡ</div>
          <div className={styles.size_option}>
            {listSizes.map((item, index) => (
              <div
                  key={index}
                  className={`${styles.box_wrap} ${
                    filterSearch.size.includes(item) ? styles.selected : ""
                  }`}
                  onClick={() => {
                    setType(`${item}`)
                  }}
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
                onClick={() => {
                  setType(`${item}`)
                }}
              >
                <div
                  className={styles.item_color}
                  style={{ backgroundColor: item }}
                ></div>
              </div>
            ))}
          </div>
          {/* <div className={`${styles.label} d-none d-lg-block`}>
            Khoảng giá
          </div>
          <div style={{ position: "relative" }} className="d-none d-lg-block">
            <MultiRangeSlider
              min={0}
              max={2000000}
              onChange={handleSliderChange}
            />
          =</div> */}
        </div>
        <div className={styles.main}>
          {listSizes.map((item, index) => (
            <div key={index}>
              {(type === item) && (
              <div className={styles.productList} >
                <ProductsSize type={type}/>
              </div>
              )}
            </div>
          ))}

          {listColors.map((item, index) => (
            <div key={index}>
              {(type === item) && (
              <div className={styles.productList} >
                <ProductsColor type={type}/>
              </div>
              )}
            </div>
          ))}
          
          {(type === "Gray" || type === "Maroon" || type === "Red" || type === "Lime" || type === "Olive" || type === "s") && (
              <div className={styles.productList} style={{display: "flex", justifyContent: "center"}}>
                <h2 style={{fontSize: "36px", fontWeight: "500"}}>Sản Phẩm Hết Hàng!</h2>
              </div>
          )}

          {listType.shirts.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]} type3={orArr[2]} type4={orArr[3]}
                  type5="Áo phông" type6="Áo polo" type7="Áo sơ mi" type8="Áo ba lỗ"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}

          {listType.trousers.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]} type3={orArr[2]} type4={orArr[3]}
                  type5="Quần shorts" type6="Quần jeans" type7="Quần nỉ" type8="Quần khaki"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}

          {listType.outerwear.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]} type3={orArr[2]} type4={orArr[3]}
                  type5="Chống nắng" type6="Áo khoác ngắn" type7="Áo khoác gió" type8="Áo khoác chần bông"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
            </div>
          )}
            </div>
          ))}

          {listType.homelothes.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]} type3={orArr[2]}
                  type5="Bộ mặc nhà" type6="Quần mặc nhà" type7="Áo mặc nhà"
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}

          {listType.clothesInside.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]} type3={orArr[2]}
                  type5="Quần lót nam" type6="Áo mặc trong" type7="giữ nhiệt" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}

          {listType.accessory.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]}
                  type5="Phụ kiện" type6="Đồ dùng cá nhân" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}

          {listType.newProducts.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]}
                  type5="Mặc trên" type6="Mặc dưới" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}

          {listType.goodPrice.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]}
                  type5="Giá tốt" type6="Đồng giá từ 99k" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}

          {listType.cracefulActive.map((item, index, orArr) => (
            <div key={index}>
              {type === item && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1={orArr[0]} type2={orArr[1]}
                  type5="Craceful Active" type6="Craceful Trendy" type7="" type8=""
                />
              </div>
              <div className={styles.productList}>
                <TypeProductsList type={type}/>
              </div>
          </div>
          )}
            </div>
          ))}
        
          {type === "ao" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="ao-phong" type2="ao-polo" type3="ao-so-mi" type4="ao-ba-lo"
                  type5="Áo phông" type6="Áo polo" type7="Áo sơ mi" type8="Áo ba lỗ"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}

          
          
          {type === "quan" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-shorts" type2="quan-jeans" type3="quan-ni" type4="quan-khaki"
                  type5="Quần shorts" type6="Quần jeans" type7="Quần nỉ" type8="Quần khaki"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}

          {type === "do-mac-ngoai" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="chong-nang" type2="ao-khoac-ngan" type3="ao-khoac-gio" type4="ao-khoac-chan-bong"
                  type5="Chống nắng" type6="Áo khoác ngắn" type7="Áo khoác gió" type8="Áo khoác chần bông"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          
          {type === "do-mac-nha" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="bo-mac-nha" type2="quan-mac-nha" type3="ao-mac-nha"
                  type5="Bộ mặc nhà" type6="Quần mặc nhà" type7="Áo mặc nhà"
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          
          {type === "do-mac-trong" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="quan-lot-nam" type2="ao-mac-trong" type3="giu-nhiet" type4=""
                  type5="Quần lót nam" type6="Áo mặc trong" type7="giữ nhiệt" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          
          {type === "phu-kien" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="phu-kien-item" type2="do-dung-ca-nhan" type3="" type4=""
                  type5="Phụ kiện" type6="Đồ dùng cá nhân" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          
          {type === "hang-moi" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="mac-tren" type2="mac-duoi" type3="" type4=""
                  type5="Mặc trên" type6="Mặc dưới" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}

          {type === "gia-tot" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="gia-tot-item" type2="dong-gia-tu-99k" type3="" type4=""
                  type5="Giá tốt" type6="Đồng giá từ 99k" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
            </div>
          )}
          
          {type === "craceful-active" && (
            <div>
              <div className={styles.type}>
                <Types setType={setType}
                  type1="craceful-active-item" type2="craceful-trendy" type3="" type4=""
                  type5="Craceful Active" type6="Craceful Trendy" type7="" type8=""
                />
              </div>
              <div className={styles.productList} >
                <ProductsList type={type}/>
              </div>
          </div>
          )}
          
        </div>
      </div>
    </div>
  )
}



export default MenProductPage;







