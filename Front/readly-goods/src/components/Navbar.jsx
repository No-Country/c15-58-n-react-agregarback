import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="flex bg-black text-white h-24 items-center justify-between">
        
        <a className='p-5' href="/">
            <img 
                className='h-20 w-44'
                src="src/assets/Logo2.png" 
                alt="logo" 
            />
        </a>
        <ul className="flex items-center justify-end">
          <li className="uppercase p-3">inicio</li>
          <li className="uppercase p-4">catalogo</li>
          <li className="uppercase p-4">compras online</li>
          <li className="p-5"><FontAwesomeIcon className="h-5" icon={faUser} /></li>    {/*-----login----*/}
          <li className=" p-9"><FontAwesomeIcon className="h-5" icon={faCartShopping} /></li>  {/*-----CARRITO DE COMPRA----*/}
        </ul>
      </nav>
  )
}

export default Navbar