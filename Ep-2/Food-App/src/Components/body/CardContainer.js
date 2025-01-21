import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const CardContainer = (props) => {
  const { filteredList } = props;
  return (
      <div className="cardcontainer">
        {filteredList.map((res) => (
          <Link to={"/restaurant/menu/"+res.info.id} key={res.info.id}>
          <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
  );
};

export default CardContainer;
