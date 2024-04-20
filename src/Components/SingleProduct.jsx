import { useContext } from "react";
import { AppContext } from "../Context/ProductContext";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import ConvertingFormattingPrice from "./Helper/ConvertingFormattingPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplaceFilled } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import Navigation from "./Navigation";
import SingleProductImage from "./SingleProductImage";
import Stars from "./Stars";
import ColorsSection from "./ColorsSection";
import AddToCartToggleButton from "./AddToCardToggleButton";

// const API="https://api.pujakaitem.com/api/products?id=${id}"

function SingleProduct() {
  const {ids}=useParams();
  // console.log(ids,"params")

  // extracting the state and methods present in productContext
  const {
    SinglePoductPageApiCall,      //method to extract singlePageInfo.
    singleProduct,
    isSingleError,
    isSingleLoading,
  } = useContext(AppContext);

  // singleProduct contains the information of specific singleProduct thatswhy destructuring to extract all info. inside it
  const {
    id,
    image,
    colors,
    name,
    price,
    company,
    description,
    reviews,
    stock,
    stars,
  } = singleProduct;

  // console.log("singleProductPage")

  useEffect(function () {
    // console.log("useeffect chal raha hai")
    SinglePoductPageApiCall(
      `https://api.pujakaitem.com/api/products?id=${ids}`
    );
  }, []);

  // console.log("SingleProduct")

  if (isSingleError === true) {
    return <h1>Kounsa Product Chahiye Bhai</h1>;
  } else if (isSingleLoading === true) {
    return <h1> Loading.....Thora Time do sir</h1>;
  }

  return (
    <>

      <Navigation></Navigation>

      <div className="singleProductContainier">
        <div className="SingleProductImage">
          
          <SingleProductImage image={image}></SingleProductImage>
        </div>

        <div className="singleProductInformation">

          <h1 className="productName">{name}</h1>
          <Stars stars={stars} reviews={reviews}></Stars>
          <hr />
          <p className="price">

            <ConvertingFormattingPrice price={price}></ConvertingFormattingPrice> &nbsp;
            <del>
              <ConvertingFormattingPrice price={price + 250000}></ConvertingFormattingPrice>
            </del>

          </p>

          {(stock>0 && <ColorsSection singleProduct={singleProduct}></ColorsSection>)}
          <p className="bold" style={{color:"green"}}>Inclusive of all Taxes</p>
          <hr />

          {/* fit it inside color */}
          {/* <AddToCartToggleButton stock={stock}></AddToCartToggleButton> */}

          <div className="description">{description}</div>
          <hr/>

          <div className="benefitsApps">
            <div className="icons">
              <TbTruckDelivery /> <br />
              <span>Free Delivery</span>
            </div>
            <div className="icons"> 
              <TbReplaceFilled /><br />
              <span>10 days Return <span>& Exchange</span></span>
            </div>

            <div className="icons">
              <RiSecurePaymentFill /> <br />
              <span>Secure Payment</span>
            </div>

            <div className="icons">
              <GiPayMoney /> <br />
              <span>Pay On Delivery</span>
            </div>
          </div>

          <div className="stock">
            <p>Available: &nbsp;
              <span className="bold">
                {stock>0?"In Stock":"Not Avavilable"}
              </span>
              
            </p>
          </div>
          <div className="stock">
            <span className="bold">
                brand: &nbsp; {company}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;
