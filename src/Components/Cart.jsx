import { useContext } from "react";
import { cartContext } from "../Context/CartContextProvider";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import ConvertingFormattingPrice from "./Helper/ConvertingFormattingPrice";

function Cart() {
  const {
    carts,
    deleteCartItem,
    decrementProduct,
    incrementProduct,
    clearCart,
    totalPrice,
    shippingFee,
  } = useContext(cartContext);
  // console.log(carts);

  if (carts.length === 0) {
    return <h1>NoCarts</h1>;
  }
  // console.log("carts se cart page", carts);
  return (
    <>
      <h1>Cart</h1>

      <div className="cartHeadingInfo">
        <ul className="cartRowSize bold">
          <li>ITEM</li>

          <li>PRICE</li>

          <li>QUANTITY</li>

          <li>SUBTOTAL</li>

          <li>REMOVE</li>
        </ul>
      </div>

      <hr />

      <div className="cartsItem">
        {carts.map(function (element) {
          return (
            <CartItem
              key={element.id}
              cartItem={{ ...element }}
              deleteCartItem={deleteCartItem}
              incrementProduct={incrementProduct}
              decrementProduct={decrementProduct}
            ></CartItem>
          );
        })}
      </div>

      <hr />

      <div className="clearCart_ContinueShopping">
        <Link to="/product">
          <button className="continueShopping">CONTINUE SHOPPING</button>
        </Link>

        <button
          onClick={() => {
            clearCart();
          }}
          className="clearCartButton"
        >
          CLEAR CART
        </button>
      </div>

      <div className="TotalBalanceContainer">
        <div className="totalPrice_shippingFee">
          Subtotal: &nbsp;
          <span className="bold">
            <ConvertingFormattingPrice
              price={totalPrice}
            ></ConvertingFormattingPrice>
          </span>
        </div>
        <div className="totalPrice_shippingFee">
          ShippingFee: &nbsp;
          <span className="bold">
            <ConvertingFormattingPrice
              price={shippingFee}
            ></ConvertingFormattingPrice>
          </span>
        </div>
        <div className="totalPrice_shippingFee">
          Total:&nbsp;
          <span className="bold">
            <ConvertingFormattingPrice
              price={totalPrice + shippingFee}
            ></ConvertingFormattingPrice>
          </span>
        </div>
        {/* {totalPrice} */}
      </div>
    </>
  );
}
export default Cart;
