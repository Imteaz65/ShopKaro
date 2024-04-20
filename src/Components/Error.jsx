import { Link } from "react-router-dom";
import Button from "./Button";
function Error(){

  return(
    <>
      <div className="ErrorContainer">
        <h1>404</h1>
        <h3>Wrong Path</h3>
        <h5>The page you are looking does not Exist</h5>

        <Link to="/">
          <button>Go To HomePage</button>
        </Link>
        
      </div>
    </>
  )
}
export default Error;