import { useContext } from "react";
import { AppContext } from "../Context/ProductContext";
import ConvertingFormattingPrice from "./Helper/ConvertingFormattingPrice";
import { Link } from "react-router-dom";

function ListProductCard({element}){


  const {id,name,company,price,colors,description,image}=element;
  return(
    <>
      <div className="productBox">
        <div className="listContainer">
          <div className="productImageSection">
            <img src={image} alt={name} />
          </div>
          <div className="productInformationSection">
            <h5 className="productName">
              {name}
            </h5>
            <div className="productPrice">
              <ConvertingFormattingPrice price={price}></ConvertingFormattingPrice>
            </div>
            <div className="productDescription">
              {description.slice(0,185)}...
            </div>
            <Link to={`/singleproduct/${id}`} >
              <button data-product={id}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default ListProductCard;