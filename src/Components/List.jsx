import ListProductCard from "./ListProductCard";

function List({filter_products}){

  return(
    <>
      <div className="displayList">

        {filter_products.map(function(element){
          return <ListProductCard key={element.id} element={element}></ListProductCard>
        })
        }
        
        
      </div>
    </>
  )
}
export default List;