function cartReducer(state, action) {
  if (action.type === "ADD_PRODUCTS_TO_CART") {
    const { carts } = state;
    const { product, productCount, color, id } = action.payload;
    // console.log("reducer cart working", productCount);

    let cartProduct;
    // combinely created an objects containing information of currently clicked product
    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      productCount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
      quantity: "",
    };
    let newFilterCarts;

    // checked if the cart length is empty or not if not empty the  check cart product id is !== product id
    if (carts.length > 0) {
      const newFilterCarts = carts.find(function (element) {
        return element.id == cartProduct.id;
      });
      // console.log(newFilterCarts, "newFilterCarts");

      if (newFilterCarts) {
        // console.log(newFilterCarts, "boolean");
        const newCart = carts.map(function (element) {
          if (element.id === cartProduct.id) {
            let newAmount = element.productCount + productCount;

            if (newAmount > cartProduct.max) {
              newAmount = cartProduct.max;
            }
            // element.quantity=newAmount;
            return { ...element, productCount: newAmount };
          } else {
            return element;
          }
        });
        // console.log("quantity", cartProduct.quantity);
        return { ...state, carts: newCart };
      } else {
        return { ...state, carts: [...state.carts, cartProduct] };
      }
    } else {
      return { ...state, carts: [...state.carts, cartProduct] };
    }
  }

  // deleting product from cart
  else if (action.type === "DELETE_PRODUCTS_FROM_CART") {
    const { carts } = state;
    const newCarts = carts.filter(function (element) {
      return element.id !== action.payload.productId;
    });
    return { ...state, carts: newCarts };
  }

  // increment product from cartPage
  else if (action.type === "INCREMENT_PRODUCT_FROM_CART") {
    const newFilterCart = state.carts.map(function (element) {
      if (element.id === action.payload.productId) {
        // console.log("id is product", element);

        let newProductCount = element.productCount + 1;

        if (newProductCount > element.max) {
          newProductCount = element.max;

          alert(`only ${element.productCount} are left`);
        }
        return { ...element, productCount: newProductCount };
      } else {
        return element;
      }
    });
    return { ...state, carts: newFilterCart };
  }

  // decrement product from cartPage
  else if (action.type === "DECREMENT_PRODUCT_FROM_CART") {
    const newFilterCart = state.carts.map(function (element) {
      if (element.id === action.payload.productId) {
        // console.log("id is product", element);

        let newProductCount = element.productCount - 1;

        if (newProductCount <= 1) {
          newProductCount = 1;
        }
        return { ...element, productCount: newProductCount };
      } else {
        return element;
      }
    });
    return { ...state, carts: newFilterCart };
  }

  // clearCart
  else if (action.type === "CLEAR_CART") {
    const empty = [];
    return { ...state, carts: empty };
  }

  if (action.type === "NO_OF_PRODUCTS_IN_CARTS") {
    let CartTotalItems = state.carts.reduce(function (initialValue, element) {
      return (initialValue = initialValue + 1);
    }, 0);
    return { ...state, totalItems: CartTotalItems };
  }
  if (action.type === "SUB_TOTAL") {
    let Total_price = state.carts.reduce(function (initialValue, element) {
      const subtotal = element.price * element.productCount;
      return (initialValue = initialValue + subtotal);
    }, 0);
    
    return { ...state, totalPrice: Total_price };
  }
}
export default cartReducer;
