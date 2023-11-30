import React from "react";
import logoReadly from "../../../assets/Logo2.png";
import logoDac from "../../../assets/DAC.png";
import logoPya from "../../../assets/pedidosya.png";

const Footer = () => {
  return (
    <div className="flex justify-around bg-black p-4 items-center">
      <div className="flex justify-center items-center">
        <p className="m-2 text-white"></p>
        <p className="h-10 w-10 m-1">
          <img src={logoPya} alt="Pedidos Ya" />
        </p>
        <p className="h-10 w-10 m-1">
          <img src={logoDac} alt="DAC" />
        </p>
      </div>
      <p className="m-2 text-white">
        <img className="h-16 w-36" src={logoReadly} alt="Logo" />
      </p>
      <p className=" text-gray-500 m-2 text-lg">
        © Copyright 2023 / ReadlyGoods
      </p>
    </div>
  );
};

export default Footer;
