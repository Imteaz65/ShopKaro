//create context
//provider (either by direct providng <AppContext.Provider>above main</AppContext.Provider> or this below way)

import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import { useReducer } from "react";
import ProductReducer from "./ProductReducer";

export const AppContext = createContext({});

const API = "https://api.pujakaitem.com/api/products";

const InitialState = {
  product: [],
  featuredProduct: [],
  isError: false,
  isLoading: true,

  // for updating the price 
  updatePrice:[
    {name:"iphone x",price:600000},{name:"samsung s20",price:500000},{name:"Dell Series",price:702899},{name:"Nokia 420",price:102999},{name:"Mac Pc",price:200999},
    {name:"Macbook Pro",price:699999},{name:"Asus gseries",price:509999},{name:"accessories",price:409999},{name:"Iwatch",price:109999},{name:"user need",price:300099},{name:"rolex premium",price:99999},{name:"galaxy w20",price:311999},
  ],

  // SecondApi
  // idSingleProduct:"",

  // forSingleProductPage
  singleProduct: {},
  isSingleLoading:true,
  isSingleError:false
};

function AppProvider({ children }) {

  const [state, dispatch] = useReducer(ProductReducer, InitialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;

      dispatch({ type: "ALL_PRODUCTS", payload: { allProduct: products } });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };


  //SecondAppi Calling Single SpecificProduct https://api.pujakaitem.com/api/products
  async function SinglePoductPageApiCall(url) {

    dispatch({type:"SET_SINGLE_LOADING"});

    try {
      const res = await axios.get(url);
      const singleProduct= await res.data;
      dispatch({type:"SET_SINGLE_PRODU_DATA",payload:singleProduct})
    } catch (error) {
      dispatch({type:"SET_ERROR"});
    }
    
    // dispatch({ type: "check",payload:{SingleProductInfo:res} });
  }

  useEffect(function () {
    getProducts(API);
  },[]);

  
  return (
    <>
      <AppContext.Provider
        value={{ ...state, SinglePoductPageApiCall: SinglePoductPageApiCall,}}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}
export default AppProvider;
