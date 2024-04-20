import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import AddToCartToggleButton from "./AddToCardToggleButton";

function ColorsSection({ singleProduct }) {
  const { colors, stock, id } = singleProduct;
  const [color, setColor] = useState(colors[0]);

  return (
    <>

      <div className="singleProductColorSection">
            {colors.map(function (element, index) {
              return (
                <button
                  onClick={() => setColor(element)}
                  className={color === element ? "button active" : "button"}
                  key={index}
                  style={{ backgroundColor: element }}
                >
                  
                  {color === element ? <FaCheck className="tick"/> : null}
                </button>
              );
            })}
      </div>
      <AddToCartToggleButton stock={stock} color={color} product={singleProduct}></AddToCartToggleButton>
    </>
    
    
  );
}
export default ColorsSection;
