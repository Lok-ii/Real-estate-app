import React from "react";
import logo from "../../assets/images/logo1.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 gap-8 bg-white">
      <div className="flex flex-col items-center w-[90%] laptop:w-[70%] laptop:flex-row justify-around">
        <div className="w-[17rem] h-[6rem]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="flex flex-wrap gap-12 w-[90%] laptop:w-[50%] justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold">SELL A HOME</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Request an offer</p>
              <p className="text-xs cursor-pointer hover:underline">Pricing</p>
              <p className="text-xs cursor-pointer hover:underline">Reviews</p>
              <p className="text-xs cursor-pointer hover:underline">Stories</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold">BUY, RENT AND SELL</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Buy and sell properties</p>
              <p className="text-xs cursor-pointer hover:underline">Rent home</p>
              <p className="text-xs cursor-pointer hover:underline">Builder trade-up</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold">ABOUT</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Company</p>
              <p className="text-xs cursor-pointer hover:underline">How it works</p>
              <p className="text-xs cursor-pointer hover:underline">Contact</p>
              <p className="text-xs cursor-pointer hover:underline">Investors</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold">BUY A HOME</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Buy</p>
              <p className="text-xs cursor-pointer hover:underline">Finance</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold">TERMS & PRIVACY</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Trust & Saftery</p>
              <p className="text-xs cursor-pointer hover:underline">Terms of Service</p>
              <p className="text-xs cursor-pointer hover:underline">Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-semibold">RESOURCES</h1>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="text-xs cursor-pointer hover:underline">Blog</p>
              <p className="text-xs cursor-pointer hover:underline">Guides</p>
              <p className="text-xs cursor-pointer hover:underline">FAQ</p>
              <p className="text-xs cursor-pointer hover:underline">Help Center</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col tablet:flex-row items-center gap-4 mobile-large:px-24 justify-between border-t-2 w-[80%] pt-4 font-medium text-gray-500">
        <p className="text-xs cursor-pointer hover:underline">©2024 Estelle Darcy. All rights Reserved</p>
        <div className="flex items-center gap-8">
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
