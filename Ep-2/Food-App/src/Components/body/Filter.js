import React from "react";

const Filter = (props) => {
  const { filteredList, setFilteredList, resList } = props;
  return (
    <div className="filter">
      <button
        onClick={() => {
          const updatedFilteredList = resList.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setFilteredList(updatedFilteredList);
          console.log("hello");
        }}
      >
        Top Rated Restaurants
      </button>
      <button className='seeall'  onClick={() => {
        setFilteredList(resList);
      }}>See All Restaurants</button>
    </div>
  );
};
export default Filter;
