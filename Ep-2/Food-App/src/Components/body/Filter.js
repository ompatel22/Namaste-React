import React from "react";

const Filter = (props) => {
  const {resList,setResList} = props;
  return (
    <div className="filter">
      <button onClick={() => {
        const filteredList=resList.filter(res=>res.avgRating>=4.5);
        setResList(filteredList);
        console.log("hello");
      }}>Top Rated Restaurants</button>
    </div>
  );
};
export default Filter;