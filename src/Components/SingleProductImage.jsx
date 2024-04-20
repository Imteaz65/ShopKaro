import { useState } from "react"

function SingleProductImage({image}){

  const [imageObj]=image;
    
  const [images,setImages]=useState(imageObj);
  
  return(
    <>

      <div className="PhotosContainer">
        <div className="sidebar">
          {image.map(function(element,index){
            return <img src={element.url} alt={element.filename} key={index} onClick={(e)=>{setImages(element)}} />
          })}
        </div>
        <div className="fullPhoto">
          <img src={images.url} alt="images.filename" />
        </div>
      </div>

    </>
  )
}
export default SingleProductImage