import React from "react";
import RestaurantCard from "./RestaurantCard";

const CardContainer = (props) => {
  const {resList} = props;
  return (
    <div className="cardcontainer">
      {resList.map((res) => (
        <RestaurantCard key={res.id} resData={res} />
      ))}
    </div>
  );
};

export default CardContainer;
