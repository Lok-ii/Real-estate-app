import React, { useEffect } from 'react'
import Filter from './Filter'
import warehouseData from "../../assets/json/Warehouse.json";
import Warehouse from './Warehouse';
import { setFilteredData, setData, setSearchData } from '../../Redux/homeSlice';
import { useLocation } from "react-router-dom";
import {  useDispatch, useSelector } from 'react-redux';


const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { data, filteredData, searchData, likedData } = useSelector(state => state.home);

  useEffect(() => {
    console.log(location.pathname);
    if(location.pathname === "/"){
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(setData(warehouseData));
    }else if(location.pathname === "/liked"){
      const likedArray = warehouseData.filter((item) => {
        return likedData.includes(item.id);
      })
      dispatch(setData(likedArray));
    }
  }, [location.pathname])
  return (
    <div className='flex flex-col items-center gap-8 w-full'>
      <Filter />
      <div className=' flex items-center flex-wrap w-[95%] laptop:w-[80%] justify-around gap-4'>
        {
            data.length !== 0 ? data.map((warehouse) => {
                return <Warehouse warehouse={warehouse} key={warehouse.id} />
            }) : "No Data Found"
        }
      </div>
    </div>
  )
}

export default Home
