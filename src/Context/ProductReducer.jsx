function ProductReducer(state,action){

  
  if(action.type==="SET_LOADING"){
    return{...state,isLoading:true}
  }

  else if (action.type === "ALL_PRODUCTS") {

    state.updatePrice.map(function(element,index){
      // console.log(element.price,"============",index);
      // console.log(action.payload.allProduct[index],"index")

      action.payload.allProduct[index].price=element.price;
    })

    const filterData=action.payload.allProduct.filter(function(element){
      if(element.featured===true){
        return element;
      }
    })
    return { ...state, product: action.payload.allProduct,featuredProduct:filterData,isLoading:false,};
  }

  else if(action.type==="IS_ERROR"){
    return{...state,isError:true,isLoading:false};
  }

  // forSinglreProduct
  else if(action.type==="SET_SINGLE_ID"){
    return{...state,idSingleProduct:action.payload.singleProductId}
  }
  
  else if(action.type==="SET_SINGLE_LOADING"){
    return {...state,isSingleLoading:true}
  }
  
  else if(action.type==="SET_SINGLE_PRODU_DATA"){
    // console.log(state.singleProduct,"reducer")
    return {...state,singleProduct:action.payload,isSingleLoading:false,isSingleError:false}
  }

  else if(action.type==="SET_ERROR"){
    return {...state,isSingleLoading:false,isSingleError:true}
  }

  return(
    <>
    
    </>
  )
}
export default ProductReducer