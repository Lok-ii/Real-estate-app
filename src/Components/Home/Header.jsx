import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo1.png";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData, setData } from "../../Redux/homeSlice";
import TabLink from "./TabLink";
import { CiSearch } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { FaHeart } from "react-icons/fa6";
import { useEffect } from "react";

const Header = () => {
  const [searchHidden, setSearchHidden] = useState(true);
  const hideSearch = () => {
    setSearchHidden((prev) => !prev);
  };
  const [likeColor, setLikeColor] = useState("text-gray-500");

  useEffect(() => {
    if(location.pathname === "/liked"){
      setLikeColor("text-red-500");
    }else{
      setLikeColor("text-gray-500");
    }
  }, [location.pathname])
  
  const loaction = useLocation();
  const navigateTo = useNavigate();
  const topSearchRef = useRef("");
  const dispatch = useDispatch();
  const { data, filteredData } = useSelector((state) => state.home);
  const searchRef = useRef("");
  return (
    <div className="h-[6rem] w-full flex items-center justify-between px-4">
      <div className="h-full flex items-center gap-8">
        <div className="w-[10rem] h-[60%]" onClick={() => navigateTo("/")}>
          <img src={logo} alt="" />
        </div>
        <div className="hidden items-center gap-2 text-gray-400 text-md font-medium tablet:flex">
          <TabLink link={"/"} name={"Home"} />
          <TabLink link={"/liked"} name={"Liked"} />
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 w-[50%] laptop:w-[70%]">
        <form
          className="border-2 items-center justify-between border-buttonColor rounded-lg hidden tablet:flex tablet:w-[80%]"
        >
          <input
            className="pl-4 w-[70%] tablet:w-[82%] h-full outline-none"
            type="text"
            placeholder="Search . . ."
            ref={searchRef}
          />
          <Link to={"/search"} className="w-[30%] laptop:w-[18%]" >
            <button className="py-2 w-full px-4 rounded-r-md bg-buttonColor text-white font-medium"
          onClick={(e) => {
            e.preventDefault();
            dispatch(setSearchData({ search: searchRef.current.value }));
          }}>
              Search
            </button>
          </Link>
        </form>
        <FaHeart onClick={(e) => {
          navigateTo("/liked")}} className={`${likeColor} cursor-pointer flex tablet:hidden`} />
        <CiSearch onClick={hideSearch} className="cursor-pointer flex tablet:hidden" />
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            navigateTo("/search");
            dispatch(setSearchData({ search: topSearchRef.current.value }));
          }}
          className={`absolute w-full transition-all duration-300 left-0 border border-buttonColor  ${
            searchHidden ? "top-[-4rem]" : "top-16"
          } flex items-center bg-white`}
        >
          <input
            type="text"
            className={`outline-none w-[95%] text-gray-600 h-[3.5rem] px-8`}
            placeholder="Search...."
            ref={topSearchRef}
          />
          <RxCrossCircled className="w-[5%] text-gray-600 cursor-pointer" onClick={hideSearch} />
        </form>
      </div>
    </div>
  );
};

export default Header;
