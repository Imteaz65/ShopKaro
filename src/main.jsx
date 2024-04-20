import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Product from "./Components/Product.jsx";
import Cart from "./Components/Cart.jsx";
import Error from "./Components/Error.jsx";
import SingleProduct from "./Components/SingleProduct.jsx";


import AppProvider from "./Context/ProductContext.jsx";
import FilterContextProvider from "./Components/FilterContextProvider.jsx";


import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import CartContextProvider from "./Context/CartContextProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/product", element: <Product></Product> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart></Cart> },
      { path: "*", element: <Error></Error> },
      { path:"/singleproduct/:ids", element:<SingleProduct/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </CartContextProvider>
      </FilterContextProvider>
    </AppProvider>
    
  </React.StrictMode>
);
