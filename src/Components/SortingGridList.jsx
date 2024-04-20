import { useContext } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { filterContext } from "./FilterContextProvider";
function SortingGridList({filter_products}) {

  const{displayGrid,displayList,setDisplayList,setDisplayGrid,sortings}=useContext(filterContext);

  return (
    <>
      <div className="gridListIcon">
          <span onClick={()=>{setDisplayGrid()}} className={displayGrid===true?"gridicon active":"gridicon"}>
            <BsFillGridFill /> &nbsp;
          </span>

          <span onClick={()=>{setDisplayList()}} className={displayList===true?"listicon active":"listicon"}>
            <FaListUl />;
          </span>
        </div>
        
          
        <div className="countProduct">
            {filter_products.length} products
          </div>


        <div className="sortingContainer">
          <select onClick={(e)=>{sortings(e)}} className="sorting" id="sorting">
            sort

            <option className="default" value="default">sort by</option>
            <option className="sortByRating" value="sortByLowestPrice">sort by Lowest price</option>
            <option className="sortByRating" value="sortByHighestPrice">sort by highest price</option>
            <option className="sortByRating" value="a-z">a to z</option>
            <option className="sortByRating" value="z-a">z to a</option>

          </select>
        </div>
    </>
  );
}
export default SortingGridList;
