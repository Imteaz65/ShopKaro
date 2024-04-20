import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ConvertingFormattingPrice from "./Helper/ConvertingFormattingPrice";

function FeaturedProductCard({element}){

  // debugger;
  const {id,name,image,price,category,}=element;
  return(
    <>

      <NavLink to={`/singleproduct/${id}`} >
        <div className="cardFeatured">
            <div className="cardImage">
              <img  src={image} alt={name} />
            </div>
            <div className="ProductNamePrice">
              <div className="name">
                {name}
              </div>
              <div className="price">
                <ConvertingFormattingPrice price={price}></ConvertingFormattingPrice> 
              </div>
            </div>
          </div>
      </NavLink>
      
    </>
  )
}
export default FeaturedProductCard;