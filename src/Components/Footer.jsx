import { Link } from "react-router-dom";
function Foot() {

  return (
    <>
      <footer>
        <h1>ShopKaro</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>     
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <hr />
      </footer>
    </>
  );
}
export default Foot;
