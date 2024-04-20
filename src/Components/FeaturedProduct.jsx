import { useContext } from "react";
import { AppContext } from "../Context/ProductContext";
import FeaturedProductCard from "./FeaturedProductCard";

function FeaturedProduct(){

  const{isLoading,featuredProduct}=useContext(AppContext);
  
  if(isLoading===true){
    return <h1>Loading...</h1>
  }
    
 
  return(
    <>
      <h1 style={{textAlign:"center"}}>Top Trending Products</h1>
      <div className="filteredProductsContainer">
        
        {featuredProduct.map(function(element){
          
          return <FeaturedProductCard Id={element.id} id={element.id} element={element} key={element.id}></FeaturedProductCard>
        })
        }
        
      </div>
    </>
  )
}
export default FeaturedProduct;