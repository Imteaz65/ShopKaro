import { IoMdStarHalf } from "react-icons/io";
import { VscStarFull } from "react-icons/vsc";
import { IoIosStarOutline } from "react-icons/io";

function Stars({ stars, reviews }) {
  const starRatings = Array.from({ length: 5 }, (Element, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <VscStarFull />
        ) : stars >= number ? (
          <IoMdStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
    );
  });

  return(
    <>
      <div className="stars">
        {starRatings} &nbsp;
        <span className="span">({reviews} customer reviews)</span>
      </div>
    </>
  );
}
export default Stars;

/*
const Number = 5;
  const ratings = 4.3;
  let fullstars = 0;
  let halfStar = 0;
  let noStar = 0;

  for (let i = 1; i <= Number; i++) {
    let pointRating = i - 1 + 0.5;
    if (ratings >= i) {
      fullstars++;
      return <IoMdStarHalf />
    } else if (ratings >= pointRating) {
      halfStar++;
      return <VscStarFull />
    } else {
      noStar++;
      return <IoIosStarOutline />

    }
  }
  console.log("fullStar : ", fullstars);
  console.log("halfStars : ", halfStar);
  console.log("noStar : ", noStar);

*/
