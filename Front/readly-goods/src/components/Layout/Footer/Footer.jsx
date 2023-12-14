import React from "react";
import logo from "../../../assets/logo/logo.png";
import logoDac from "../../../assets/DAC.png";
import logoPya from "../../../assets/pedidosya.png";

const Footer = () => {
  return (
    <footer className="bg-[#822626] w-full">
      <div className="flex items-center justify-between w-3/5 p-4 m-auto">
        <div className="flex items-center justify-center">
          <p className="m-2 text-white"></p>
          <p className="w-10 h-10 m-1">
            <img src={logoPya} alt="Pedidos Ya" />
          </p>
          <p className="w-10 h-10 m-1">
            <img src={logoDac} alt="DAC" />
          </p>
        </div>
        <p className="flex items-center m-2 text-white">
          <span className="font-roboto-serif lg:text-2xl">Readly</span>
          <img className="w-24 h-auto" src={logo} alt="Logo" />
          <span className="font-roboto-serif lg:text-2xl">Goods</span>
        </p>
        <p className="m-2 text-lg text-white ">
          © Copyright 2023 / ReadlyGoods
        </p>
      </div>
    </footer>
  );
};

export default Footer;
