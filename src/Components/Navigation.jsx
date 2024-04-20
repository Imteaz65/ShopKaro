import { Link } from "react-router-dom";
function Navigation(){

  return(
    <>
      <div className="navigations">

        <Link to="/" style={{textDecoration:"none"}}>
          <h2>Home</h2>
        </Link>
        <h2>/</h2>
        <h2>Product</h2>
        
        
      </div>
    </>
  )
}
export default Navigation;