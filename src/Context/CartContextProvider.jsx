import { createContext, useEffect, useReducer } from "react";
import cartReducer from "./CartReducer";

export const cartContext = createContext();

function getLocalCartData() {
  let newCartData = localStorage.getItem("imteazCart");

  if (newCartData===null) {
    // console.log("cartData");
    return [];
  } else if (newCartData.length > 0) {

    return JSON.parse(newCartData);
  }
}

const cartDetails = {
  carts: getLocalCartData(),

  totalItems: "",
  totalPrice: "",
  amount: "",
  shippingFee: 15000,
};

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartDetails);

  function addToCart(color, productCount, id, product) {
    dispatch({
      type: "ADD_PRODUCTS_TO_CART",
      payload: {
        product: product,
        productCount: productCount,
        color: color,
        id: id,
      },
    });
  }

  function deleteCartItem(id) {
    // console.log(id, "delete id of item");
    dispatch({ type: "DELETE_PRODUCTS_FROM_CART", payload: { productId: id } });
  }

  function incrementProduct(id) {
    dispatch({
      type: "INCREMENT_PRODUCT_FROM_CART",
      payload: { productId: id },
    });
  }
  function decrementProduct(id) {
    dispatch({
      type: "DECREMENT_PRODUCT_FROM_CART",
      payload: { productId: id },
    });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  //useEffect will execute everytime when the array carts change its content
  useEffect(
    function () {
      dispatch({
        type: "NO_OF_PRODUCTS_IN_CARTS",
        payload: { totalItems: state.totalItems },
      });

      dispatch({
        type: "SUB_TOTAL",
        payload: { subTotal: state.cartSubTotal },
      });

      localStorage.setItem("imteazCart", JSON.stringify(state.carts));
    },
    [state.carts]
  );

  return (
    <>
      <cartContext.Provider
        value={{
          ...state,
          addToCart: addToCart,
          deleteCartItem,
          incrementProduct,
          decrementProduct,
          clearCart,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}
export default CartContextProvider;
