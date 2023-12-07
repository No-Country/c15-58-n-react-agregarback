import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
import Modals from "../../modal_formularios/Modals";
import { context } from "../../../context";

const Navbar = () => {
  const { openModal, loginOk, form } = useContext(context);

  return (
    <header className="sticky top-0 z-10 w-full  bg-[#822626]">
      <nav className="w-3/5 flex text-white h-24 items-center justify-between m-auto">
        <a className="flex items-center" href="/">
          <span className="font-roboto-serif lg:text-2xl">Readly</span>
          <img className="h-auto w-24" src={Logo} alt="logo" />
          <span className="font-roboto-serif lg:text-2xl">Goods</span>
        </a>

        <ul className="flex items-center justify-end text-sm lg:text-base">
          <li className="uppercase sm:p-3 p-1 hover:text-[#262525]">
            <Link to="/">inicio</Link>
          </li>

          <li className="uppercase sm:p-3 p-1 hover:text-[#262525]">
            <Link to="/books">catalogo</Link>
          </li>

          <li className="uppercase sm:p-3 p-1 hover:text-[#262525]">
            <Link to="/faq">compras online</Link>
          </li>

          <li
            className="sm:p-5 p-1 cursor-pointer flex items-center flex-col"
            onClick={openModal}
          >
            {/*-----login------------------------------*/}
            <FontAwesomeIcon
              className={
                loginOk
                  ? "h-5 text-[#262525]"
                  : "text-white h-5 hover:text-[#262525]"
              }
              icon={faUser}
            />
            {loginOk && (
              <h6 className="h-3 text-[#262525] text-xs">{form.username}</h6>
            )}
          </li>

          <li className=" sm:p-5 p-1">
            {/*----------CARRITO DE COMPRA-----------------------*/}
            <Link to="/cart">
              <FontAwesomeIcon
                className="h-5 hover:text-[#262525]"
                icon={faCartShopping}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Modals />
    </header>
  );
};

export default Navbar;
