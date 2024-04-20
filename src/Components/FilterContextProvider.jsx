import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "../Context/ProductContext";
import reducer from "./FilterContextReducer";

export const filterContext = createContext({});

const initialState = {
  filter_products: [],
  all_products: [],

  displayGrid: true,
  displayList: false,

  gotAllProduct:false,

  isFilterLoading: true,
  isFilterError: false,

  // for storing the current sortingName
  sortby: "default",

  //for storing the current vatriable insert by user
  searching: "",

  category: "",
  company: "",
  color: "",

  minPrice: "",
  maxPrice: "",
  price: "",
};

function FilterContextProvider({ children }) {
  const { product } = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  function setDisplayGrid() {
    return dispatch({ type: "SET_DISPLAY_GRID" });
  }

  function setDisplayList() {
    dispatch({ type: "SET_DISPLAY_ICON" });
  }

  // setSortingsValue
  function sortings(e) {
    const sortby = e.target.value;

    dispatch({ type: "SET_SORT_BY_VALUE", payload: { sortbyValue: sortby } });
  }

  // executes veryFirst everyTime when the sortBy or product value change on re render
  useEffect(
    function () {
      dispatch({
        type: "FILTER_SEARCHING",
        payload: {
          all_products: state.all_products,
          searching: state.searching,
        },
      });
      dispatch({
        type: "SORTINGS",
        payload: {
          filter_products: state.filter_products,
          sortbyValue: state.sortby,
        },
      });
      dispatch({ type: "CATEGORY_WISE_SORT" });
      dispatch({ type: "COMPANY_WISE_SORT" });
      dispatch({ type: "COLOR_WISE_SORT" });
      dispatch({ type: "PRICE_WISE_SORT" });
    },
    [
      product,
      state.sortby,
      state.searching,
      state.category,
      state.company,
      state.color,
      state.price,
    ]
  );

  // setting SearchValue
  function setSearch(event) {

    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: { searchInput: event.target.value },
    });
  }

  // setFilterValue
  function setFilterValue(e) {

    dispatch({
      type: "SET_FILTER_BY_CATEGORY_VALUE",
      payload: { selectedCategory: e.target.value },
    });
  }

  // setFilterByCompany
  function setFilterCompany(e) {

    dispatch({
      type: "SET_FILTER_BY_COMPANY",
      payload: { selectedCompany: e.target.value },
    });
  }

  // setFilterByColors
  function setFilterByColors(e) {

    dispatch({
      type: "SET_FILTER_BY_COLORS",
      payload: { selectedColors: e.target.value },
    });
  }

  // setFilterByPrice
  function setFilterByPrice(e) {
    dispatch({
      type: "SET_PRICE_VALUE",
      payload: { selectedPrice: e.target.value },
    });
  }

  // clear Filter
  function clearFilter() {
    dispatch({ type: "CLEAR_FILTER" });
  }

  useEffect(
    function () {
      dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: { product: product } });
    },
    [product]
  );

  // console.log("state.searching in filter context", state);
  return (
    <>
      <filterContext.Provider
        value={{
          ...state,
          setDisplayGrid: setDisplayGrid,
          setDisplayList: setDisplayList,
          sortings: sortings,
          setSearch: setSearch,
          setFilterValue: setFilterValue,
          setFilterCompany: setFilterCompany,
          setFilterByColors: setFilterByColors,
          setFilterByPrice,
          clearFilter,
        }}
      >
        {children}
      </filterContext.Provider>
    </>
  );
}
export default FilterContextProvider;
