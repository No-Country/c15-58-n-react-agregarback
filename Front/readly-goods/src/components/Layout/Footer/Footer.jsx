import React from "react";
import logo from "../../../assets/logo/logo.png";
import logoDac from "../../../assets/DAC.png";
import logoPya from "../../../assets/pedidosya.png";

const Footer = () => {
  return (
    <footer className="bg-[#822626] w-full">
      <div className="w-3/5 m-auto flex justify-between p-4 items-center">
        <div className="flex justify-center items-center">
          <p className="m-2 text-white"></p>
          <p className="h-10 w-10 m-1">
            <img src={logoPya} alt="Pedidos Ya" />
          </p>
          <p className="h-10 w-10 m-1">
            <img src={logoDac} alt="DAC" />
          </p>
        </div>
        <p className="m-2 text-white flex items-center">
          <span className="font-roboto-serif lg:text-2xl">Readly</span>
          <img className="h-auto w-24" src={logo} alt="Logo" />
          <span className="font-roboto-serif lg:text-2xl">Goods</span>
        </p>
        <p className=" text-white m-2 text-lg">
          © Copyright 2023 / ReadlyGoods
        </p>
      </div>
    </footer>
  );
};

export default Footer;
