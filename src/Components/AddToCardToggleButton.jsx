import { useContext, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContextProvider";

function AddToCartToggleButton({ stock, color, product }) {
  const { id } = product;
  const [productCount, setProductCount] = useState(1);
  const { addToCart } = useContext(cartContext);

  function decrementProduct() {
    // only decrement onClicking when producuCount is greater then 1 so that it wont go to negatiive
    productCount > 1 ? setProductCount(productCount - 1) : setProductCount(1);
  }
  function incrementProduct() {
    // it check the stock and and increment till stock not more than that
    productCount < stock
      ? setProductCount(productCount + 1)
      : alert(`only ${stock} product is in Stock`);
  }
  return (
    <>
      <div className="toggleIncrmentDecrement">
        <button
          onClick={() => {
            incrementProduct();
          }}
          className="togglebutton"
        >
          <FaPlus />
        </button>
        <div className="displayProductCount">{productCount}</div>
        <button
          onClick={() => {
            decrementProduct();
          }}
          className="togglebutton"
        >
          <FaMinus />
        </button>
      </div>
      <Link to="/cart">
        <button
          onClick={() => {
            addToCart(color, productCount, id, product);
          }}
          className="addToCartButton"
        >
          Add To Cart
        </button>
      </Link>
    </>
  );
}
export default AddToCartToggleButton;
