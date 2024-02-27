import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Beds from "../../assets/Beds";
import Bath from "../../assets/Bath";
import Area from "../../assets/Area";
import { setLikedData } from "../../Redux/homeSlice";
import { useLocation } from "react-router-dom";

const Warehouse = ({ warehouse }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { likedData } = useSelector((state) => state.home);

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked"));
    if(liked){
      dispatch(setLikedData({type:"fromLocal", payload:liked}));
    }
  },[])
  return (
    <div className="w-[95%] mobile-large:w-[45%] laptop:w-[30%] border-2 rounded-lg border-buttonColor cursor-pointer transition-all duration-300 hover:shadow-3xl">
      <div className="w-full h-[15rem] rounded-t-lg">
        <img
          className="w-full h-full rounded-t-lg"
          src={warehouse.image}
          alt=""
        />
      </div>
      <div className="flex items-center justify-between px-4 py-2">
        <p className="text-xl font-semibold  text-buttonColor">
          ₹ {warehouse.price}/day
        </p>
        <div
          className={`rounded-[50%] border-2 border-tabColor w-[2rem] h-[2rem] flex items-center justify-center z-[8] ${likedData.includes(warehouse.id) ? "border-red-600" : ""} transition-all duration-200`}
          onClick={() => {
            if(!likedData.includes(warehouse.id)){
              dispatch(setLikedData(warehouse.id));
            }else{
              const newLiked = likedData.filter(item => {
                return item != warehouse.id;
              })
              dispatch(setLikedData({type: "removed", payload:newLiked}))
            }
            // localStorage.setItem("liked", JSON.stringify(likedData));
          }}
        >
          <FaRegHeart className={`${likedData.includes(warehouse.id) ? "fill-red-600" : ""} transition-all duration-200`} />
        </div>
      </div>
      <div className="flex flex-col px-4 gap-3">
        <p className="text-2xl font-medium">{warehouse.name}</p>
        <p className="w-full border-b border-grayText pb-2 text-sm text-grayText font-medium">
          {warehouse.address}, {warehouse.city}
        </p>
        <div className="flex items-center justify-between pb-3 px-4">
          <div className="flex items-center text-grayText font-medium text-md gap-2">
            <Beds /> <span>{warehouse.info.bed}</span>
          </div>
          <div className="flex items-center text-grayText font-medium text-md gap-2">
            <Bath /> <span>{warehouse.info.bathrooms}</span>
          </div>
          <div className="flex items-center text-grayText font-medium text-md gap-2">
            <Area /> <span>{warehouse.info.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
