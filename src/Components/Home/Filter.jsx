import React, { useRef } from "react";
import warehouseData from "../../assets/json/Warehouse.json";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredData, setData } from "../../Redux/homeSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { data, filteredData } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const cityRef = useRef("");
  const typeRef = useRef("");
  const priceRef = useRef("");

  const cities = [...new Set(warehouseData.map((warehouse) => warehouse.city))];
  const types = [...new Set(warehouseData.map((warehouse) => warehouse.type))];
  return (
    <form className="flex items-center w-[90%] justify-between flex-wrap">
      <div className="flex items-center justify-evenly w-[90%] flex-wrap">
        <div className="flex items-center gap-4">
          <label htmlFor="city">Enter City</label>
          <select name="city" id="city" ref={cityRef}>
            <option value="">All Cities</option>
            {cities.map((item) => {
              return (
                <option key={nanoid()} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="types">Property Type</label>
          <select name="types" id="types" ref={typeRef}>
            <option value="">Select Type</option>
            {types.map((item) => {
              return (
                <option key={nanoid()} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="price">Price</label>
          <select name="price" id="price" ref={priceRef}>
            <option value={500}>Rs. 0 - 500</option>
            <option value={1000}>Rs. 500 - 1000</option>
            <option value={1500}>Rs. 1000 - 1500</option>
            <option value={2000}>Rs. 1500 - 2000</option>
            <option value={2500}>Rs. 2000 - 2500</option>
            <option value={3000}>Rs. 2500 - 3000</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="py-2 px-4 rounded-lg bg-buttonColor text-white font-medium"
        onClick={(e) => {
          e.preventDefault();
          dispatch(
            setFilteredData({
              city: cityRef.current.value,
              type: typeRef.current.value,
              price: priceRef.current.value,
            })
          );
          navigate("/filter");
        }}
      >
        Filter
      </button>
    </form>
  );
};

export default Filter;
