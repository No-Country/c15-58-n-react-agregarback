import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { context } from "../../../../context";

const ButtonUser = () => {
  const { handleCloseSesion } = useContext(context);
  const [accordionOpen, setAccordionOpen] = useState(false);

  //--------------------tome del storage el nombre de usuario-----------
  const user = localStorage.getItem("userData"); //
  const userdata = JSON.parse(user); //
  //---------------------------------------------------------

  return (
    <>
      <li className="cursor-pointer flex  ">
        {/*-----login------------------------------*/}
        <div className="">
          <button
            className="bg-[#822626] h-14 p-2 w-full rounded flex items-center justify-center flex-col hover:bg-[#8f3232]"
            onClick={() => setAccordionOpen(!accordionOpen)}
          >
            <FontAwesomeIcon className="h-5 text-[#E6DDBC] " icon={faUser} />
            <div className="h-1 text-[#E6DDBC] text-xs">
              {userdata.data.user.username}
            </div>
          </button>
          <div
            className={`p-2 border-red-800 rounded grid overflow-hidden transition-all duration-300 ease-in-out  hover:bg-[#8f3232] 
            ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div
              className="text-[##E6DDBC] text-xs text-center overflow-hidden"
              onClick={handleCloseSesion}
            >
              SALIR
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ButtonUser;
