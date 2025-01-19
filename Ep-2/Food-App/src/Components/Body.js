import React from 'react'
import CardContainer from './body/CardContainer'
import SearchBar from './body/SearchBar'
import Filter from './body/Filter'
import { useState } from 'react'
import restaurants from '../Utils/data'

const Body = () => {
  const [resList,setResList]=useState(restaurants);
  return (
    <div className='body'>
        <SearchBar/>
        <Filter resList={resList} setResList={setResList}/>
        <CardContainer resList={resList} setResList={setResList}/>
    </div>
  )
}

export default Body