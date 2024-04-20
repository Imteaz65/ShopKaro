import { useContext } from "react";
import { filterContext } from "./FilterContextProvider";
import Grid from "./Grid";
import List from "./List";

function AllProduct() {
  const { filter_products, displayGrid, company } = useContext(filterContext);

  if (company === "All") {
    return <h1>Loading...SIR</h1>;
  } else if (displayGrid === true) {
    return <Grid filter_products={filter_products}></Grid>;
  } else if (displayGrid === false) {
    return <List filter_products={filter_products}></List>;
  }

  return <></>;
}
export default AllProduct;
