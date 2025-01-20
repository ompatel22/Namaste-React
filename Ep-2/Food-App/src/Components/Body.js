import React from "react";
import CardContainer from "./body/CardContainer";
import SearchBar from "./body/SearchBar";
import Filter from "./body/Filter";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./body/Shimmer";
import apiRes from "../Utils/data";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchData = async () => {
    // const response = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.3371140600726&lng=73.18250946757725&carousel=true&third_party_vendor=1");
    // const datax = await response.json();
    // const fetchedList=datax?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(fetchedList);
    // setResList(fetchedList);
    setTimeout(() => {
      const fetchedList=apiRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      //console.log(fetchedList);
      setResList(fetchedList);
      setFilteredList(fetchedList);
    },500);
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