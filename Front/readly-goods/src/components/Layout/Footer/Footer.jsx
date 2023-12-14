import React from "react";
import logo from "../../../assets/logo/logo.png";
import logoDac from "../../../assets/DAC.png";
import logoPya from "../../../assets/pedidosya.png";

const Footer = () => {
  return (
    <footer className="bg-[#822626] w-full">
      <div className="flex items-center justify-between w-[100%] md:w-3/5 p-1 md:p-4 m-auto">
        <div className="flex items-center justify-center md:p-1 p-5">
          
          <p className="w-5 sm:w-7 sm:h-7 h-5 md:w-10 md:h-10 m-1">
            <img src={logoPya} alt="Pedidos Ya" />
          </p>
          <p className="w-5 sm:w-7 sm:h-7 h-5 md:w-10 md:h-10 m-1">
            <img src={logoDac} alt="DAC" />
          </p>
        </div>
        <p className=" md:flex md:justify-around  md:items-center m-2 md:p-3 text-white">
          <span className="font-roboto-serif px-3 md:px-0  lg:text-2xl">Readly</span>
          <img className="w-20 md:w-24 h-auto" src={logo} alt="Logo" />
          <span className="font-roboto-serif  px-3 md:px-0 lg:text-2xl">Goods</span>
        </p>
        <p className="m-2 w-[10rem] md:w-15 text-xs md:text-lg text-white md:text-right ">
          © Copyright 2023 / ReadlyGoods
        </p>
      </div>
    </footer>
  );
};

export default Footer;
