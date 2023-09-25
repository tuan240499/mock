import styles from "./SuggestionForU.module.css"
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import CardComponent from "../HotDealComponent/CardComponent";
import productData from "../../../public/data-product/data.json";

const ProductsOnPage = (props: any) => {
  return (
    <>
      {productData.filter((item1) => item1.hotDeals).filter((items) => items.page === props.page).map((item, i) => (
          <div key={i} className={styles.productItem}>
            <CardComponent key={i}
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

const SuggestionComponent = () => {
  const [pageCount, setPageCount] = useState<number>(1)
  // const [totalCards, setTotalCards] = useState<number>(0)
  const [totalPages] = useState<number>(2)

  const handlePageClick = (event: any) => {
    if(event.selected + 1 === 1) {
      setPageCount(1) 
    }
    if(event.selected + 1 === 2) {
      setPageCount(2)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2>Gợi ý cho bạn</h2>

      <div className={styles.productContainer}>
      {pageCount === 1 && (
        <ProductsOnPage page={pageCount}/>
      )}
      {pageCount === 2 && (
        <ProductsOnPage page={pageCount}/>
      )}

    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<<"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default SuggestionComponent ;


