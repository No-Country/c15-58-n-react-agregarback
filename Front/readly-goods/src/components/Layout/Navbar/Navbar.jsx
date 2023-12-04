import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo2 from "../../../assets/Logo2.png";
import Modals from "../../modal_formularios/Modals";
import { context } from "../../../context";

const Navbar = () => {
  const { openModal } = useContext(context);

  return (
    <header className="sticky top-0 z-10 w-full  bg-black">
      <nav className="w-3/5 flex text-white h-24 items-center justify-between m-auto">
        <a className="p-5" href="/">
          <img className="h-20 w-44" src={Logo2} alt="logo" />
        </a>
        <ul className="flex items-center justify-end text-sm gap-12">
          <div className="flex items-center justify-end gap-3">
            <li className="uppercase">
              <Link to="/">inicio</Link>
            </li>
            <li className="uppercase">
              <Link to="/books">catalogo</Link>
            </li>
            <li className="uppercase">
              <Link to="/faq">compras online</Link>
            </li>
          </div>
          <div className="flex items-center justify-end gap-6">
            <li className="cursor-pointer" onClick={openModal}>
              {/*-----login------------------------------*/}
              <FontAwesomeIcon className="h-5" icon={faUser} />
            </li>
            <li>
              {/*----------CARRITO DE COMPRA-----------------------*/}
              <Link to="/cart">
                <FontAwesomeIcon className="h-5" icon={faCartShopping} />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <Modals />
    </header>
  );
};

export default Navbar;
