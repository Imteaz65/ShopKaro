function reducer(state,action){

  if(action.type==="LOAD_FILTER_PRODUCTS"){
    const priceArray=[...action.payload.product].map(function(element){
      return element.price;
    })


    let maxPrice=[...priceArray].reduce(function(accumulator,element){
      return Math.max(accumulator,element);
    },0);

    
    return {...state,filter_products:[...action.payload.product],all_products:[...action.payload.product],isFilterLoading:false,maxPrice:maxPrice,price:maxPrice,gotAllProduct:true}
  }
  else if(action.type==="SET_DISPLAY_GRID"){
    return {...state,displayGrid:true,displayList:false}
  }
  else if(action.type==="SET_DISPLAY_ICON"){
    return {...state,displayList:true,displayGrid:false,}
  }

  else if(action.type==="SET_SORT_BY_VALUE"){
    // console.log("sortByValue reducer",action.payload.sortbyValue);
    return{...state,sortby:action.payload.sortbyValue}
  }
  
  else if(action.type==="SORTINGS"){
    // imteaz best way is to always copt the content of state into another variables then make changes and assign thos content to the required state
    const filterproducts=state.filter_products;

    if(action.payload.sortbyValue==="sortByLowestPrice"){
      // console.log("lowest chala bhai")
      state.filter_products=filterproducts.sort(function(a,b){
        return parseFloat(a.price)-parseFloat(b.price);
      });
    }
    else if(action.payload.sortbyValue==="sortByHighestPrice"){

      state.filter_products=filterproducts.sort(function(a,b){
        return parseFloat(b.price)-parseFloat(a.price);
      })
    }
    else if(action.payload.sortbyValue==="a-z"){

      state.filter_products=filterproducts.sort((a,b)=>a.name.localeCompare(b.name))
    }
    else if(action.payload.sortbyValue==="z-a"){

      state.filter_products=filterproducts.sort(function(a,b){
        return b.name.localeCompare(a.name);
      })
      // console.log("reducer z to a : state",state)
    }
    else if(action.payload.sortbyValue==="default"){
      
      const {searching}=state;
      if(searching===""){
        state.filter_products=[...state.all_products]
      }
      
    }

    return {...state}
  }

  // setSearch value
  else if(action.type==="SET_SEARCH_VALUE"){

    return {...state,searching:action.payload.searchInput}
  }

  // sorting as per Searching 
  else if(action.type==="FILTER_SEARCHING"){
    
    const products=[...action.payload.all_products];

      const currentProducts=products.filter(function(element){

        return element.name.toLowerCase().includes(action.payload.searching.toLowerCase() )

      });
      // console.log("new current products",currentProducts);

      return {...state,filter_products:currentProducts}
    
  }

  // setCategoryValue
  else if(action.type==="SET_FILTER_BY_CATEGORY_VALUE"){
    return{...state,category:action.payload.selectedCategory}
  }
  // sortByCategory
  else if(action.type==="CATEGORY_WISE_SORT"){

    const {all_products,category,filter_products}=state;
    const copyOfallproducts=[...filter_products]

    if(category==="All"){
      return {...state,filter_products:state.all_products,category:""}
    }

    else if(category!=="" && category!=="All"){

      // console.log("hum kyu chal rhey hai bhai: value of category",category)
      const sortByCategoryArray=copyOfallproducts.filter(function(element){

        return element.category===category;
      })
      // console.log("category wise filtered product after",sortByCategoryArray)
      return{...state,filter_products:sortByCategoryArray}
    }

    else{
      return{...state}
    }
  }
 
  // setValueofCompanyState
  else if(action.type==="SET_FILTER_BY_COMPANY"){
    return {...state,company:action.payload.selectedCompany}
  }

  // setCompanyWiseSort
  else if(action.type==="COMPANY_WISE_SORT"){

    const {filter_products,all_products,company}=state;

    if(company==="All"){
      // console.log("All companyfilterWorking",filter_products)
      return {...state,filter_products:[...all_products],company:""}
    }
    else if(company!==""){
      // console.log("non empty working companyfilterWorking",filter_products)

      const companyWiseSort=[...filter_products].filter(function(element){
        return element.company===company;
      });

      return {...state,filter_products:companyWiseSort}
    }
    else{
      // console.log("else companyfilterWorking",state)

      return {...state}
    }
  }


  // setColorValue 
  else if(action.type==="SET_FILTER_BY_COLORS"){
    // console.log("coloname :",action.payload.selectedColors);
    return {...state,color:action.payload.selectedColors}
  }

  // setColorWiseSort
  else if(action.type==="COLOR_WISE_SORT"){

    const {filter_products,color,all_products}=state;

    if(color==="All"){
      return {...state,filter_products:[...all_products],color:""}
    }

    else if(color!==""){

      if(color==="All"){
        return {...state,filter_products:[...state.filter_products]}
      }
      else if(color!==""){
        // console.log("before color sorting",filter_products)
        const colorWiseSort=[...filter_products].filter(function(element){
        return element.colors.some(function(colors){
          return colors===color;
        })
      })
      // console.log("after color sorting",filter_products)

      return {...state,filter_products:colorWiseSort}
      }
      
    }
    else{
      return {...state}
    }
  }

  // setPriceValue
  else if(action.type==="SET_PRICE_VALUE"){
    return  {...state,price:action.payload.selectedPrice}
  }

  // setPriceWiseSort
  else if(action.type==="PRICE_WISE_SORT"){
    const {filter_products,price}=state;
    const priceWiseSort=[...filter_products].filter(function(element){
      return element.price<=price;
    })

    return {...state,filter_products:priceWiseSort}
  }
  
  // setFilter Default
  else if(action.type==="CLEAR_FILTER"){
    
    // console.log("clearfilters if",state.filter_products)
    return {...state,filter_products:[...state.all_products],
    searching:"",
    sortby:"default",
    category:"",
    company:"",
    color:"",
    price:state.maxPrice,
    }
  }
 
}
export default reducer;
