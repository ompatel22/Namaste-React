import React from "react";
import RestaurantCard from "./RestaurantCard";

const CardContainer = (props) => {
  const {filteredList} = props;
  return (
    <div className="cardcontainer">
      {filteredList.map((res) => (
        <RestaurantCard key={res.info.id} resData={res.info} />
      ))}
    </div>
  );
};

export default CardContainer;
