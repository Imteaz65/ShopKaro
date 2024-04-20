import ConvertingFormattingPrice from "./Helper/ConvertingFormattingPrice";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

function CartItem({
  cartItem,
  deleteCartItem,
  decrementProduct,
  incrementProduct,
}) {
  // destructuring
  const { id, color, product, amout, name, image, price, productCount } =
    cartItem;
  // console.log(cartItem, "CSARTUHJKVITEM ITEM");

  // console.log("cartItem",cartItem);
  return (
    <>
      <div className="cartHeadingInfo">
        <ul className="cartRowSize">
          <li>
            <div className="productImage_name">
              <img src={image} alt={id} />
              <div className="name">
                <span>{name}</span>
                <span className="colorBlock">
                  color: &nbsp;{" "}
                  <span
                    className="color"
                    style={{ backgroundColor: color }}
                  ></span>
                </span>
              </div>
            </div>
          </li>

          <li className="alignItemCenter">
            <ConvertingFormattingPrice
              price={price}
            ></ConvertingFormattingPrice>
          </li>

          <li className="alignItemCenter">
            <div className="toggleIncrmentDecrement">
              <button
                onClick={() => {
                  incrementProduct(id);
                }}
                className="togglebutton"
              >
                <FaPlus />
              </button>
              <div className="displayProductCount">{productCount}</div>
              <button
                onClick={() => {
                  decrementProduct(id);
                }}
                className="togglebutton"
              >
                <FaMinus />
              </button>
            </div>
          </li>

          <li className="alignItemCenter">
            <ConvertingFormattingPrice
              price={price * productCount}
            ></ConvertingFormattingPrice>
          </li>

          <li className="alignItemCenter">
            <MdDelete
              onClick={() => {
                deleteCartItem(id);
              }}
              className="deleteCartItem"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
export default CartItem;
