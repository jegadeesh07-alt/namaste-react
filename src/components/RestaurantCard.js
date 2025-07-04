import { useContext } from "react";
import { CDN_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
  const { resData } = props;


  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[230px] h-[510px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) =>{
    return (
      <div>
        <label className="bg-black m-2 p-2 absolute">Promoted</label>
        <RestaurantCard {...props}/> 
      </div>
    ) 
  }
}

export default RestaurantCard;
