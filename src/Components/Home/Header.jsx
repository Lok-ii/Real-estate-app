import React, { useRef } from "react";
import logo from "../../assets/images/logo1.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData, setData } from "../../Redux/homeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { data, filteredData } = useSelector((state) => state.home);
  const searchRef = useRef("");
  return (
    <div className="h-[6rem] w-full flex items-center justify-between px-4">
      <div className="h-full flex items-center gap-8">
        <div className="w-[10rem] h-full">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-4 text-md font-medium">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending px-4 py-2 rounded-lg "
                : isActive
                ? " px-4 py-2 rounded-lg active text-buttonColor bg-tabColor"
                : " px-4 py-2 rounded-lg "
            }
          >
            Rent
          </NavLink>
          <NavLink
            to="/buy"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending px-4 py-2 rounded-lg "
                : isActive
                ? " px-4 py-2 rounded-lg active text-buttonColor bg-tabColor"
                : " px-4 py-2 rounded-lg "
            }
          >
            Buy
          </NavLink>
          <NavLink
            to="/sell"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending px-4 py-2 rounded-lg "
                : isActive
                ? " px-4 py-2 rounded-lg active text-buttonColor bg-tabColor"
                : " px-4 py-2 rounded-lg "
            }
          >
            Sell
          </NavLink>
          <NavLink
            to="/manageproperty"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending px-4 py-2 rounded-lg "
                : isActive
                ? " px-4 py-2 rounded-lg active text-buttonColor bg-tabColor"
                : " px-4 py-2 rounded-lg "
            }
          >
            Manage Property
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending px-4 py-2 rounded-lg "
                : isActive
                ? " px-4 py-2 rounded-lg active text-buttonColor bg-tabColor"
                : " px-4 py-2 rounded-lg "
            }
          >
            Resources
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 w-1/2">
        <form
          className="border-2 flex items-center justify-between border-buttonColor rounded-lg w-[70%]"
        >
          <input
            className="pl-4 w-[82%] h-full outline-none"
            type="text"
            placeholder="Search . . ."
            ref={searchRef}
          />
          <Link to={"/search"} className="w-[18%]" >
            <button className="py-2 w-full px-4 rounded-r-md bg-buttonColor text-white font-medium"
          onClick={(e) => {
            e.preventDefault();
            dispatch(setSearchData({ search: searchRef.current.value }));
          }}>
              Search
            </button>
          </Link>
        </form>
        <div className="">
          <Link to={"/liked"}>
            <button className="py-2 px-4 rounded-lg bg-buttonColor text-white font-medium">
              Liked
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
