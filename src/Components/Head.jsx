import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContextProvider";


function Nav() {
  const {totalItems}=useContext(cartContext);
  return (
    <>
      <nav>
        <h1>ShopKaro</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link style={{position:"relative"}}  to="/cart">
              <TiShoppingCart className="cart" />

              <div className="cartsss">{totalItems}</div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
