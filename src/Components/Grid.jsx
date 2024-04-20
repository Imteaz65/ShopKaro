import { useContext } from "react";
import { AppContext } from "../Context/ProductContext";

import FeaturedProductCard from "./FeaturedProductCard";

function Grid({filter_products}){

  return(
    <>

      <div className="filteredProductsContainerGrid">
        {filter_products.map(function(element){
          return <FeaturedProductCard key={element.id} element={element}></FeaturedProductCard>
        })
        }
      </div>
      
    </>
  )
}
export default Grid;