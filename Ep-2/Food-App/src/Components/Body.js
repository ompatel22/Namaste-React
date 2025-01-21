import React from "react";
import CardContainer from "./body/CardContainer";
import SearchBar from "./body/SearchBar";
import Filter from "./body/Filter";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./body/Shimmer";
//import apiRes from "../Utils/data";
const Body = () => {

  const lat=23.022505;
  const lng=72.5713621;
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`);
    const datax = await response.json();
    const fetchedList=datax?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    console.log(fetchedList);
    setResList(fetchedList);
    setFilteredList(fetchedList);
    // setTimeout(() => {
    //   const fetchedList=apiRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //   //console.log(fetchedList);
    //   setResList(fetchedList);
    //   setFilteredList(fetchedList);
    // },500);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return filteredList.length===0? (<Shimmer/>) : (<div className="body">
    <SearchBar filteredList={filteredList} setFilteredList={setFilteredList} resList={resList}/>
    <Filter filteredList={filteredList} setFilteredList={setFilteredList} resList={resList}/>
    <CardContainer filteredList={filteredList} setFilteredList={setFilteredList} />
  </div>);
};

export default Body;