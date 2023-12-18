import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import Modals from "../../modal_formularios/Modals";
import { context } from "../../../context";
import ButtonUser from "./navbarComponents/ButtonUser";

const Navbar = () => {
  const { products, openModal, loginOk, form, badgeCount } =
    useContext(context);

  return (
    <header className="sticky top-0 z-10 w-full  bg-[#822626]">
      <nav className="flex items-center justify-between w-[90%] sm:w-[80%] md:w-[75%] lg:w-[65%] h-24 m-auto text-white">
        <a className="sm:flex items-center" href="/">
          <span className="font-roboto-serif lg:text-2xl text-sm">Readly</span>
          <img className="w-12 sm:w-20 md:w-24 h-auto" src={Logo} alt="logo" />
          <span className="font-roboto-serif lg:text-2xl text-sm">Goods</span>
        </a>

        <ul className="flex items-center justify-end text-sm lg:text-base">
          <li className="uppercase sm:p-2 md:p-3 lg:px-5 p-5 hover:text-[#262525]">
            <Link to="/">inicio</Link>
          </li>

          <li className="uppercase sm:p-2 md:p-3 lg:px-5 p-5 hover:text-[#262525]">
            <Link to="/books">catalogo</Link>
          </li>

          <li className="uppercase sm:p-2 md:p-3 lg:px-5 p-5 hover:text-[#262525]">
            <Link to="/faq">FAQ</Link>
          </li>
          {/*----------------------------login--------------------------------------------*/}
          {loginOk ? (
            <ButtonUser />
          ) : (
            <li
              className="flex flex-col items-center lg:px-5 p-1 cursor-pointer sm:p-5"
              onClick={openModal}
            >
              <FontAwesomeIcon
                className={"text-white h-5  hover:text-[#262525]"}
                icon={faUser}
              />
            </li>
          )}
          {/*--------------------------CARRITO DE COMPRA---------------------------------*/}
          <li className="relative inline-flex lg:pl-5 p-2 pl-5 sm:pl-5">
            <Link to="/cart">
              <FontAwesomeIcon
                className=" h-5 hover:text-[#262525]"
                icon={faCartShopping}
              />
              {badgeCount ? (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
                  {badgeCount}
                </div>
              ) : (
                <></>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <Modals />
    </header>
  );
};

export default Navbar;
