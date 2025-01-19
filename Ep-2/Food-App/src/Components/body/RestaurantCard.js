import React from "react";
import { CDN_URL } from "../../Utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, image, cuisines, sla } = resData;
  return (
    <div className="card">
      <img
        src={
          CDN_URL+image
        }
        alt="res-img"
      />
      <p>{name}</p>
      <p>
        ⭐️{avgRating} : {sla.slaString}
      </p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
