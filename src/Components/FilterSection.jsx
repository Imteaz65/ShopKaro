import { useContext } from "react";
import { FaCheck } from "react-icons/fa";

import { filterContext } from "./FilterContextProvider";
import ConvertingFormattingPrice from "./Helper/ConvertingFormattingPrice";

function FilterSection() {
  const {
    setSearch,
    all_products,
    setFilterValue,
    setFilterCompany,
    category,
    setFilterByColors,
    minPrice,
    maxPrice,
    price,
    setFilterByPrice,
    color,
    clearFilter,
  } = useContext(filterContext);

  // created a funtion that will take allproducts and
  function allFiltersCategory(all_products, category) {
    const categories = [...all_products].map(function (element) {
      return element[category];
      // return element.category;
    });
    return ["All", ...new Set(categories)];
  }

  const uniqueCategories = allFiltersCategory(all_products, "category");

  const uniqueCompany = allFiltersCategory(all_products, "company");

  const Color = allFiltersCategory(all_products, "colors");

  const c = [].concat(...Color);
  const uniqueColor = [...new Set(c)];

  return (
    <>
      <div className="searchContainer">
        <input
          onChange={(event) => {
            setSearch(event);
          }}
          style={{ width: "220px", padding: "3px 5px" }}
          type="text"
          placeholder="search"
        />
      </div>

      <div className="Categoryfiltercontainer defaultMargin">
        <h3 className="heading">Category</h3>
        <div className="buttonsContainer">
          {uniqueCategories.map(function (element, index) {
            return (
              <button
                type="button"
                key={index}
                value={element}
                className={
                  category === element ? "category active" : "category"
                }
                onClick={(e) => {
                  setFilterValue(e);
                }}
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filterCompanyContainer defaultMargin">
        <h3>Company</h3>

        <form action="">
          <label htmlFor="company"></label>
          <select
            onChange={function (e) {
              setFilterCompany(e);
            }}
            className="company"
            id="company"
          >
            {uniqueCompany.map(function (element, index) {
              return (
                <option value={element} key={index}>
                  {element}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filterColorContainer defaultMargin">
        <h3>Color</h3>

        <div className="colorContainer">
          {
            uniqueColor.map(function(element,index){

              if(element==="All"){
                return <button key={index}  value={element}  className="buttonAll"   style={{ backgroundColor: element }}   onClick={(e) =>{setFilterByColors(e);}}  >

                All
                </button>
              }

              else{
                return <button key={index}  value={element}  className={element === color ? "button active" : "button"}   style={{ backgroundColor: element }}   onClick={(e) =>{setFilterByColors(e);}}  >

                {element === color && <FaCheck className="tick"></FaCheck>}
                </button>
              }
              
            })
          }
          
        </div>
      </div>

      <div className="priceContainer defaultMargin">
        <div className="displayPrice">
          <ConvertingFormattingPrice price={price}></ConvertingFormattingPrice>
        </div>

        <div className="filterByPrice">
          <input
            onChange={(e) => {
              setFilterByPrice(e);
            }}
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
          />
        </div>
      </div>

      <div className="clearFilter defaultMargin">
        <button
          onClick={() => {
            clearFilter();
          }}
        >
          Clear Filter
        </button>
      </div>
    </>
  );
}
export default FilterSection;