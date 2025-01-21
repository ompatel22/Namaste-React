import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constants";

const RestaurantMenu = () => {
  const paramsObj = useParams();
  const { resId } = paramsObj;

  const [fetchedInfo, SetFetchedInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    // const datax = data?.data?.cards[2]?.card?.card?.info;
    // console.log(datax);
    SetFetchedInfo(data);
    console.log(data);
  };

  if (fetchedInfo == null) {
    return <div>Loading...</div>;
  }

  const hotelInfo = fetchedInfo?.data?.cards[2]?.card?.card?.info;
  console.log(hotelInfo);

  const menucards =
    fetchedInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  console.log(menucards);

  return (
    <div className="restaurant-menu">
      <h1>
        {hotelInfo.name} (
        {hotelInfo.isOpen ? "Currently Open" : "Currently Close"})
      </h1>
      <h4>
        {hotelInfo.city}, {hotelInfo.areaName}, {hotelInfo.locality}{" "}
      </h4>
      <h4>
        {hotelInfo.avgRating}⭐️ ({hotelInfo.totalRatingsString}) :{" "}
        {hotelInfo.costForTwoMessage.toLowerCase()} : {hotelInfo.sla.slaString}
      </h4>
      <h4>Cuisines : {hotelInfo.cuisines.join(", ")}</h4>
      <h3>Menu</h3>
      <ul>
        {menucards.map((mcard) => (
          <li>
            <h4>
              {mcard.card.info.name} : Rs.{" "}
              {mcard.card.info.defaultPrice / 100 ||
                mcard.card.info.price / 100}
            </h4>
            <p>{mcard.card.info.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
