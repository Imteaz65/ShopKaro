import { useContext } from "react";
import { AppContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";

function Home() {

  const { name } = useContext(AppContext);
  return (
    <>
      <div className="Home">
        <div className="image">
          <h2 className="homeContent">
            Brand New 2024 Collection <br />
            50% OFF {name}
            <br />
            <Link to="/product">
              <button>SHOP NOW</button>
            </Link>
          </h2>
        </div>
        <FeaturedProduct></FeaturedProduct>
      </div>
    </>
  );
}
export default Home;
