import { useContext, useState } from "react";
import AllProduct from "./AllProduct";

import { filterContext } from "./FilterContextProvider";
import SortingGridList from "./SortingGridList";
import FilterSection from "./FilterSection";

function Product() {
  const { filter_products, isFilterLoading, displayGrid,gotAllProduct } =
    useContext(filterContext);

  if (isFilterLoading === true) {
    return <h1>ProductPage Is Loading</h1>;
  }

  return (
    <>
      <div className="allProductsPageContainer">
        <div className="filterProductsSection">
          <FilterSection></FilterSection>
        </div>

        <div className="sortingProductsSection_Products">
          <div className="sorting_gridList">
            <SortingGridList
              filter_products={filter_products}
            ></SortingGridList>
          </div>

          <div className="allProducts">
            {/* AllProducts component contains all products */}
            <AllProduct></AllProduct>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
